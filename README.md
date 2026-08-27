# JoeWork

Sitio comercial de [JoeWork](https://www.joework.co), enfocado en trabajadores IA, Company Brain y consultoría de adopción IA para empresas de Latinoamérica y el mercado latino en Estados Unidos.

La aplicación usa Next.js con export estático y se publica en GitHub Pages. No requiere servidor, APIs, base de datos ni variables privadas para funcionar.

## Rutas principales

| Ruta | Objetivo |
| --- | --- |
| `/` | Home de conversión y resumen de la oferta |
| `/trabajadores-ia/` | Catálogo de trabajadores IA para ventas y operaciones |
| `/company-brain/` | Arquitectura de conocimiento organizacional |
| `/consultoria-ia/` | Coaching y transformación organizacional |
| `/casos-de-uso/` | Hub y páginas SEO por caso de uso |
| `/recursos/` | Recursos prácticos para adopción IA |
| `/recursos/calculadora-roi/` | Estimador local de horas y costo recuperable |

Las rutas históricas como `/agency/`, `/pricing/`, `/docs/`, `/contact/` y los casos antiguos funcionan como páginas puente. El blog y las páginas legales permanecen accesibles fuera del funnel principal.

## Desarrollo local

Requisitos:

- Node.js 22
- npm 10

```bash
npm ci
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Validación

| Comando | Función |
| --- | --- |
| `npm run dev` | Inicia el servidor local |
| `npm run lint` | Ejecuta ESLint sin warnings permitidos |
| `npm run typecheck` | Valida TypeScript sin emitir archivos |
| `npm test` | Prueba la lógica de la calculadora ROI |
| `npm run build` | Genera el sitio estático en `out/` |
| `npm run check` | Ejecuta lint, typecheck y build |

Antes de publicar:

```bash
npm run check
npm test
```

`public/claude/guia/inicio.md` es generado por el script y NO se edita a mano.
Después de modificar un paso, ejecuta `npm run build:claude-guide` y aumenta `?v=` en la página, `estado.md` y `public/claude/guia/README.md`.

## Arquitectura

- `app/`: rutas, layouts, metadata, sitemap y datos estructurados
- `components/marketing/`: secciones y visualizaciones comerciales compartidas
- `components/layout/`: navegación global
- `components/ui/`: primitives reutilizables
- `config/marketing.ts`: navegación, CTAs, trabajadores, casos, integraciones, FAQ y métricas
- `config/site.ts`: metadata y enlaces canónicos
- `lib/roi-calculator.ts`: cálculo y validación del estimador ROI
- `public/brand/`: lockup y símbolo oficiales de JoeWork
- `styles/globals.css`: tokens, tipografía, motion y estilos globales
- `docs/plans/`: especificaciones activas y completadas

El sistema visual usa Joe Green `#54CC0C`, Ink `#181818`, Paper `#FAFAF6`, superficies blancas y consola `#14161A`. El contenido comercial está centralizado para evitar divergencias entre páginas.

## Export y despliegue

`next.config.mjs` conserva `output: "export"` y genera todas las rutas en `out/`.

Cada push a `main` activa [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml), que:

1. Instala dependencias con `npm ci`.
2. Ejecuta `npm run check`.
3. publica `out/` en GitHub Pages.

El dominio de producción es [https://www.joework.co](https://www.joework.co). Si un release falla, se puede revertir el commit en `main` y GitHub Pages publicará nuevamente la última versión estable.

No subir `.env`, `.env.local`, credenciales, logs, `.next/` ni `out/`.
