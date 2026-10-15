# Comparación visual: Next.js 16.3.8 y Tailwind CSS 4

Base: `origin/main` (`eed75e2`), Next.js 16.3.2 y Tailwind CSS 3.4.19.  
Cambio: rama `chore/next-16.3.8`, Next.js 16.3.8 y Tailwind CSS 4.3.3.

Las capturas se tomaron sobre builds estáticos servidos localmente, con el mismo navegador y contenido. Se compararon `/`, `/claude`, `/recursos` y `/pricing` en 1440 × 1000 y 375 × 812.

## Resultado

| Ruta | Escritorio antes/después | Móvil antes/después | Altura idéntica | SSIM escritorio | SSIM móvil |
| --- | --- | --- | --- | ---: | ---: |
| `/` | [antes](before-home-desktop.jpg) / [después](after-home-desktop.jpg) | [antes](before-home-mobile.jpg) / [después](after-home-mobile.jpg) | Sí | 99.9719% | 99.9540% |
| `/claude` | [antes](before-claude-desktop.jpg) / [después](after-claude-desktop.jpg) | [antes](before-claude-mobile.jpg) / [después](after-claude-mobile.jpg) | Sí | 99.9916% | 99.9891% |
| `/recursos` | [antes](before-recursos-desktop.jpg) / [después](after-recursos-desktop.jpg) | [antes](before-recursos-mobile.jpg) / [después](after-recursos-mobile.jpg) | Sí | 99.9983% | 99.9954% |
| `/pricing` | [antes](before-pricing-desktop.jpg) / [después](after-pricing-desktop.jpg) | [antes](before-pricing-mobile.jpg) / [después](after-pricing-mobile.jpg) | Sí | 100% | 100% |

Las diferencias restantes son de antialiasing y conversión de color de Tailwind CSS 4. No hay cambios de layout, contenido ni dimensiones.

## Estados interactivos

| Estado | Antes | Después |
| --- | --- | --- |
| Header, foco de teclado, escritorio | [captura](before-header-focus-desktop.jpg) | [captura](after-header-focus-desktop.jpg) |
| Header, hover, escritorio | [captura](before-header-hover-desktop.jpg) | [captura](after-header-hover-desktop.jpg) |
| Header, foco de teclado, móvil | [captura](before-header-focus-mobile.jpg) | [captura](after-header-focus-mobile.jpg) |
| `/claude`, botón Copiar con foco/hover, escritorio | [captura](before-claude-focus-hover-desktop.jpg) | [captura](after-claude-focus-hover-desktop.jpg) |
| `/claude`, botón Copiar tras tap, móvil | [captura](before-claude-focus-hover-mobile.jpg) | [captura](after-claude-focus-hover-mobile.jpg) |

La variante `hover` conserva la semántica de Tailwind CSS 3 también en 375 px. Estas rutas no exponen un selector de modo oscuro ni montan un proveedor de tema, por lo que no existe un estado oscuro activo que comparar.

## Compatibilidad aplicada

- Borde por defecto de Tailwind CSS 3.
- Ancho y color por defecto de los anillos.
- `shadow-sm`, `rounded-sm` y `outline-none` con sus valores anteriores.
- Placeholder gris y cursor de botones.
- Variante `hover` sin la nueva restricción `@media (hover: hover)`.
- Alturas de línea responsivas que Tailwind CSS 3 asociaba a `text-*`.
- Altura de línea heredada para la etiqueta de 10 px dentro de `text-xs`.
- Se revisaron `space-x` y `space-y`; no produjeron diferencias de layout en las rutas objetivo.
