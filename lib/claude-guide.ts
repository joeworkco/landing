export const CLAUDE_GUIDE_STEP_COUNT = 10;

const CLAUDE_GUIDE_STEP_MINUTES: Record<number, number> = {
  1: 5,
  2: 15,
  3: 10,
  4: 10,
  5: 5,
  6: 15,
  7: 10,
  8: 5,
  9: 10,
  10: 5,
};

const CLAUDE_GUIDE_STEP_LABELS = [
  "Diagnóstico",
  "Primer entregable",
  "Perfil permanente",
  "Conectores",
  "Proyecto",
  "Entrevista",
  "Diseño del reporte",
  "Destino",
  "Horario",
  "Cierre",
] as const;

export function normalizeCompletedClaudeSteps(value: unknown): number[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return Array.from(
    new Set(
      value.filter(
        (step): step is number =>
          Number.isInteger(step) && step >= 1 && step <= CLAUDE_GUIDE_STEP_COUNT,
      ),
    ),
  ).sort((a, b) => a - b);
}

export function calculateClaudeProgress(completedSteps: unknown): number {
  const completed = normalizeCompletedClaudeSteps(completedSteps);
  return Math.round((completed.length / CLAUDE_GUIDE_STEP_COUNT) * 100);
}

export function formatClaudeProgressLabel(completedSteps: unknown): string {
  const completed = normalizeCompletedClaudeSteps(completedSteps);

  if (completed.length === 0) {
    return "10 pasos · unos 90 min";
  }

  if (completed.length === CLAUDE_GUIDE_STEP_COUNT) {
    return "10 de 10 · listo";
  }

  const completedSet = new Set(completed);
  const remainingMinutes = Object.entries(CLAUDE_GUIDE_STEP_MINUTES).reduce(
    (total, [step, minutes]) =>
      completedSet.has(Number(step)) ? total : total + minutes,
    0,
  );

  return `${completed.length} de 10 · quedan ~${remainingMinutes} min`;
}

export function buildClaudeStatusCard(completedSteps: unknown): string {
  const completed = new Set(normalizeCompletedClaudeSteps(completedSteps));
  const checklist = CLAUDE_GUIDE_STEP_LABELS.map(
    (label, index) => `${completed.has(index + 1) ? "[x]" : "[ ]"} ${index + 1}. ${label}`,
  ).join("\n");

  return `CLAUDE EN MARCHA: MI TARJETA DE ESTADO

Negocio: [una frase, en tus palabras]
Plan: [gratis / Pro / Max / Team / Enterprise]
Dispositivo: [escritorio Mac / escritorio Windows / navegador]

Avance:
${checklist}

Lo que ya existe de verdad:
- Proyecto: [nombre, o ninguno]
- Conectado: [calendario / correo / archivos / nada]
- Instrucciones de perfil: [escritas y probadas / escritas sin probar / no]
- Reporte: [diseñado / en horario / no]

Pendientes:
- [qué quedó abierto y por qué]

Para retomar: abre un chat nuevo, pega esta tarjeta y escribe:
“Continúa mi puesta en marcha desde donde quedé. Un paso a la vez y sin avanzar sin prueba.”`;
}
