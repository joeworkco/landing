# Spec: rediseño visual de hubs

## Objetivo

Mejorar `/casos-de-uso` y `/recursos` para que sean más visuales, relevantes y fáciles de explorar sin cambiar sus rutas ni el contenido comercial.

## Usuarios

CEOs, founders y líderes de ventas u operaciones que buscan un flujo aplicable o una herramienta para construir su caso de negocio.

## Comportamiento esperado

- Casos agrupados por vender, operar y aprender.
- Acceso directo a los diez casos y visibilidad de sistemas y resultados.
- Recursos disponibles claramente diferenciados de próximos contenidos.
- Previews visuales de la calculadora ROI y la guía Company Brain.
- Navegación interna clara entre casos, recursos y diagnóstico.

## Enfoque técnico

- Reutilizar configuración, tokens, componentes y Lucide existentes.
- Mantener export estático, metadata y rutas actuales.
- No agregar dependencias ni comportamiento cliente.

## Criterios de aceptación

- Los diez casos siguen accesibles.
- Los dos recursos publicados aparecen como destacados.
- Responsive sin overflow a 390 px y 1440 px.
- Navegación por teclado, foco y enlaces funcionales.
- Lint, typecheck, tests y build aprobados.

## Estado

Completado el 30 de junio de 2026.
