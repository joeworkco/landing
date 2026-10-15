# Plan: memoria y cuatro niveles en Claude en Marcha

## Problema y resultado

La guía explica perfil, proyecto y chat, pero omite la memoria que Claude genera
durante las conversaciones. La actualización debe enseñar cuatro niveles,
explicar dónde se guarda la memoria, incorporarla a la entrevista y permitir que
el usuario la revise sin alterar las rutas ni la arquitectura de la guía.

## Usuarios y trabajo a resolver

- Founders que necesitan distinguir reglas escritas de datos recordados.
- Usuarios de Free, Pro, Max, Team o Enterprise con disponibilidad distinta de
  memoria.
- Usuarios que trabajan dentro de proyectos y necesitan entender el aislamiento
  de la memoria por proyecto.

## Comportamiento esperado

- El conductor, los pasos 3, 5 y 6, el modo rescate y la tarjeta de estado
  explican los cuatro niveles con numeración consistente.
- El paso 6 guía una revisión observable de la memoria sin afirmar que Claude
  puede verla.
- La página `/claude` añade una cuarta tarjeta con el mismo patrón visual.
- Todos los puntos de entrada usan `inicio.md?v=4`.
- El skill empaquetado conserva referencias locales y contiene 13 Markdown.

## Criterios de aceptación

- B1 a B10 y PB1 a PB5 quedan aplicados y trazables en el PR.
- No quedan referencias activas a `tres niveles`, proyecto como nivel 2, chat
  como nivel 3 ni `inicio.md?v=3`.
- `inicio.md` se regenera desde `_conductor.md` y pasa su chequeo de paridad.
- El ZIP contiene `claude-en-marcha/` en la raíz y exactamente 13 Markdown.
- Lint, TypeScript, tests, chequeo del conductor y build pasan.
- Las verificaciones E2E 6 y 7 quedan pendientes hasta disponer de un deploy.

## Enfoque técnico

1. Aplicar los parches de contenido a las fuentes Markdown.
2. Aplicar los equivalentes sin URLs remotas al skill expandido y reempaquetar.
3. Actualizar copy y datos de `/claude`, reutilizando la tarjeta existente.
4. Regenerar `inicio.md`, ejecutar verificaciones y revisar la ruta en desktop y
   375 px.

## Riesgos y recuperación

- Riesgo de desincronización entre guía, conductor y skill: se controla con el
  generador, búsquedas globales y revisión del ZIP.
- Riesgo de caché del conductor: se controla elevando todas las referencias a
  `?v=4`.
- Rollback: revertir los commits de esta rama. No hay datos ni migraciones.

## Casos de prueba

- Ausencia de términos y versión anteriores.
- Presencia de los siete conceptos obligatorios en el conductor.
- Inventario y contenido del ZIP.
- Respuesta 200 de los 13 Markdown en preview local.
- Render responsive de la cuarta tarjeta y ausencia de errores de consola.
- E2E posdeploy desde los pasos 3 y 6.

## Estado

- [x] Especificación y anclas revisadas.
- [x] Parches Markdown y skill aplicados.
- [x] Página actualizada.
- [x] Verificaciones locales completadas.
- [ ] PR abierto sin mergear.
