# Especificación: marcas de medición del hero

## Objetivo

Evocar una base de corte mediante marcas graduadas decorativas y dos guías angulares en el hero de Inicio.

## Alcance

- Incorporar rayas cortas, regulares y sutiles en los cuatro bordes de la retícula existente del hero, próximas al marco rectangular.
- Destacar una raya más larga cada diez graduaciones, como referencia de centímetro.
- Mostrar en escritorio dos guías diagonales que parten de la esquina inferior izquierda del marco; una alcanza su esquina superior derecha y la otra forma un ángulo al alcanzar el borde superior.
- Mantener las marcas como decoración no interactiva, sin alterar los enlaces a categorías ni el orden de foco.
- Conservar la composición y la retícula interior en móvil y tablet; las guías diagonales son exclusivas de escritorio.

## Flujo de usuario

Al entrar a Inicio en escritorio, la persona reconoce un marco inspirado en una base de corte, con graduaciones y guías angulares; puede seguir seleccionando las figuras de categoría sin que la decoración interfiera.

## Criterios de aceptación

- El hero muestra graduaciones visibles junto a sus cuatro bordes interiores, con una graduación más alta cada diez marcas.
- Las graduaciones quedan próximas al borde rectangular sin superponerse con él.
- En escritorio, dos guías diagonales visibles parten de la esquina inferior izquierda del marco y forman un ángulo.
- Las graduaciones y guías no reciben eventos de puntero ni foco y no ocultan texto o controles.
- La retícula, las figuras y los enlaces del hero se conservan operativos en los tres puntos de quiebre.
- `npm run lint` y `npm run build` finalizan correctamente.

## Requisitos no funcionales

- Implementar las graduaciones con Sass y las guías con SVG decorativo en línea, sin incorporar imágenes nuevas.
- Respetar `prefers-reduced-motion`; las marcas no incorporan animación.

## Exclusiones

- Reemplazar las figuras SVG, rediseñar el hero o añadir unidades o numeración de regla.
