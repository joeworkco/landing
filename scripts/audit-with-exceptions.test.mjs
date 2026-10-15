import assert from "node:assert/strict";
import test from "node:test";

import { evaluateAudit } from "./audit-with-exceptions.mjs";

const exception = {
  advisory: "GHSA-vfj7-8cjw-p6xm",
  expiresOn: "2026-12-15",
};

function reportWith(advisory, severity = "high") {
  return {
    metadata: {
      vulnerabilities: { high: severity === "high" ? 2 : 0, critical: severity === "critical" ? 2 : 0 },
    },
    vulnerabilities: {
      braces: {
        severity,
        via: [{ severity, url: `https://github.com/advisories/${advisory}` }],
      },
      micromatch: {
        severity,
        via: ["braces"],
      },
    },
  };
}

test("allows the approved advisory through a transitive chain", () => {
  const result = evaluateAudit(reportWith(exception.advisory), {
    exceptions: [exception],
    today: "2026-10-15",
  });

  assert.equal(result.ok, true);
  assert.deepEqual(result.excepted.map(({ name }) => name), ["braces", "micromatch"]);
  assert.deepEqual(result.blocked, []);
});

test("blocks any different high advisory", () => {
  const result = evaluateAudit(reportWith("GHSA-xxxx-yyyy-zzzz"), {
    exceptions: [exception],
    today: "2026-10-15",
  });

  assert.equal(result.ok, false);
  assert.equal(result.blocked.length, 2);
});

test("blocks a critical finding even when its advisory id is allowlisted", () => {
  const result = evaluateAudit(reportWith(exception.advisory, "critical"), {
    exceptions: [exception],
    today: "2026-10-15",
  });

  assert.equal(result.ok, false);
  assert.equal(result.blocked.length, 2);
});

test("keeps the exception active through its expiration date", () => {
  const result = evaluateAudit(reportWith(exception.advisory), {
    exceptions: [exception],
    today: "2026-12-15",
  });

  assert.equal(result.ok, true);
});

test("expires the exception automatically after its expiration date", () => {
  const result = evaluateAudit(reportWith(exception.advisory), {
    exceptions: [exception],
    today: "2026-12-16",
  });

  assert.equal(result.ok, false);
  assert.equal(result.blocked.length, 2);
});

test("fails closed when a high finding has no resolvable advisory", () => {
  const report = reportWith(exception.advisory);
  report.vulnerabilities.braces.via = [];

  const result = evaluateAudit(report, {
    exceptions: [exception],
    today: "2026-10-15",
  });

  assert.equal(result.ok, false);
  assert.match(result.blocked[0].reason, /no advisory id/i);
});
