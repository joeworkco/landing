# Excepciones de seguridad

## GHSA-vfj7-8cjw-p6xm

| Campo | Valor |
| --- | --- |
| CVE | CVE-2026-93687 |
| Alta | 2026-10-15 |
| Vencimiento | 2026-12-15, inclusive |
| Alcance | Audit completo de dependencias de desarrollo |

`braces@3.0.3` puede agotar el stack al procesar patrones con anidamiento extremo. En este repositorio entra únicamente por `eslint-config-next → @next/eslint-plugin-next → fast-glob → micromatch → braces`.

La cadena se ejecuta solo como tooling de ESLint sobre patrones y archivos definidos por el propio repositorio. No se empaqueta ni llega al sitio estático generado en `out/`. El audit de dependencias de producción sigue siendo bloqueante y no admite excepciones.

El script `scripts/audit-with-exceptions.mjs` permite únicamente este ID de advisory, nunca un paquete o nivel completo. Cualquier critical falla siempre. La excepción deja de aplicar automáticamente después del 15 de diciembre de 2026.

Salida: cuando `braces` publique la versión corregida `3.0.4`, agregar un `override` a esa versión, regenerar el lockfile y borrar la excepción, sus pruebas y esta entrada.
