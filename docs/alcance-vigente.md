# Estado y alcance vigente

> Documentación retrospectiva auditada el 17 de septiembre de 2026. Este documento describe el comportamiento que ya estaba implementado en esa fecha; no pretende presentarlo como una especificación escrita antes del desarrollo.

## Propósito

Registrar el alcance observable del portafolio y distinguir las decisiones provisionales aceptadas de las funcionalidades pendientes. Para cambios futuros, la especificación del issue correspondiente es la fuente de verdad y debe actualizarse cuando cambie el alcance acordado.

## Alcance implementado

### Inicio

- Hero con el nombre de Vanessa Dugarte, figuras abstractas y accesos a cinco categorías.
- Cuadrícula de cuatro trabajos seleccionados con contenido y visuales provisionales.
- Resumen de los dos empleos más recientes y acceso a la experiencia completa.
- Navegación principal a Inicio, categorías, índice de proyectos y Experiencia.

### Proyectos

- Índice `/proyectos` con título e introducción provisionales.
- Landings independientes para Ilustración, Front-end + UX/UI, 3D, Diseño gráfico y Animaciones.
- Cada landing de categoría identifica la categoría y muestra el estado «Próximamente»; todavía no contiene proyectos.

### Experiencia

- Trayectoria profesional con cargos, empresas, fechas y responsabilidades.
- Educación y habilidades técnicas.
- Vista resumida en Inicio y vista completa en `/experiencia`.

### Idiomas y navegación

- Contenido disponible en español e inglés a partir de una única estructura de traducciones.
- Español como idioma predeterminado y preferencia persistida en el navegador.
- Rutas centralizadas con React Router y navegación basada en hash.
- Migración de hashes heredados y página de error para rutas desconocidas.

## Flujos observables

1. Una persona llega a Inicio, explora el hero y puede abrir una categoría desde una figura o desde el menú Proyectos.
2. Desde Proyectos puede abrir el índice general o cualquiera de las cinco landings provisionales.
3. Desde Inicio o la navegación puede consultar la experiencia completa.
4. Puede alternar entre español e inglés y conservar su preferencia en visitas posteriores desde el mismo navegador.
5. Ante una dirección no reconocida recibe una página 404 con acceso de regreso a Inicio.

## Decisiones provisionales aceptadas

- Los enlaces «Ver proyecto» de las cuatro tarjetas seleccionadas conducen temporalmente a Experiencia.
- «Todos los proyectos» es una página introductoria sin catálogo.
- Las cinco landings de categoría pueden permanecer vacías y mostrar «Próximamente».
- Estas decisiones describen el estado aceptado, pero no definen los destinos ni el contenido de futuros casos de estudio.

## Requisitos no funcionales vigentes

- Mantener React y Vite como base, React Router como única solución de enrutamiento y Sass para los estilos.
- Conservar la identidad visual de composiciones abstractas y figuras SVG.
- Mantener una experiencia adaptable para móvil, tablet y escritorio.
- Mantener los textos fuera de los componentes para poder extender los idiomas sin duplicarlos.
- Validar cada cambio con `npm run lint` y `npm run build`.

Las reglas normativas completas permanecen en [`agents.md`](../agents.md); el flujo Git Flow y los nombres de rama permanecen en [`VERSIONAMIENTO.md`](../VERSIONAMIENTO.md). Esos documentos son la fuente de verdad y no se duplican aquí.

## Exclusiones del alcance registrado

- Casos de estudio o páginas de detalle para trabajos seleccionados.
- Catálogo completo en «Todos los proyectos».
- Contenido de proyectos en las landings de categoría.
- Backend, CMS, autenticación, formularios o analítica.
- Reescritura del historial para simular que esta documentación existía antes de la implementación.

## Mantenimiento del alcance

Toda decisión nueva debe registrarse primero en el issue, especificación o documento que gobierne el cambio. El PR debe enlazar esa fuente, explicar los criterios validados y actualizar este documento solo cuando cambie el estado vigente que resume.

Esta fotografía retrospectiva se creó como parte del [issue #5](https://github.com/vanessadugarte/portfolio/issues/5).
