import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const EXCEPTIONS = [
  {
    advisory: "GHSA-vfj7-8cjw-p6xm",
    cve: "CVE-2026-93687",
    expiresOn: "2026-12-15",
  },
];

const BLOCKING_SEVERITIES = new Set(["high", "critical"]);

function advisoryId(via) {
  const match = via.url?.match(/GHSA-[a-z0-9-]+/i);
  return match?.[0] ?? null;
}

function resolveAdvisories(name, vulnerabilities, seen = new Set()) {
  if (seen.has(name)) return new Set();

  const vulnerability = vulnerabilities[name];
  if (!vulnerability) return new Set();

  const nextSeen = new Set(seen).add(name);
  const advisories = new Set();

  for (const via of vulnerability.via ?? []) {
    if (typeof via === "string") {
      for (const id of resolveAdvisories(via, vulnerabilities, nextSeen)) advisories.add(id);
      continue;
    }

    const id = advisoryId(via);
    if (id) advisories.add(id);
  }

  return advisories;
}

export function evaluateAudit(report, { exceptions = EXCEPTIONS, today } = {}) {
  if (report.error) {
    return { ok: false, blocked: [{ name: "npm audit", reason: report.error.summary ?? "audit error" }], excepted: [] };
  }

  const currentDate = today ?? new Date().toISOString().slice(0, 10);
  const vulnerabilities = report.vulnerabilities ?? {};
  const blocked = [];
  const excepted = [];

  for (const [name, vulnerability] of Object.entries(vulnerabilities)) {
    if (!BLOCKING_SEVERITIES.has(vulnerability.severity)) continue;

    const advisories = [...resolveAdvisories(name, vulnerabilities)].sort();
    if (advisories.length === 0) {
      blocked.push({ name, severity: vulnerability.severity, advisories, reason: "no advisory id could be resolved" });
      continue;
    }

    if (vulnerability.severity === "critical") {
      blocked.push({ name, severity: vulnerability.severity, advisories, reason: "critical findings are never excepted" });
      continue;
    }

    const invalid = advisories.filter((id) => {
      const exception = exceptions.find(({ advisory }) => advisory === id);
      return !exception || currentDate > exception.expiresOn;
    });

    if (invalid.length > 0) {
      blocked.push({
        name,
        severity: vulnerability.severity,
        advisories,
        reason: `unapproved or expired advisory: ${invalid.join(", ")}`,
      });
      continue;
    }

    excepted.push({ name, severity: vulnerability.severity, advisories });
  }

  return { ok: blocked.length === 0, blocked, excepted, currentDate };
}

function run() {
  const audit = spawnSync("npm", ["audit", "--json"], {
    encoding: "utf8",
    shell: process.platform === "win32",
  });

  let report;
  try {
    report = JSON.parse(audit.stdout);
  } catch {
    console.error("Could not parse npm audit --json output.");
    if (audit.stderr) console.error(audit.stderr.trim());
    process.exit(1);
  }

  const result = evaluateAudit(report);

  for (const finding of result.excepted) {
    console.log(`EXCEPTED ${finding.severity}: ${finding.name} via ${finding.advisories.join(", ")}`);
  }

  if (!result.ok) {
    for (const finding of result.blocked) {
      console.error(
        `BLOCKED ${finding.severity ?? "error"}: ${finding.name} (${finding.reason})`,
      );
    }
    process.exit(1);
  }

  const totals = report.metadata?.vulnerabilities ?? {};
  console.log(
    `Full audit passed with ${result.excepted.length} propagated finding(s) excepted; ` +
      `${totals.moderate ?? 0} moderate finding(s) remain non-blocking.`,
  );
}

if (process.argv[1] === fileURLToPath(import.meta.url)) run();
