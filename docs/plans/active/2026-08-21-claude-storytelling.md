# Plan: storytelling de Claude en Marcha

## Problema

La guía explica qué hacer, pero el valor se entiende tarde. El lector necesita reconocerse en el problema, saber por qué existe cada paso y visualizar qué activo concreto obtiene al terminarlo.

## Resultado esperado

- El hero parte de la pantalla en blanco y termina en una promesa observable.
- Antes del paso 1 queda claro qué preparar, cuánto tiempo reservar y por qué la guía es confiable.
- Cada sesión narra una transición: primer resultado, contexto real y trabajo que ocurre sin intervención.
- Cada paso explica el dolor que evita y el activo que deja construido.
- Se conservan prompts, pruebas, progreso, rutas contractuales, checkpoints, skill, transparencia, CTA y footer.

## Criterios de aceptación

- Los diez pasos muestran “Por qué importa” y “Lo que te queda”.
- La preparación aparece entre el hero y la barra de progreso.
- El copy no repite el mismo mensaje en objetivo, dolor y resultado.
- La guía sigue funcionando a 375 y 1440 px, sin overflow ni errores de consola.
- Copiado, progreso y persistencia siguen funcionando.
- `npm run check`, `npm test` y `npm audit --audit-level=high` pasan.
- El cambio se fusiona a `main` y se verifica en producción.

## Enfoque

1. Extender el modelo de contenido con problema y resultado por paso.
2. Reescribir hero y arcos de sesión con el mejor copy del texto adjunto.
3. Añadir una preparación breve y escaneable sin duplicar la transparencia final.
4. Renderizar dolor, acciones, prueba y valor como una secuencia consistente.
5. Validar, revisar, publicar y hacer smoke test en producción.

## Riesgos y rollback

- Riesgo principal: aumentar demasiado la densidad. Se controla con bloques cortos, jerarquía y acordeones existentes.
- Las URLs y prompts son contrato y no se modifican.
- Rollback: revertir el merge commit; no hay datos ni migraciones.

## Progreso

- [x] Storytelling y contenido.
- [x] Validación local y navegador.
- [ ] PR, merge y despliegue.
