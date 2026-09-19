# Especificación: sección de experiencia en Inicio

## Objetivo

Recrear en la página de Inicio la sección de experiencia profesional definida en la referencia visual, con dos cargos destacados, una línea de tiempo, figuras reutilizadas del hero y acceso a la landing de experiencia.

## Alcance

- Mostrar el título `Experiencia` como `h2` con los tokens tipográficos vigentes para encabezados.
- Mostrar los dos cargos y sus descripciones en una línea de tiempo vertical.
- Incorporar dos instancias decorativas de una figura SVG existente del hero.
- Usar `#F4F6FF` como fondo de la sección y `#273E88` para las figuras, mediante tokens Sass.
- Mostrar al final un enlace visualmente tratado como botón secundario ghost con el texto `Ver experiencia completa`, borde y texto `#344A91`, y relleno del mismo color en hover.
- Dirigir el botón a la misma ruta `/experiencia` utilizada por la navegación principal.
- Mantener contenido equivalente en español e inglés mediante la estructura de traducciones existente.

## Flujo de usuario

La persona recorre Inicio, lee los dos cargos destacados y selecciona `Ver experiencia completa` para navegar a la landing de experiencia profesional.

## Criterios de aceptación

- La sección se adapta a móvil, tablet y escritorio sin solapamientos ni desbordes horizontales.
- El encabezado visible en español dice `Experiencia` y es un `h2`.
- Los dos cargos, empresas, fechas y descripciones solicitados están visibles.
- La línea de tiempo conecta visualmente ambos cargos.
- Las dos figuras usan un SVG del hero y el token de color `#273E88`.
- El fondo usa el token de color `#F4F6FF`.
- El botón final tiene borde y texto `#344A91` sobre fondo transparente; en hover se rellena con `#344A91` y mantiene texto legible; conserva foco visible y navega a `/experiencia`.
- `npm run test:content`, `npm run lint` y `npm run build` finalizan correctamente.

## Requisitos no funcionales

- Conservar React, React Router y Sass.
- No duplicar rutas ni incorporar texto de interfaz directamente en el componente.
- Respetar `prefers-reduced-motion` y mantener contraste legible.

## Exclusiones

- Rediseño de la landing completa de experiencia.
- Cambios en el menú de navegación.
- Incorporación de imágenes o dependencias nuevas.
