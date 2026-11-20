# Especificación: color del título de Forest

## Objetivo

Aclarar ligeramente el título principal de Forest usando un tono de su paleta visual.

## Alcance

- Cambiar únicamente el color visible del `h1` de la ficha de Forest a `#24555B`.
- Mantener el color de acento `#0C2C31` en los demás elementos de la ficha.

## Flujo de usuario

La persona abre `/proyectos/forest` y distingue el título del resto del contenido sin cambios de navegación ni de lectura.

## Criterios de aceptación

- El título «Forest» usa `#24555B` en móvil, tablet y escritorio.
- El color conserva un contraste de al menos 4.5:1 sobre el fondo de la ficha.
- Los demás proyectos y los adornos de Forest conservan sus colores.

## Requisitos no funcionales

- Usar un token Sass y conservar el comportamiento responsive y la estructura semántica existentes.

## Exclusiones

- No modificar la paleta de muestras, las imágenes, los textos ni la navegación.

## Validación

- `npm run build`, `npm run lint` y `git diff --check`: correctos.
- Contraste calculado para `#24555B` sobre el fondo de la ficha `#F6F4ED`: 7.56:1 (antes: 13.44:1), superior al mínimo WCAG AA de 4.5:1 para texto normal.
- Revisión de accesibilidad limitada al contraste del título; no cambiaron controles, navegación, foco ni estructura semántica.
