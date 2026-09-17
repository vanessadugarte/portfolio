# Proyecto

Aplicacion web de portafolio de Vanessa Dugarte, creada en React. Su objetivo es compartir trabajos, experiencia y curriculum con empleadores durante procesos de busqueda laboral.

## Alcance

- Pagina de inicio con hero visual y navegacion.
- Seccion de trabajos seleccionados.
- Landings por categoria, inicialmente vacias:
  - Ilustracion
  - Front-end + UX/UI
  - Diseno grafico
  - 3D
  - Animaciones
- Seccion de experiencia con curriculum en texto.

## Idioma

La interfaz se desarrolla primero en espanol. La arquitectura y el contenido deben permitir incorporar ingles posteriormente, sin duplicar componentes ni textos en linea.

## Desarrollo

- Mantener React y Vite como base del proyecto.
- Conservar la identidad visual definida: composiciones abstractas, figuras SVG y transiciones sutiles.
- Priorizar diseno responsive en escritorio, tablet y movil.
- Verificar cambios con `npm run build` y `npm run lint`.

## Desarrollo guiado por especificaciones (SDD)

- Antes de implementar una funcionalidad, documentar una especificacion breve y verificable en el issue, PR o documento asociado.
- La especificacion debe indicar objetivo, alcance, flujos de usuario, criterios de aceptacion, requisitos no funcionales y exclusiones.
- Separar la definicion de la especificacion de su implementacion: los criterios de aceptacion guian el desarrollo, la revision y las pruebas.
- Mantener las especificaciones actualizadas cuando cambie el alcance; no introducir comportamiento no acordado sin reflejarlo en ellas.
- Todo PR debe enlazar su especificacion o issue y explicar como se validaron los criterios de aceptacion.

## Enrutamiento

- Usar `react-router-dom` (React Router) como unica solucion de enrutamiento de la aplicacion.
- Declarar las rutas en una configuracion centralizada y usar componentes de ruta para las paginas; evitar condicionales manuales basados en `window.location`.
- Definir rutas semanticas, predecibles y en minusculas. Incluir una ruta de pagina no encontrada (`*`).
- Compartir navegacion, layout y protecciones de ruta mediante rutas anidadas cuando corresponda.
- Toda nueva landing de categoria debe contar con una ruta propia y estar incluida en la navegacion correspondiente.

## Estilos

- Usar Sass (`.scss`) para los estilos nuevos y las modificaciones de estilos existentes; evitar incorporar CSS plano nuevo.
- Organizar los estilos con parciales de Sass por responsabilidad y usar `@use` y `@forward` en lugar de `@import`.
- Centralizar tokens visuales (colores, tipografias, espaciados, puntos de quiebre y z-index) en variables o mapas de Sass reutilizables.
- Mantener los estilos de cada componente o seccion cerca de su codigo y evitar selectores globales o anidamientos profundos.
- Diseñar primero para móvil y añadir mejoras progresivas mediante media queries. No usar estilos en linea salvo cuando sean valores realmente dinámicos.

## Versionamiento

- Seguir las reglas de [VERSIONAMIENTO.md](VERSIONAMIENTO.md).
- Usar Git Flow para nombrar e integrar ramas.
- No realizar commits directos a `develop` ni a `main`: ambas ramas reciben cambios exclusivamente mediante PRs.
- Las ramas de issues o problemas nacen de `develop` y se integran nuevamente mediante un PR hacia `develop`.
- `main` solo recibe PRs cuya rama de origen sea `develop`.
