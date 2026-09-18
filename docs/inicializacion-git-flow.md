# Inicialización y controles de Git Flow

Este procedimiento resuelve el primer arranque de un repositorio que todavía no tiene commits ni ramas y deja operativo el flujo definido en [`VERSIONAMIENTO.md`](../VERSIONAMIENTO.md). La excepción descrita aquí existe solo porque un repositorio vacío no puede recibir su primer cambio mediante un pull request.

## Condiciones previas

Antes de ejecutar el arranque se debe registrar una aprobación explícita en el issue o documento de especificación. Esa aprobación debe identificar:

- el repositorio remoto correcto;
- los archivos que formarán el commit base;
- la creación y publicación inicial de `main` y `develop`;
- la excepción única que permite publicar el commit base sin un PR previo.

La excepción termina cuando ambas ramas existen. Desde ese momento, `main` y `develop` reciben cambios exclusivamente mediante pull requests.

## Procedimiento para un repositorio vacío

1. Confirmar que la copia local contiene el trabajo que se desea conservar y que el remoto está realmente vacío.
2. Documentar la especificación y obtener la aprobación explícita de la excepción inicial.
3. Configurar `origin` con la URL aprobada y verificar la identidad con `git remote -v` y `gh repo view`.
4. Incluir en el commit base las reglas del repositorio, los workflows de calidad y política de origen, y el código existente que haya sido aprobado.
5. Ejecutar `npm ci`, `npm run test:branch-policy`, `npm run lint` y `npm run build`.
6. Crear el commit base en `main` y publicarlo una sola vez. No reescribirlo ni usar force-push.
7. Crear `develop` exactamente desde ese commit base y publicarla con seguimiento remoto.
8. Configurar las protecciones descritas más abajo y comprobarlas mediante la API o la interfaz de GitHub.
9. Crear todo trabajo posterior desde `develop` usando el nombre de rama definido en `VERSIONAMIENTO.md` y devolverlo mediante PR hacia `develop`.

Si el remoto deja de estar vacío, las referencias divergen o aparecen cambios que no pertenecen al arranque, se debe detener el procedimiento. No se debe sustituir esa investigación con un reset, un force-push o una nueva inicialización.

## Estado verificable de este repositorio

El arranque histórico ya había ocurrido cuando se implementó este procedimiento:

- repositorio: `vanessadugarte/portfolio`;
- commit base compartido: `8bfd0de` (`chore(repo): initialize portfolio baseline`);
- `main` conserva ese commit base;
- `develop` desciende de ese commit y recibe los cambios integrados por PR;
- el historial existente se conserva sin reescritura.

El commit base es evidencia de la relación entre ramas y de los archivos publicados, pero no prueba por sí solo que la excepción se aprobara antes de ejecutarse. Esta limitación histórica no debe repetirse en futuros repositorios: la aprobación previa es obligatoria.

## Comprobaciones automáticas

El workflow `Quality` se ejecuta en cada PR hacia `develop` o `main` con Node.js 22.20.0 y realiza, en este orden:

1. `npm ci`;
2. `npm run test:branch-policy`;
3. `npm run lint`;
4. `npm run build`.

El workflow `Main source policy` se ejecuta para PRs hacia `main`. Solo acepta `develop` como rama de origen y además exige que esa rama pertenezca a `vanessadugarte/portfolio`, por lo que una rama `develop` de un fork no satisface la política. El workflow usa `pull_request_target`, permisos de solo lectura y el script alojado en `main`; nunca obtiene ni ejecuta código del PR que está evaluando.

La lógica se comprueba localmente con:

```bash
npm run test:branch-policy
```

Las pruebas cubren el caso permitido y rechazan una rama de trabajo, un fork con una rama del mismo nombre y una base distinta de `main`.

## Protecciones de ramas

Las protecciones se aplican a `develop` y `main` con estas reglas:

| Regla | `develop` | `main` |
| --- | --- | --- |
| Cambios mediante PR | Sí | Sí |
| Aprobaciones requeridas | 1 | 1 |
| Descartar aprobaciones obsoletas | Sí | Sí |
| Resolver conversaciones | Sí | Sí |
| Rama actualizada antes de integrar | Sí | Sí |
| Comprobaciones requeridas | `Quality` | `Quality`, `Main source policy` |
| Force-push y borrado | Bloqueados | Bloqueados |

El repositorio tiene una sola administradora. Por ello, las reglas no se imponen a administradores: GitHub permite una salida de recuperación si una comprobación queda mal configurada, pero la política del proyecto sigue prohibiendo commits directos y exige registrar cualquier uso excepcional. Una aprobación no puede ser emitida por la misma persona que creó el PR; si no hay otro colaborador disponible, el PR permanecerá pendiente de revisión o requerirá que la administradora use su bypass de forma explícita y auditable.

### Activación inicial del control de `main`

GitHub carga un workflow de `pull_request_target` desde la rama base. Mientras `main` todavía no contenga `Main source policy`, el primer PR correcto de `develop` hacia `main` no puede producir esa comprobación y quedará bloqueado por el estado requerido. La administradora deberá comprobar que el origen sea exactamente `vanessadugarte/portfolio:develop`, integrar ese único PR mediante el bypass disponible y verificar inmediatamente que las ejecuciones posteriores ya reporten `Main source policy`. No se debe quitar la protección ni empujar directamente a `main` para resolver este arranque.

## Auditoría

Las protecciones actuales se pueden inspeccionar sin modificarlas con:

```bash
gh api repos/vanessadugarte/portfolio/branches/develop/protection
gh api repos/vanessadugarte/portfolio/branches/main/protection
```

Para cada PR se debe conservar en su descripción la especificación enlazada, los criterios validados, el resultado de calidad, la conclusión de revisión y cualquier limitación pendiente.
