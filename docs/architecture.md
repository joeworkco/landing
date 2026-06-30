# Architecture

## Runtime

The application uses Next.js App Router and React, then exports a static site to `out/`. GitHub Actions deploys that artifact to GitHub Pages. There is no required application server in the current production architecture.

## Module map

| Area | Responsibility |
| --- | --- |
| `app/` | Routes, layouts, metadata, SEO endpoints, and page composition |
| `components/sections/` | Product-specific page sections |
| `components/ui/` | Reusable presentation primitives |
| `components/layout/` | Shared navigation and layout components |
| `config/` | Site-wide metadata and links |
| `content/` and `blogs/` | MDX content |
| `lib/` | Shared utilities |
| `public/` | Static assets |

## Configuration flow

Public configuration is read from `NEXT_PUBLIC_*` variables. Optional analytics components should render nothing when their variables are absent. Server secrets listed in `.env.example` must never be exposed through `NEXT_PUBLIC_*` names.

`next.config.mjs` controls static export, optional base path, asset prefix, and unoptimized images required by static hosting.

## Architectural boundaries

- Routes compose sections; reusable visual behavior belongs in components.
- Product-specific sections should not be pushed into generic UI primitives.
- Shared site identity and links belong in `config/site.ts`.
- Static assets use paths compatible with the configured base path.
- Browser code must not import Node-only modules such as `fs` or server-side logging.
- Any feature requiring request-time secrets, persistence, or server execution needs an explicit hosting and security design before implementation.

## Deployment flow

1. A change is pushed to `main`.
2. GitHub Actions installs from `package-lock.json` with Node.js 22.
3. Next.js generates the static export.
4. The `out/` artifact is deployed to GitHub Pages.

## Known risks

- Multiple legacy locale and starter files remain and may not match the active JoeWork experience.
- The repository has limited automated behavior tests.
- Static export rules out request-time API routes in the current deployment.
- Analytics and lead integrations can silently fail if environment variables or external destinations drift.
