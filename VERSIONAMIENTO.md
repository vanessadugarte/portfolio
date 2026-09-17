# Reglas de versionamiento

Este proyecto usa **Git Flow** como estrategia de ramas. Todas las integraciones se realizan mediante *pull requests* (PRs) revisados.

## Ramas permanentes

- `main`: contiene únicamente versiones listas para producción. No acepta commits directos ni PRs desde ramas de trabajo; solo acepta PRs originados en `develop`.
- `develop`: concentra el trabajo integrado para la siguiente versión. No acepta commits directos; solo acepta PRs desde ramas de trabajo.

## Ramas de trabajo

Toda nueva rama debe crearse desde `develop` y volver a integrarse a `develop` mediante un PR.

| Tipo | Propósito | Formato |
| --- | --- | --- |
| Funcionalidad | Nueva capacidad o mejora | `feature/<descripcion-corta>` |
| Issue o problema | Corrección o trabajo asociado a un issue | `fix/<numero-issue>-<descripcion-corta>` |
| Corrección urgente | Incidente que requiere una corrección prioritaria | `hotfix/<descripcion-corta>` |
| Preparación de versión | Estabilización y publicación de una versión | `release/<version>` |

Usa nombres en minúsculas, separados por guiones (`kebab-case`) y descriptivos. Ejemplos: `feature/galeria-proyectos`, `fix/42-menu-movil`, `hotfix/error-carga-inicial`.

## Flujo de integración

1. Actualiza `develop` y crea la rama de trabajo desde ella.
2. Implementa el cambio y verifica `npm run lint` y `npm run build` antes de abrir el PR.
3. Abre un PR hacia `develop`. Incluye el número del issue cuando corresponda.
4. Tras la revisión y aprobación, integra el PR en `develop`.
5. Para publicar, abre un PR desde `develop` hacia `main`. `main` solo recibe este tipo de PR.

## Reglas obligatorias

- Está prohibido hacer `push` o commits directos a `develop` y `main`.
- Los issues se desarrollan siempre en una rama creada desde `develop`; nunca desde `main`.
- Todo cambio debe pasar por un PR con las comprobaciones del proyecto exitosas.
- Los PRs hacia `main` deben tener como rama de origen `develop`.
