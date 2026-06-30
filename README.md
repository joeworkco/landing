# JoeWork Landing

Public marketing site for [JoeWork](https://joework.co), built as a statically exported Next.js application and deployed to GitHub Pages.

## Local setup

Requirements:

- Node.js 22
- npm 10

```bash
npm ci
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run lint` | Run ESLint with zero warnings allowed |
| `npm run typecheck` | Run TypeScript without emitting files |
| `npm run build` | Generate the static site in `out/` |
| `npm run check` | Run all release checks |

## Project map

- `app/`: routes, layouts, metadata, sitemap, and robots
- `components/sections/`: JoeWork page sections
- `components/ui/`: reusable UI primitives
- `config/site.ts`: canonical site metadata and links
- `content/`: MDX content for legal and informational pages
- `public/`: static assets
- `docs/`: product, architecture, and execution context
- `AGENTS.md`: short operating guide for coding agents

Read [docs/README.md](docs/README.md) before making structural or product changes.

## Deployment

Pushes to `main` trigger `.github/workflows/deploy-pages.yml`. The workflow installs with `npm ci`, builds a static export, and deploys `out/` to GitHub Pages.

Do not commit `.env`, `.env.local`, build output, logs, or credentials. Keep `.env.example` limited to safe placeholders.
