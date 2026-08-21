# Spec: Claude en Marcha

## Objetivo

Publicar `/claude` como una guía interactiva gratuita para founders y dueños de negocio que quieren configurar Claude Desktop en tres sesiones de 30 minutos.

La experiencia produce tres resultados: Claude conoce el contexto de la persona, está conectado a su trabajo real y entrega un reporte útil de forma automática o mediante un disparo manual.

## Comportamiento

- El menú principal y el footer incluyen “Claude”.
- La página presenta las tres sesiones y los diez pasos en orden.
- Cada paso explica el resultado, la acción y una prueba observable antes de avanzar.
- Los nueve prompts operativos se pueden copiar desde botones accesibles.
- Las casillas de avance persisten en el navegador y actualizan el progreso y la tarjeta de estado.
- La guía cubre plan gratuito, cuenta corporativa, conectores rechazados y modo rescate.
- No hay formulario, captura de correo, analítica adicional ni dependencia de un repositorio externo.

## Enfoque técnico

- Ruta App Router estática en `app/claude/`.
- Componente cliente local para portapapeles y persistencia en `localStorage`.
- Datos de contenido colocados junto a la ruta, sin nuevas dependencias.
- Tokens, tipografías, espaciado, botones y paleta existentes de JoeWork.
- Metadatos, datos estructurados y sitemap actualizados para `/claude`.

## Criterios de aceptación

- `/claude` aparece en la exportación estática y tiene canonical correcto.
- Los diez pasos y las tres sesiones son visibles y navegables por teclado.
- Los botones de copiado muestran confirmación y tienen fallback cuando falla Clipboard API.
- El progreso acepta solo pasos válidos, persiste y se restaura al recargar.
- La tarjeta de estado refleja únicamente los pasos marcados.
- La página no tiene overflow horizontal entre 320 y 1440 px.
- Menú desktop y móvil incluyen “Claude”.
- Consola sin errores en uso normal.
- `npm test` y `npm run check` aprobados.

## Límites

- Preservar exportación estática, accesibilidad, SEO y estilo existente.
- No publicar, crear el repositorio externo ni cambiar destinos comerciales sin autorización.
- No inventar una URL de descarga, agregar dependencias o capturar datos del visitante.

## Decisión sobre la descarga

Los repositorios `joework/claude-en-marcha` y `joeworkco/claude-en-marcha` no existían al implementar. La página funciona de forma autónoma y no publica un enlace roto. La descarga del skill puede añadirse cuando exista un destino estable.

## Verificación

- 7 pruebas unitarias aprobadas.
- Lint, TypeScript y exportación estática aprobados.
- Navegador real: desktop y 320, 768, 1024 y 1440 px.
- Copiado, persistencia, tarjeta dinámica, menú móvil, Recursos, canonical y consola verificados.

## Estado

Completado el 21 de agosto de 2026.
