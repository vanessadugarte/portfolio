# Especificación: miniaturas Forest y Muchomix Game

## Objetivo

Incorporar Forest y Muchomix Game a la galería de la categoría Ilustración usando las miniaturas entregadas.

## Alcance y flujos de usuario

- Al visitar Ilustración, la persona encuentra Forest y Muchomix Game junto con los proyectos existentes.
- Cada tarjeta muestra miniatura, tipo, título y descripción en el idioma activo.
- Al abrir cualquiera de las tarjetas, se accede a su ruta de proyecto y se muestra el estado de detalle pendiente.

## Criterios de aceptación

- Forest usa `src/assets/images/projects/illustrations/forest/forest-760x500.jpg` y Muchomix Game usa `src/assets/images/projects/illustrations/muchomix-game/muchomix-game.jpg`.
- Ambos proyectos aparecen solo en Ilustración y no modifican los cuatro trabajos seleccionados del inicio.
- Título, descripción y texto alternativo están disponibles en español e inglés.
- Las rutas `/proyectos/forest` y `/proyectos/muchomix-game` mantienen la navegación SPA y muestran «Próximamente» / «Coming soon» hasta que exista contenido de detalle.

## Requisitos no funcionales

- Reutilizar el catálogo, componentes y rutas existentes; conservar foco orientado, título de documento localizado y la línea base WCAG 2.2 A/AA.
- No incluir textos de interfaz directamente en los componentes.

## Exclusiones

- No crear galerías ni contenido de detalle adicional.
- No incorporar estos proyectos a Trabajos seleccionados.

## Validación

- `npm run test:content`: 13 pruebas aprobadas; cubren el catálogo, la localización y los detalles pendientes de Forest y Muchomix Game.
- `npm run build` y `npm run lint`: completados sin errores; el build incorpora ambas miniaturas.
- Navegador integrado de Codex (Chromium): Ilustración muestra las dos tarjetas, cada una con enlace accesible, tipo, título y descripción. La ruta de Muchomix Game muestra su título de documento localizado, `h1` y «Próximamente». La revisión se limitó al contenido nuevo y reutiliza los componentes semánticos y la navegación existentes.
