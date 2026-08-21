# Plan: correcciones C1-C13 de Claude en Marcha

## Problema y resultado

Actualizar `/claude` sin reemplazar la implementación React publicada. El camino guiado debe usar el contrato estable `https://joework.co/claude/setup/`, los archivos y el skill deben vivir en este repositorio, y la experiencia debe incorporar las trece correcciones auditadas.

## Usuario y trabajo a realizar

Founders que configuran Claude en tres sesiones, ya sea mediante un conductor conversacional o siguiendo los diez pasos manuales.

## Comportamiento esperado

- Los archivos del ZIP se publican verbatim bajo `public/claude/setup/` y `public/claude/claude-en-marcha.zip`.
- El hero conserva su estructura JoeWork y usa el copy exacto del camino guiado/manual y del reporte de referencia.
- Transparencia y skill aparecen antes del CTA final.
- Los bloques pedagógicos usan el markup y CSS autocontenido adjunto sin modificar su CSS.
- Rescate, checkpoints, jerarquía, minutos, autoría y H1 cumplen C7-C13.
- Se conservan rescate global, tarjeta de estado, CTA, agenda y footer.

## Criterios de aceptación

- Las quince verificaciones de `correcciones-codex.md` pasan contra el preview.
- Los trece Markdown contractuales responden 200 como texto y `README.md` también se publica.
- No hay colisión entre `/claude/index.html` y `/claude/setup/`.
- No se agregan dependencias ni analítica, formularios o captura de correo.
- `npm run check`, `npm test` y `npm audit --audit-level=high` pasan.

## Enfoque técnico

1. C1 y preview estático, con parada obligatoria si falla.
2. C2-C4 sobre componentes existentes.
3. C5-C6 con JSX equivalente y CSS adjunto literal.
4. C7-C13 como correcciones puntuales, sin reescribir la página.
5. Revisión, build, navegador real y PR desde `feat/guia-claude-en-marcha`.

## Riesgos y recuperación

- Colisión de exportación: comprobar `out/claude/index.html` y `out/claude/setup/*.md`.
- Content-Type de Markdown: reportar si descarga, pero no bloquear si Claude puede leerlo.
- CSS prefijado: mantenerlo literal y verificar que no se filtre.
- Rollback: revertir los commits del PR; no hay migraciones ni estado de servidor.
- Los assets anteriores `/claude/guia/` se mantienen como compatibilidad, pero la página solo anunciará el contrato nuevo.

## Pruebas

- Contratos de URLs y existencia de assets.
- Conteo de prompts, rescates, checkpoints y pesos.
- Minutos restantes y persistencia.
- Preview a 375 y 1440 px, tema claro y oscuro, consola y enlaces.
- Comparación visual de rutas no afectadas.

## Progreso

- [x] C1 y preview de Markdown: 14 archivos 200 como `text/markdown`; ZIP y `/claude/` 200 sin colisión.
- [x] C2-C4: contrato nuevo en prompts, caminos con copy exacto, transparencia y skill antes del CTA.
- [x] C5-C6: bloques pedagógicos integrados con el CSS adjunto literal y el markup completo de referencia.
- [ ] C7-C13.
- [ ] Quince verificaciones.
- [ ] PR abierto, sin fusionar a `main`.

## Decisiones

- Se publican los 14 Markdown presentes en el ZIP. La auditoría habla de 13, pero también exige `README.md`; los 13 de su comando más README suman 14.
- Se conservan los paths antiguos solo como compatibilidad; no se enlazan desde la experiencia nueva.
