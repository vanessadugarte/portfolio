# Especificación: márgenes laterales en páginas de proyecto

## Objetivo

Dar más aire lateral al contenido de todas las páginas de detalle de proyecto en escritorio, conservando la composición y la legibilidad existentes en tablet y móvil.

## Alcance

- Aplicar el ajuste al contenedor compartido de `ProjectDetailPage`.
- Aumentar progresivamente el espacio lateral desde el breakpoint de escritorio.
- Limitar el ancho máximo del contenido para mantener márgenes visibles en pantallas amplias.

## Flujo de usuario

1. La persona abre una página de proyecto, como Medusas, Donas o Jungla.
2. En escritorio, el contenido se presenta con mayor separación respecto de ambos bordes de la ventana.
3. En tablet y móvil, el contenido mantiene los márgenes actuales y continúa adaptándose al ancho disponible.

## Criterios de aceptación

- Todas las páginas de detalle completas comparten el mismo aumento de margen lateral en escritorio.
- El contenido queda centrado y su ancho máximo no supera `81.25rem`.
- El margen lateral de escritorio crece de forma fluida entre `2rem` y `6rem`.
- No se introduce desplazamiento horizontal a 320 CSS px.
- Las composiciones específicas de cada proyecto conservan su estructura.
- `npm run build` y `npm run lint` finalizan correctamente.

## Requisitos no funcionales

- Mantener Sass y los breakpoints centralizados existentes.
- Conservar el comportamiento responsive y los indicadores de foco actuales.

## Exclusiones

- No se modifican las páginas de inicio, categorías o experiencia.
- No se alteran textos, imágenes, navegación ni contenido de los proyectos.
