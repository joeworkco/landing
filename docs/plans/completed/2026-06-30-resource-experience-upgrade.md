# Spec: mejora de experiencia de recursos

## Objetivo

Elevar la calculadora ROI y la guía Company Brain para que funcionen como herramientas ejecutivas, no como páginas de contenido genéricas.

## Comportamiento esperado

- La calculadora explica contexto, variables, resultado y límites de la estimación.
- El resultado principal domina visualmente y se actualiza sin backend.
- La guía permite navegar directamente entre principios, arquitectura, compounding, coordinación e implementación.
- La lectura larga conserva orientación y jerarquía en desktop y móvil.

## Enfoque técnico

- Mantener la lógica y tests existentes de ROI.
- Reutilizar tokens, componentes e iconografía del proyecto.
- No agregar dependencias, backend, persistencia ni captura de datos.

## Criterios de aceptación

- Inputs con límites y comportamiento existentes.
- Reset funcional y resultados anunciados con `aria-live`.
- Sin overflow horizontal a 390 px.
- Navegación interna de la guía accesible por teclado.
- Lint, typecheck, tests y build aprobados.

## Estado

Completado el 30 de junio de 2026.
