# Especificación: marcas de medición del hero

## Objetivo

Evocar una base de corte mediante marcas graduadas decorativas en el borde interior del hero de Inicio.

## Alcance

- Incorporar rayas cortas, regulares y sutiles en los cuatro bordes de la retícula existente del hero.
- Mantener las marcas como decoración no interactiva, sin alterar los enlaces a categorías ni el orden de foco.
- Conservar la composición y la retícula interior en móvil, tablet y escritorio.

## Flujo de usuario

Al entrar a Inicio, la persona reconoce un marco inspirado en una base de corte; puede seguir seleccionando las figuras de categoría sin que las marcas interfieran.

## Criterios de aceptación

- El hero muestra graduaciones visibles junto a sus cuatro bordes interiores.
- Las graduaciones no reciben eventos de puntero ni foco y no ocultan texto o controles.
- La retícula, las figuras y los enlaces del hero se conservan operativos en los tres puntos de quiebre.
- `npm run lint` y `npm run build` finalizan correctamente.

## Requisitos no funcionales

- Implementar el detalle con Sass y pseudoelementos decorativos, sin incorporar imágenes nuevas.
- Respetar `prefers-reduced-motion`; las marcas no incorporan animación.

## Exclusiones

- Reemplazar las figuras SVG, rediseñar el hero o añadir unidades o numeración de regla.
