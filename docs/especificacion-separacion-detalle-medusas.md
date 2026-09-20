# Especificación: separación entre pasos 01 y 02 de Medusas

## Objetivo

Reforzar en escritorio la separación visual entre la presentación del proyecto Medusas (paso 01) y la sección de referencias (paso 02).

## Alcance y flujo

Al recorrer el detalle de Medusas en una pantalla de escritorio, la persona encuentra una nueva línea horizontal entre ambos pasos y más espacio vertical alrededor de ella. Tablet y móvil conservan la composición actual.

## Criterios de aceptación

- A partir del punto de quiebre de escritorio, el paso 02 muestra un borde superior con el color de borde existente.
- En escritorio existen `2rem` entre el final del paso 01 y la línea, y `2rem` entre la línea y el contenido del paso 02.
- Por debajo del punto de quiebre de escritorio no se añade la nueva línea ni el espaciado adicional.
- `npm run lint` y `npm run build` finalizan correctamente.

## Requisitos no funcionales

- Reutilizar los tokens Sass existentes para el espaciado y el color del borde.
- Mantener sin cambios la estructura semántica, el contenido localizado y el orden de lectura.

## Exclusiones

- Cambios en los pasos 03 y 04.
- Cambios de contenido, imágenes o navegación del proyecto.

## Validación

- Navegador integrado (Chromium), detalle de Medusas a 1280 px: borde superior de 1 px, margen superior de 32 px y relleno superior de 32 px; sin desplazamiento horizontal.
- Navegador integrado (Chromium), detalle de Medusas a 390 px: sin borde ni margen superior adicional; sin desplazamiento horizontal.
- `npm run lint` y `npm run build`: correctos.
- Limitación: comprobación visual y de estilos centrada en esta separación; no se realizó una auditoría WCAG global porque no cambian controles, semántica ni contenido.
