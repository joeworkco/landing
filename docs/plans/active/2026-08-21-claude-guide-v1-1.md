# Plan: Claude en Marcha v1.1

## Problema y resultado

La guía actual funciona, pero no explica cómo separar instrucciones permanentes y temporales. La actualización debe enseñar perfil, proyecto y chat, introducir la regla de los seis meses y mejorar la continuidad entre sesiones sin perder la experiencia interactiva ni el sistema visual JoeWork.

## Usuarios y trabajo a resolver

- Founder que abre Claude por primera vez y necesita una ruta guiada.
- Usuario que completa la guía manualmente y quiere retomar sin perder progreso.
- Usuario que necesita distinguir contexto estable de datos que caducan.

## Comportamiento esperado

- El hero muestra autoría, un reporte de ejemplo y dos caminos: guiado y manual.
- Después del paso 3 se explican los tres niveles de instrucciones.
- El paso 5 incluye la regla de los seis meses.
- Cada paso ofrece una salida de rescate antes de marcarlo como completado.
- Hay checkpoints al cerrar las tres sesiones; los dos primeros copian prompts para retomar.
- Los pasos 2, 6 y 9 se distinguen como claves; 1, 5, 8 y 10 tienen menor peso visual.
- El contador calcula minutos pendientes por paso y el progreso persiste al recargar.
- Existen once prompts copiables: master, ocho pasos y dos checkpoints.

## Criterios de aceptación

- Reporte legible sobre el hero y compatible con estilos `dark`.
- Tarjetas de caminos en dos columnas desde tablet y apiladas a 320 px.
- Contador inicial `10 pasos · unos 90 min`; después muestra `N de 10 · quedan ~M min`.
- Progreso restaurado desde `localStorage` sin errores.
- Once prompts muestran confirmación de copiado y fallback de portapapeles.
- `Empezar por el paso 1` lleva a `#paso-1`.
- Sin overflow horizontal en 320, 768, 1024 y 1440 px.
- `npm test`, `npm audit --audit-level=high` y `npm run check` pasan.

## Enfoque técnico

- Mantener App Router y export estático.
- Separar los bloques visuales nuevos en componentes locales bajo `app/claude/`.
- Mantener copy y prompts en `content.ts`.
- Extender la lógica pura de progreso en `lib/claude-guide.ts` y cubrirla con pruebas.
- No agregar dependencias.

## Riesgos y recuperación

- El repositorio solicitado `joework/claude-en-marcha` devuelve 404. La web no se publicará con enlaces rotos; el owner debe confirmarse antes del merge.
- Clipboard API puede fallar: conservar fallback con `document.execCommand`.
- Datos corruptos en `localStorage`: normalizar y continuar desde cero.
- Rollback: revertir el merge de este cambio y volver a desplegar GitHub Pages.

## Casos de prueba

- Minutos restantes con cero, algunos, todos y pasos inválidos.
- Inventario exacto de once prompts copiables.
- Marcar y desmarcar pasos; recargar y comprobar persistencia.
- Copiar master, prompts de pasos y ambos checkpoints.
- Verificar scroll del CTA manual y layouts responsive.
- Consola y red sin errores en Chrome aislado.

## Decisiones

- Se elige portado selectivo sobre reemplazo HTML para conservar navegación global, SEO, HowTo JSON-LD, acordeones, progreso, tarjeta de estado, rescate y CTA final.
- El prompt del paso 5 se retira como bloque copiable para respetar el inventario de once botones de la referencia; su orientación queda incorporada en el contenido del paso y la regla de seis meses.

## Progreso

- [x] Comparar la referencia con la página publicada.
- [x] Implementar lógica y contenido.
- [x] Verificar UI e interacciones.
- [ ] Publicar guía v1.1.0 y web.

Publicación bloqueada: la cuenta autenticada no tiene acceso al usuario `Joework`, y `Joework/claude-en-marcha` todavía no existe públicamente.
