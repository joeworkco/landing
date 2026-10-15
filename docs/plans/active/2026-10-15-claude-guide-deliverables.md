# Plan: entregables, edición y privacidad en Claude en Marcha

## Problema y resultado

La guía no cubre Claude Slides, Claude Docs ni la edición puntual dentro de un
documento. Además, puede mostrar datos de calendario o memoria sin advertirlo
cuando el usuario comparte pantalla. La actualización debe ampliar los
entregables, enseñar edición en el lugar y pedir permiso antes de exponer datos
personales.

## Usuarios y trabajo a resolver

- Founders que necesitan producir Excel, presentaciones y documentos reales.
- Usuarios que quieren revisar y corregir reportes sin reescribir el prompt.
- Personas que comparten pantalla y necesitan controlar cuándo aparecen datos
  personales.

## Comportamiento esperado

- El diagnóstico pide permiso antes de mostrar calendario, correo, archivos o
  memoria.
- El paso 2 ofrece cuatro entregables y comprueba que funcionen fuera del chat.
- El paso 7 usa un Claude Doc con tres pestañas y enseña Editar con Claude.
- Los pasos 8 y 9 prueban el Claude Doc como destino sin prometer actualización
  automática.
- El cierre menciona Reflect cuando la memoria está activada.
- Todos los puntos de entrada usan `inicio.md?v=5`.
- El conductor y el skill empaquetado permanecen sincronizados con los pasos.

## Criterios de aceptación

- C1 a C11 y PC1 a PC6 quedan aplicados y trazables en el PR.
- Las anclas se aplican por título y cualquier desviación queda documentada.
- `inicio.md` se regenera desde `_conductor.md` y pasa su chequeo de paridad.
- El ZIP conserva `claude-en-marcha/` en la raíz y exactamente 13 Markdown.
- Las verificaciones 1 a 5 pasan contra un preview local.
- Lint, TypeScript, tests, auditorías y build pasan.
- E2E 8 y E2E 9 quedan pendientes para ejecución humana contra el SHA del PR.

## Enfoque técnico

1. Agregar pruebas de regresión para privacidad, entregables y versión `v=5`.
2. Aplicar C1 a C11 sobre los Markdown canónicos y regenerar `inicio.md`.
3. Aplicar los mismos parches al skill y reempacar el ZIP.
4. Aplicar PC1 a PC6 solo en el copy existente de `/claude`.
5. Ejecutar verificaciones, abrir el PR y registrar el SHA completo.

## Riesgos y recuperación

- Desincronización entre guía, conductor y skill: se controla con pruebas,
  búsquedas globales y revisión del ZIP.
- Caché del conductor: se controla elevando todas las entradas a `?v=5`.
- Prometer capacidades no documentadas: el paso 9 obliga a probar la
  actualización del Claude Doc y define una alternativa.
- Rollback: revertir los commits de esta rama. No hay migraciones ni datos.

## Casos de prueba

- Ausencia de los cuatro textos antiguos y de `inicio.md?v=4`.
- Presencia de privacidad, Slides, Docs, edición, pestañas y Reflect.
- Paridad del conductor generado y versión única `v=5`.
- Inventario y contenido del ZIP.
- Respuesta 200 de los 13 Markdown en preview local.

## Estado

- [x] Especificación y anclas revisadas.
- [x] Pruebas de regresión agregadas.
- [x] Parches C1 a C11 aplicados.
- [x] Parches PC1 a PC6 aplicados.
- [x] Skill reempacado.
- [x] Verificaciones locales completadas.
- [x] PR abierto sin mergear.
