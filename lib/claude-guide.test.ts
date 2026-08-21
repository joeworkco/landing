import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  buildClaudeStatusCard,
  calculateClaudeProgress,
  normalizeCompletedClaudeSteps,
} from "./claude-guide.ts";

describe("Claude guide progress", () => {
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

  it("refleja únicamente los pasos probados en la tarjeta de estado", () => {
    const card = buildClaudeStatusCard([1, 3, 12]);

    assert.match(card, /\[x\] 1\. Diagnóstico/);
    assert.match(card, /\[ \] 2\. Primer entregable/);
    assert.match(card, /\[x\] 3\. Perfil permanente/);
    assert.doesNotMatch(card, /12\./);
  });
});
