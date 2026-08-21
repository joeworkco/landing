import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { describe, it } from "node:test";
import {
  buildClaudeStatusCard,
  calculateClaudeProgress,
  formatClaudeProgressLabel,
  normalizeCompletedClaudeSteps,
} from "./claude-guide.ts";
import {
  CLAUDE_GUIDE_DOWNLOAD_URL,
  CLAUDE_GUIDE_MASTER_PROMPT,
  CLAUDE_GUIDE_START_URL,
  CLAUDE_SKILL_PROMPT,
  claudeCheckpointPrompts,
  claudeGuideSessions,
} from "../app/claude/content.ts";

describe("Claude guide progress", () => {
  it("publica el contrato canónico completo bajo /claude/guia", () => {
    const guideFiles = [
      "inicio",
      "00-diagnostico",
      "01-entregable",
      "02-perfil",
      "03-conectores",
      "04-proyecto",
      "05-entrevista",
      "06-reporte",
      "07-destino",
      "08-horario",
      "09-cierre",
      "coach",
      "estado",
    ];

    for (const file of guideFiles) {
      assert.ok(existsSync(`public/claude/guia/${file}.md`), file);
    }
    assert.ok(existsSync("public/claude/descargas/claude-en-marcha.zip"));
  });

  it("normaliza pasos duplicados, desordenados o fuera de rango", () => {
    assert.deepEqual(
      normalizeCompletedClaudeSteps([10, 2, 2, 0, 11, 4.5, 1]),
      [1, 2, 10],
    );
  });

  it("calcula el porcentaje sobre los diez pasos", () => {
    assert.equal(calculateClaudeProgress([1, 2, 3]), 30);
    assert.equal(calculateClaudeProgress([]), 0);
    assert.equal(calculateClaudeProgress([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 100);
  });

  it("calcula los minutos pendientes según el peso de cada paso", () => {
    assert.equal(formatClaudeProgressLabel([]), "10 pasos · unos 90 min");
    assert.equal(formatClaudeProgressLabel([1]), "1 de 10 · quedan ~85 min");
    assert.equal(formatClaudeProgressLabel([1, 2, 3]), "3 de 10 · quedan ~60 min");
    assert.equal(
      formatClaudeProgressLabel([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
      "10 de 10 · listo",
    );
  });

  it("expone doce prompts copiables, incluidos checkpoints y skill", () => {
    const stepPrompts = claudeGuideSessions.flatMap((session) =>
      session.steps.filter((step) => Boolean(step.prompt)),
    );
    const checkpointPrompts = Object.values(claudeCheckpointPrompts);

    assert.ok(CLAUDE_GUIDE_MASTER_PROMPT.length > 0);
    assert.equal(stepPrompts.length, 8);
    assert.equal(checkpointPrompts.length, 2);
    const skillPromptCount = CLAUDE_SKILL_PROMPT ? 1 : 0;
    assert.equal(
      1 + stepPrompts.length + checkpointPrompts.length + skillPromptCount,
      12,
    );
  });

  it("sirve la guía y el ZIP desde el único repositorio de joework.co", () => {
    assert.equal(
      CLAUDE_GUIDE_START_URL,
      "https://joework.co/claude/guia/inicio.md",
    );
    assert.equal(
      CLAUDE_GUIDE_DOWNLOAD_URL,
      "https://joework.co/claude/descargas/claude-en-marcha.zip",
    );
    assert.ok(CLAUDE_GUIDE_MASTER_PROMPT.includes(CLAUDE_GUIDE_START_URL));
    assert.doesNotMatch(CLAUDE_GUIDE_MASTER_PROMPT, /github\.com/i);
    assert.ok(existsSync("public/claude/guia/inicio.md"));
    assert.ok(existsSync("public/claude/descargas/claude-en-marcha.zip"));
  });

  it("refleja únicamente los pasos probados en la tarjeta de estado", () => {
    const card = buildClaudeStatusCard([1, 3, 12]);

    assert.match(card, /\[x\] 1\. Diagnóstico/);
    assert.match(card, /\[ \] 2\. Primer entregable/);
    assert.match(card, /\[x\] 3\. Perfil permanente/);
    assert.doesNotMatch(card, /12\./);
  });
});
