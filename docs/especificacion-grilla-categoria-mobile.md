# Especificación: grilla de proyectos por ancho de pantalla

## Objetivo

Facilitar la lectura de las tarjetas de proyecto al abrir una categoría en móvil o tablet.

## Alcance

- Mostrar las tarjetas de las páginas de categoría en una columna hasta 40 rem de ancho.
- Mostrar tres columnas desde el punto de quiebre de tablet hasta antes de 75 rem (1200 CSS px), incluido el ancho de 1024 CSS px.
- Mostrar cuatro columnas desde 75 rem.
- Conservar la disposición del listado «Ver todo».

## Flujo de usuario

La persona abre una categoría y recorre sus proyectos en una columna en móvil, tres en tablet o cuatro en escritorio.

## Criterios de aceptación

1. A 320 y 390 CSS px, las categorías con proyectos muestran una sola tarjeta por fila y no generan desplazamiento horizontal.
2. Desde el punto de quiebre de tablet hasta 1199 CSS px, las categorías muestran tres columnas; a 1024 CSS px también.
3. Desde 1200 CSS px, las categorías muestran cuatro columnas.
4. «Ver todo» conserva su grilla actual de dos columnas en móvil.
5. El orden de los proyectos y de navegación con teclado no cambia.

## Requisitos no funcionales

- La solución usa Sass y centraliza el nuevo punto de quiebre en los tokens visuales.
- Funciona igual en español e inglés y mantiene el contenido y la semántica de las tarjetas.

## Exclusiones

- No se modifican las fichas de proyecto ni las tarjetas de Inicio.

## Validación

- `npm run build` y `npm run lint`: correctos.
- Navegador integrado (Chromium), ruta Ilustración: a 320 y 390 CSS px, las primeras dos tarjetas tienen la misma coordenada horizontal y distintas coordenadas verticales; el ancho de desplazamiento coincide con el viewport.
- Navegador integrado (Chromium), ruta Ilustración: una columna a 320 CSS px, tres columnas a 768, 1024 y 1194 CSS px, y cuatro columnas a 1200 CSS px; sin desplazamiento horizontal en esos anchos.
- Navegador integrado (Chromium), ruta «Ver todo»: a 390 CSS px, la grilla conserva dos columnas.
- Limitación: se verificaron estos anchos y rutas representativas; no se repitió una auditoría WCAG global porque no cambiaron controles, contenido ni semántica.
