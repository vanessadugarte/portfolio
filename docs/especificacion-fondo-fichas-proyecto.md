# Especificación: fondo claro en fichas de proyecto

## Objetivo

Unificar la superficie visual de todas las fichas de proyectos específicos con el fondo claro ya usado por el detalle completo de Medusas.

## Alcance y flujo

Al abrir cualquier ruta de proyecto, la persona ve una superficie clara. Las fichas completas mantienen su diseño actual y las fichas aún pendientes muestran título, categoría y estado próximo con contraste adecuado sobre ese mismo fondo.

## Criterios de aceptación

- Las fichas pendientes usan el token `$color-project-canvas`, igual que el detalle completo de Medusas.
- El título, la categoría y el mensaje de estado pendiente conservan contraste legible en la superficie clara.
- Las fichas completas no cambian su composición, contenido ni navegación.
- `npm run lint` y `npm run build` finalizan correctamente.

## Requisitos no funcionales

- Reutilizar tokens Sass existentes.
- Mantener la estructura semántica, el contenido localizado, la gestión de foco y el orden de lectura.
- La presentación debe conservar reflujo sin desplazamiento horizontal en móvil.

## Exclusiones

- Crear o completar contenido de las fichas pendientes.
- Cambiar fondos de categorías, navegación o inicio.
- Cambiar imágenes, rutas o enlaces.

## Validación

- Pendiente de registrar tras comprobar las rutas de ficha en el navegador y ejecutar lint y build.
