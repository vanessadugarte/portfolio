# Especificación: favicon VD

## Objetivo

Representar la identidad del portafolio en la pestaña del navegador mediante un favicon con el monograma «VD».

## Alcance

- Sustituir el contenido de `public/favicon.svg` conservando la referencia existente en `index.html`.
- Usar un SVG accesible, legible en tamaños reducidos, con fondo azul y separación visible entre las letras.

## Flujo de usuario

Al abrir cualquier ruta del portafolio, el navegador carga `/favicon.svg` y muestra el monograma «VD» en la pestaña.

## Criterios de aceptación

- El favicon visible contiene las letras «VD».
- El fondo del favicon es azul y las letras tienen mayor interletrado.
- `index.html` continúa apuntando a `/favicon.svg`.
- La aplicación compila y supera la validación de lint.

## Requisitos no funcionales

- El recurso debe ser vectorial y no requerir descargas externas.
- Debe incluir un nombre accesible para lectores de pantalla.

## Exclusiones

- No incluye cambios en el logotipo, la navegación ni otros elementos de identidad del sitio.
