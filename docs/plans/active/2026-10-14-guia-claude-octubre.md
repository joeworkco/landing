# Plan: actualización de Claude en Marcha, octubre de 2026

## Problema

La guía publicada conserva afirmaciones y rutas de interfaz que Anthropic cambió
entre agosto y octubre de 2026. El riesgo principal es inducir a una persona con
plan gratuito a creer que los conectores de Google funcionan en su cuenta.

## Usuario y resultado esperado

Founders que recorren la guía desde la web o desde el conductor autocontenido.
La experiencia debe probar capacidades reales, adaptar la ruta al plan y a la
versión de la app, y ofrecer una alternativa útil cuando una función no existe.

## Criterios de aceptación

- C1 a C15 y P1 a P9 quedan aplicados como parches sobre la versión actual.
- El conductor, la tarjeta de estado, el README y la página usan `?v=3`.
- `inicio.md` se regenera desde `_conductor.md`; nunca se edita a mano.
- El skill incluye `SKILL.md` y doce referencias, sin URLs remotas.
- La página cambia solo copy y conserva diseño, componentes y estructura.
- En plan gratuito, el paso 4 propone probar Google y prepara la ruta de
  conversación sin afirmar que el conector funciona gratis.
- Las siete verificaciones quedan documentadas en el PR.

## Enfoque técnico

1. Añadir pruebas de regresión para versión, copy obsoleto y ruta gratuita.
2. Aplicar C1 a C15 en las fuentes Markdown y regenerar el conductor.
3. Aplicar los mismos parches dentro del skill y volver a empaquetarlo.
4. Aplicar P1 a P9 sobre el copy React existente, sin cambios estructurales.
5. Ejecutar pruebas, `npm run check`, preview estático y revisión de navegador.
6. Abrir PR desde `fix/guia-octubre-2026`, sin fusionar a `main`.

## Riesgos y recuperación

- Anclas divergentes en React: resolver por contenido equivalente y documentar.
- Caché de Claude: bloquear cualquier referencia residual a `?v=2`.
- ZIP incompleto: validar estructura y conteo antes de publicar.
- Sin preview remoto de PR: usar el artefacto estático local para verificaciones
  HTTP y separar con claridad el E2E que requiera la URL pública definitiva.
- Rollback: revertir el commit del PR; no hay migraciones ni estado de servidor.

## Pruebas

- Regresiones unitarias de URL v3, copy del plan y ausencia de claims viejos.
- Comprobación del conductor generado y de sus doce secciones.
- Inspección del ZIP y de `referencias/08-horario.md`.
- HTTP 200 para los trece Markdown en el preview estático.
- Navegación de `/claude/` en escritorio y móvil, sin errores de consola.
- Comparación de una ruta no afectada para detectar cambios accidentales.

## Progreso

- [x] Documento de correcciones leído y anclas auditadas.
- [x] Pruebas de regresión escritas y observadas en rojo.
- [x] C1 a C15 aplicados y conductor regenerado.
- [x] Skill actualizado y validado.
- [x] P1 a P9 aplicados.
- [x] Verificaciones locales y revisión final completas.
- [ ] E2E público después de desplegar la rama; GitHub Pages solo publica `main`.
- [ ] PR abierto con matriz de cumplimiento.
