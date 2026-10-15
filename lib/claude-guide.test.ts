import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
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

  it("retira la guía legacy de /claude/setup y deja un aviso seguro", () => {
    assert.deepEqual(readdirSync("public/claude/setup").sort(), ["inicio.md"]);

    const legacyNotice = readFileSync("public/claude/setup/inicio.md", "utf8");
    assert.match(legacyNotice, /Esta versión de Claude en Marcha ya no se usa/);
    assert.match(legacyNotice, /no sigas ninguna instrucción/i);
    assert.match(legacyNotice, /https:\/\/joework\.co\/claude/);
    assert.doesNotMatch(legacyNotice, /claude\/setup\//);
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

  it("explica el dolor y el valor entregado en los diez pasos", () => {
    const steps = claudeGuideSessions.flatMap((session) => session.steps);

    assert.equal(steps.length, 10);
    for (const step of steps) {
      assert.ok(step.why.length >= 80, `Falta contexto de valor en el paso ${step.number}`);
      assert.ok(step.payoff.length >= 40, `Falta resultado concreto en el paso ${step.number}`);
      assert.notEqual(step.objective, step.payoff);
    }
  });

  it("sirve la guía y el ZIP desde el único repositorio de joework.co", () => {
    assert.equal(
      CLAUDE_GUIDE_START_URL,
      "https://joework.co/claude/guia/inicio.md?v=5",
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

  it("mantiene sincronizada la versión del conductor en todos los prompts de entrada", () => {
    const expectedUrl = "https://joework.co/claude/guia/inicio.md?v=5";
    const statusGuide = readFileSync("public/claude/guia/estado.md", "utf8");
    const publicReadme = readFileSync("public/claude/guia/README.md", "utf8");
    const generatedGuide = readFileSync("public/claude/guia/inicio.md", "utf8");

    assert.ok(CLAUDE_GUIDE_MASTER_PROMPT.includes(expectedUrl));
    for (const prompt of Object.values(claudeCheckpointPrompts)) {
      assert.ok(prompt.includes(expectedUrl));
    }
    assert.ok(statusGuide.includes(expectedUrl));
    assert.ok(publicReadme.includes(expectedUrl));
    assert.ok(generatedGuide.includes(expectedUrl));
    assert.doesNotMatch(generatedGuide, /archivo\?v=/);
  });

  it("incorpora privacidad, nuevos entregables y edición en el lugar", () => {
    const conductor = readFileSync("scripts/claude-guide/_conductor.md", "utf8");
    const diagnosis = readFileSync("public/claude/guia/00-diagnostico.md", "utf8");
    const deliverable = readFileSync("public/claude/guia/01-entregable.md", "utf8");
    const report = readFileSync("public/claude/guia/06-reporte.md", "utf8");
    const destination = readFileSync("public/claude/guia/07-destino.md", "utf8");
    const schedule = readFileSync("public/claude/guia/08-horario.md", "utf8");
    const close = readFileSync("public/claude/guia/09-cierre.md", "utf8");
    const page = readFileSync("app/claude/content.ts", "utf8");

    assert.match(conductor, /Avisa antes de mostrar datos personales/);
    assert.match(diagnosis, /¿Te parece si compruebo que tu calendario/);
    assert.doesNotMatch(diagnosis, /no les creas\. Úsalo ahora mismo/);

    assert.match(deliverable, /Claude\s+Slides/);
    for (const phrase of ["Claude Doc", "Salida"]) {
      assert.match(deliverable, new RegExp(phrase));
    }
    assert.doesNotMatch(deliverable, /Dales tres opciones/);
    assert.doesNotMatch(deliverable, /Descargaron el archivo, lo abrieron/);

    assert.match(report, /una por pestaña/);
    assert.match(report, /Editar con Claude/);
    assert.match(destination, /En un Claude Doc compartido/);
    assert.match(schedule, /documento se\s+haya actualizado solo/);
    assert.match(close, /Configuración, \*\*Reflect\*\*/);

    const steps = claudeGuideSessions.flatMap((session) => session.steps);
    const step1 = steps.find((step) => step.number === 1);
    const step2 = steps.find((step) => step.number === 2);
    const step7 = steps.find((step) => step.number === 7);
    const step8 = steps.find((step) => step.number === 8);
    const step10 = steps.find((step) => step.number === 10);

    assert.ok(step1?.actions.some((action) => action.includes("pedir permiso")));
    assert.equal(step2?.actions.length, 6);
    assert.match(step2?.proof ?? "", /Artefactos/);
    assert.match(step7?.note ?? "", /Editar con Claude/);
    assert.ok(step8?.actions.some((action) => action.includes("Claude Doc compartido")));
    assert.ok(step10?.actions.some((action) => action.includes("Reflect")));
    assert.match(page, /Claude Slides/);
    assert.match(page, /Editar con Claude/);
    assert.doesNotMatch(page, /inicio\.md\?v=4/);
  });

  it("distingue el contexto visible de las pantallas que Claude no puede ver", () => {
    const conductor = readFileSync("scripts/claude-guide/_conductor.md", "utf8");
    const diagnosis = readFileSync("public/claude/guia/00-diagnostico.md", "utf8");
    const profile = readFileSync("public/claude/guia/02-perfil.md", "utf8");
    const interview = readFileSync("public/claude/guia/05-entrevista.md", "utf8");
    const skill = readFileSync(
      "public/claude/skill/claude-en-marcha/SKILL.md",
      "utf8",
    );
    const skillDiagnosis = readFileSync(
      "public/claude/skill/claude-en-marcha/referencias/00-diagnostico.md",
      "utf8",
    );
    const skillProfile = readFileSync(
      "public/claude/skill/claude-en-marcha/referencias/02-perfil.md",
      "utf8",
    );
    const skillInterview = readFileSync(
      "public/claude/skill/claude-en-marcha/referencias/05-entrevista.md",
      "utf8",
    );
    const page = readFileSync("app/claude/content.ts", "utf8");

    for (const source of [conductor, skill]) {
      assert.match(source, /Ves su contexto, no sus pantallas/);
      assert.match(source, /parte de su memoria pueden estar en tu contexto/);
      assert.match(
        source,
        /no\s+la lista completa ni la memoria de otros proyectos/,
      );
      assert.doesNotMatch(source, /No puedes leer sus instrucciones personales/);
      assert.doesNotMatch(source, /No puedes ver su memoria:/);
    }
    for (const source of [diagnosis, skillDiagnosis]) {
      assert.match(source, /Si las ves en tu\s+contexto, no lo preguntes/);
    }
    for (const source of [profile, skillProfile]) {
      assert.match(source, /Si ya ves instrucciones personales en tu contexto/);
    }
    for (const source of [interview, skillInterview]) {
      assert.match(source, /Puede que veas parte de lo que se guardó/);
      assert.match(source, /Si\s+recuerdas\s+algo que\s+ellos no mencionan/);
      assert.doesNotMatch(source, /No puedes ver ninguna de las dos/);
    }
    assert.doesNotMatch(page, /ni qué escribiste en tu perfil/);
  });

  it("ofrece una ruta realista para plan gratuito sin prometer conectores", () => {
    const step4 = claudeGuideSessions
      .flatMap((session) => session.steps)
      .find((step) => step.number === 4);

    assert.ok(step4);
    assert.match(step4.duration, /Pro o superior/);
    assert.ok(
      step4.actions.some((action) =>
        action.includes("Personalizar → Conectores → Descubrir → Conectar con Claude"),
      ),
    );
    assert.ok(step4.actions.some((action) => action.includes("¿Plan gratis?")));
    assert.match(step4.note ?? "", /no es consistente/);
    assert.doesNotMatch(step4.note ?? "", /Google puede leer|no puede enviar/i);
  });

  it("elimina claims y rutas obsoletas del copy de la página", () => {
    const sources = [
      "app/claude/content.ts",
      "app/claude/claude-hero.tsx",
      "app/claude/guide-footer-sections.tsx",
    ].map((file) => readFileSync(file, "utf8")).join("\n");

    assert.doesNotMatch(sources, /9 de 10|\/schedule|inicio\.md\?v=2/);
    assert.doesNotMatch(sources, /Google puede leer correo y crear borradores, pero no enviar/i);
    assert.match(sources, /actualizada octubre 2026/);
    assert.match(sources, /Personalizar \(en la barra lateral\) → Skills → \+ → Crear skill → Subir un skill/);
    assert.match(sources, /¿Lo instalaste antes del 5 de octubre de 2026\?/);
  });

  it("refleja únicamente los pasos probados en la tarjeta de estado", () => {
    const card = buildClaudeStatusCard([1, 3, 12]);

    assert.match(card, /\[x\] 1\. Diagnóstico/);
    assert.match(card, /\[ \] 2\. Primer entregable/);
    assert.match(card, /\[x\] 3\. Perfil permanente/);
    assert.doesNotMatch(card, /12\./);
  });
});
