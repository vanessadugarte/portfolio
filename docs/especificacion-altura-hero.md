# Especificación: hero más compacto

## Objetivo

Disminuir la altura visual del hero de Inicio y escalar proporcionalmente sus figuras SVG para que la composición conserve aire y no invada la sección siguiente.

## Alcance

- Reducir la altura del contenedor del hero y de su campo de figuras en móvil, tablet y escritorio.
- Reducir los tamaños declarados para las figuras decorativas y de categorías.
- Conservar las posiciones, enlaces de categoría, etiquetas y comportamiento interactivo existentes, salvo el ajuste de escritorio de la figura Animaciones.
- Desplazar ligeramente a la derecha y reducir un punto porcentual el tamaño de la figura Animaciones en escritorio.

## Flujo de usuario

Al entrar a Inicio, la persona ve un hero visiblemente más bajo, con las figuras abstractas equilibradas dentro de su área y puede seguir accediendo a todas las categorías.

## Criterios de aceptación

- El hero ocupa menos altura que la versión anterior en todos los puntos de quiebre.
- El campo de figuras y sus SVG se reducen de forma proporcional.
- Todas las figuras de categoría mantienen su enlace y etiqueta visibles.
- En escritorio, Animaciones usa posición horizontal de 51 % y tamaño de 14 %; su composición móvil no cambia.
- `npm run lint` y `npm run build` finalizan correctamente.

## Requisitos no funcionales

- Mantener los estilos en Sass y los valores de composición centralizados en el contenido del hero.
- No cambiar rutas, textos ni la semántica accesible.

## Exclusiones

- Rediseñar las figuras SVG o modificar sus archivos fuente.
- Cambiar la sección de trabajos seleccionados o las demás páginas.
