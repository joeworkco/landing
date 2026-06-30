# Spec: guía Cómo crear un Company Brain

## Objetivo

Publicar una guía editorial en `/recursos/como-crear-company-brain` para que CEOs, founders y líderes de operaciones entiendan cómo centralizar conocimiento y convertirlo en ejecución con agentes IA.

## Comportamiento esperado

- Explicar el modelo de cerebro único y sus seis capas.
- Mostrar visualmente cómo una entrada puede alimentar varios resultados.
- Distinguir conocimiento, control y ejecución.
- Conectar la guía desde `/recursos` y el sitemap.
- Cerrar con una ruta clara hacia el servicio Company Brain y el diagnóstico.

## Enfoque técnico

- Página estática con Next.js App Router.
- Componentes y tokens existentes, sin dependencias nuevas.
- Metadata canónica y datos estructurados `Article` y `BreadcrumbList`.
- Diseño editorial responsive, accesible y consistente con JoeWork.

## Criterios de aceptación

- La nueva URL se exporta correctamente.
- El recurso aparece como disponible en el hub.
- Las seis capas y los cinco principios están representados.
- Los enlaces internos y el CTA funcionan.
- `npm run check` y la validación visual pasan.

## Riesgos

- “ROI 4:1” puede interpretarse como resultado histórico: presentarlo como principio de apalancamiento, no como promesa.
- La densidad del contenido puede dificultar lectura móvil: usar jerarquía, navegación interna y bloques cortos.

## Pruebas

- Lint, typecheck y build.
- Verificación en navegador a 390 px y 1440 px.
- Revisión de metadata, sitemap y enlaces.

## Estado

Completado el 30 de junio de 2026.
