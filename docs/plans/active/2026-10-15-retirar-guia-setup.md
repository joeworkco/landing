# Plan: retirar la guía heredada de `/claude/setup/`

## Problema

La ruta heredada publica una versión rota de Claude en Marcha: promete
conectores gratuitos y exige construir URLs encadenadas que Claude no puede
abrir. Aunque el sitio ya no la enlaza, la ruta sigue accesible directamente.

## Resultado esperado

- `/claude/setup/inicio.md` conserva la ruta y explica que la versión ya no se
  usa.
- El aviso prohíbe seguir instrucciones antiguas o abrir URLs adicionales y
  dirige a `https://joework.co/claude`.
- No queda ningún otro archivo bajo `/claude/setup/`.
- El sitemap y las páginas públicas no enlazan a la ruta heredada.

## Verificación

- Test de regresión sobre el inventario y el contenido del aviso.
- Búsqueda de `/claude/setup/` en sitemap, páginas y componentes.
- Build estático y comprobación HTTP del aviso.
- Suite completa, lint y TypeScript.

## Riesgo y rollback

Los enlaces directos a archivos de paso heredados devolverán 404. Es
intencional: conservarlos mantendría accesibles instrucciones incorrectas. El
conductor antiguo conserva un mensaje de recuperación. El rollback es revertir
este commit.

## Estado

- [x] Fallo anterior reproducido con un test.
- [x] Archivos heredados retirados y aviso añadido.
- [x] Verificaciones completas.
- [x] PR abierto sin mergear: #14.
