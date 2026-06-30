# Plan: rediseño comercial de JoeWork

## Problema y resultado

La web actual presenta automatización genérica y mezcla contenido legacy con componentes demo. El nuevo sitio debe explicar y convertir alrededor de tres ofertas: trabajadores IA, Company Brain y consultoría IA.

## Usuarios y trabajos

- CEOs, founders y líderes de ventas u operaciones de empresas medianas en LATAM y el mercado latino de EE. UU.
- Entender la oferta en menos de diez segundos.
- Identificar un caso aplicable, estimar el impacto y agendar un diagnóstico.

## Comportamiento esperado

- Sitio canónico en español, estático y responsive.
- Home orientada a conversión y páginas internas para profundidad y SEO.
- CTA principal hacia el Google Appointment Schedule autorizado.
- Métricas presentadas como objetivos, no como resultados históricos.
- Casos anonimizados sin testimonios, logos ni cifras inventadas.

## Criterios de aceptación

- Home, tres ofertas, hub de casos, diez páginas SEO, recursos y calculadora publicados.
- Navegación, footer, metadata y sitemap alineados con la nueva arquitectura.
- Rutas legacy importantes conservadas como páginas puente.
- Calculadora con fórmulas transparentes y validación segura.
- `npm run check` y verificación en navegador sin errores.

## Enfoque técnico

- Mantener Next.js App Router, TypeScript estricto y `output: "export"`.
- Centralizar contenido comercial tipado en `config/marketing.ts`.
- Reusar primitives locales y Lucide. No agregar dependencias.
- Aplicar tokens y assets del JoeWork Design System.
- Generar casos con ruta dinámica y `generateStaticParams`.

## Riesgos y recuperación

- Los claims no tienen evidencia verificable: etiquetarlos como objetivos.
- El hosting estático no ofrece redirects de servidor: usar páginas puente indexadas de forma controlada.
- Los recursos descargables no existen: publicar solo hub y calculadora funcional.
- Rollback: revertir los archivos de marketing y restaurar la composición legacy.

## Pruebas

- Unitarias para la fórmula ROI con `node:test`.
- Lint, typecheck y build completo.
- Navegador a 390, 768 y 1440 px; teclado, enlaces, menú, FAQ y calculadora.

## Decisiones

- Español sin prefijo.
- Home resumida; detalle en páginas internas.
- Hero como sistema conectado en ejecución.
- Agenda directa como conversión principal.
- Sin dark mode público.

## Progreso

- [x] Fundación visual y shell.
- [x] Home.
- [x] Páginas de oferta.
- [x] Casos de uso.
- [x] Recursos y calculadora.
- [x] Legacy, SEO y QA.
