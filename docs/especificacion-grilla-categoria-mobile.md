# Especificación: una columna de proyectos en categorías móviles

## Objetivo

Facilitar la lectura de las tarjetas de proyecto al abrir una categoría en móvil.

## Alcance

- Mostrar las tarjetas de las páginas de categoría en una columna hasta 40 rem de ancho.
- Mostrar tres columnas en tablet y conservar cuatro en escritorio.
- Conservar la disposición del listado «Ver todo».

## Flujo de usuario

La persona abre una categoría en móvil y recorre sus proyectos verticalmente, con una tarjeta por fila.

## Criterios de aceptación

1. A 320 y 390 CSS px, las categorías con proyectos muestran una sola tarjeta por fila y no generan desplazamiento horizontal.
2. Desde el punto de quiebre de tablet y hasta antes del de escritorio, las categorías muestran tres columnas.
3. Desde el punto de quiebre de escritorio, las categorías muestran cuatro columnas.
4. «Ver todo» conserva su grilla actual de dos columnas en móvil.
5. El orden de los proyectos y de navegación con teclado no cambia.

## Requisitos no funcionales

- La solución usa Sass y los puntos de quiebre existentes.
- Funciona igual en español e inglés y mantiene el contenido y la semántica de las tarjetas.

## Exclusiones

- No se modifican las fichas de proyecto ni las tarjetas de Inicio.

## Validación

- `npm run build` y `npm run lint`: correctos.
- Navegador integrado (Chromium), ruta Ilustración: a 320 y 390 CSS px, las primeras dos tarjetas tienen la misma coordenada horizontal y distintas coordenadas verticales; el ancho de desplazamiento coincide con el viewport.
- Navegador integrado (Chromium), ruta Ilustración: a 768 CSS px, la grilla tiene tres columnas y las primeras dos tarjetas comparten fila; a 1024 CSS px tiene cuatro columnas.
- Navegador integrado (Chromium), ruta «Ver todo»: a 390 CSS px, la grilla conserva dos columnas.
- Limitación: se verificaron estos anchos y rutas representativas; no se repitió una auditoría WCAG global porque no cambiaron controles, contenido ni semántica.
