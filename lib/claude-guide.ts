export const CLAUDE_GUIDE_STEP_COUNT = 10;

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
