# Especificación: ajustes de la landing Murana

## Objetivo

Homologar la cabecera de Murana con las directrices de las fichas de proyecto y eliminar los textos editoriales que ya no forman parte de la landing.

## Alcance

- Quitar la etiqueta de categoría situada sobre el título de Murana.
- Quitar el título «Réplica de la landing» y su texto descriptivo, en español e inglés.
- En escritorio, disponer la descripción y la ficha técnica en columnas contiguas, con la ficha técnica a la derecha y un separador vertical.
- Eliminar el espacio vertical reservado por el bloque editorial retirado.
- Igualar el espacio superior de la cabecera a Medusas, sin padding adicional tras la navegación.
- Reducir los títulos de sección internos de la réplica a `1rem` con peso regular.
- Usar peso regular para los nombres de categoría y texto blanco legible en los botones de las líneas de producto.
- Mostrar el cierre de la réplica únicamente con el logotipo de Murana y un fondo de menor altura.
- Reducir y centrar los sets destacados, con nombres en peso regular y espacio lateral equilibrado.

## Flujo de usuario

La persona abre Murana y encuentra directamente el título, seguido por la descripción y la ficha técnica. En escritorio, ambas se leen en columnas; en móvil y tablet conservan el apilado existente. Tras la cabecera, comienza inmediatamente la réplica visual.

## Criterios de aceptación

- Murana no muestra una etiqueta encima del `h1`.
- Murana no muestra «Réplica de la landing» ni su descripción localizada.
- Desde `64rem`, la descripción se muestra a la izquierda y la ficha técnica a la derecha con separador vertical.
- En móvil y tablet, la descripción y la ficha técnica permanecen apiladas.
- No queda un espacio vertical correspondiente al encabezado editorial eliminado.
- El título comienza tras el margen de la navegación, como en Medusas, sin espaciado superior adicional.
- Los títulos de sección internos, como «Encuentra tu categoría» y «Cuidado para cada rutina», se muestran a `1rem` con peso `400`.
- Los nombres de categoría se muestran con peso `400`; los botones «Línea de producto» tienen texto blanco y fondo con contraste suficiente.
- El cierre no muestra título ni descripción, y su fondo rosado rodea únicamente el logotipo con padding reducido.
- La grilla de sets destacados conserva su centro, limita su ancho para dejar espacio a ambos lados y muestra imágenes más pequeñas y nombres con peso `400`.
- `npm run lint` y `npm run build` finalizan correctamente.

## Requisitos no funcionales

- Mantener Sass, los tokens visuales existentes, la semántica y el orden de lectura.
- No alterar la navegación, los controles ni el foco.

## Exclusiones

- No rediseñar la réplica visual ni modificar sus imágenes, contenido interno o datos técnicos.
