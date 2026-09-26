# Especificación: resultado final protagonista en Medusas

## Objetivo

Dar protagonismo a la ilustración final de Medusas al inicio de la ficha para que pueda apreciarse con claridad antes de recorrer el proceso creativo.

## Alcance y flujo

Al abrir el detalle de Medusas en escritorio, la persona encuentra primero el título, contexto y ficha técnica del proyecto, sin repetir el año y la técnica en una línea adicional. A continuación aparece la ilustración final a casi todo el ancho del contenedor. Después puede continuar hacia referencias, proceso y detalles. La misma imagen no se repite al cierre.

## Criterios de aceptación

- En escritorio, la ilustración final de la cabecera usa el ancho disponible del contenido, con un máximo de `81.25rem`.
- En escritorio, el texto descriptivo previo a la ilustración se limita a `44rem` para conservar una medida de lectura más cómoda.
- En escritorio, la ficha técnica se muestra a la derecha de la descripción, en la misma fila y separada por una línea vertical; móvil y tablet conservan el orden vertical.
- El encabezado no muestra la línea redundante «Ilustración digital - 2015»; el año y la técnica se presentan una sola vez en la ficha técnica.
- Las etiquetas de la ficha técnica se muestran en negrita y sus valores conservan el peso regular.
- La obra final se mantiene antes de las secciones de referencias, proceso y detalles en el orden de lectura.
- No se muestra una segunda copia completa de la ilustración final al final de la ficha.
- En móvil y tablet, la imagen conserva su comportamiento fluido y no provoca desplazamiento horizontal.
- `npm run lint` y `npm run build` finalizan correctamente.

## Requisitos no funcionales

- Mantener la estructura semántica y el contenido localizado existentes.
- Conservar las dimensiones intrínsecas y el texto alternativo de la imagen.
- Reutilizar los tokens Sass y respetar `prefers-reduced-motion` existente.

## Exclusiones

- Cambios al contenido, imágenes, navegación o secciones 02 a 04.
- Nueva funcionalidad interactiva.

## Validación

- Navegador integrado (Chromium), ruta `#/proyectos/medusas` a 1280 px: resultado final amplio, sin copia al final y sin desplazamiento horizontal.
- Navegador integrado (Chromium), ruta `#/proyectos/medusas` a 1280 px: la descripción de la cabecera no supera `44rem` de ancho.
- Navegador integrado (Chromium), ruta `#/proyectos/medusas` a 1280 px: descripción y ficha técnica comparten fila, con un separador vertical visible; a 390 px permanecen apiladas.
- Navegador integrado (Chromium), ruta `#/proyectos/medusas` a 390 px: imagen fluida, sin desplazamiento horizontal.
- `npm run lint` y `npm run build` finalizan correctamente.
