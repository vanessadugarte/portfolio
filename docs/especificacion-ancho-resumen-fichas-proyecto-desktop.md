# Especificación: ancho del resumen de las fichas de proyecto en escritorio

## Objetivo

Homologar el ancho de la descripción situada bajo el `h1` y de la ficha técnica en escritorio tomando la composición de Snapchat Frames como patrón, con una excepción compacta para Muchokids Nationalities.

## Alcance

- Definir tokens Sass compartidos de `44rem` para la descripción y `23rem` para la ficha técnica.
- Aplicar los límites a las fichas completas y a la galería de Snapchat Frames desde el breakpoint de escritorio (`64rem`).
- Asegurar que la descripción de las fichas completas se ubique debajo del `h1` y que la ficha técnica ocupe la columna contigua cuando la composición usa columnas.
- Mostrar un separador vertical antes de la ficha técnica y permitir que sus etiquetas pasen a una segunda línea cuando no caben en los `23rem` disponibles.
- Mantener Muchokids Nationalities como excepción apilada, sin separador, con un ancho compacto compartido de `36rem` para su descripción y ficha técnica.
- Conservar sin cambios los anchos y el apilado existentes en móvil y tablet.

## Flujo de usuario

La persona abre una ficha de proyecto en escritorio, lee el título y encuentra debajo una descripción amplia, separada visualmente de una ficha técnica más estrecha. Si la tercera etiqueta no cabe, continúa en la línea inferior. En Muchokids Nationalities, ambos bloques permanecen apilados dentro de su composición compacta.

## Criterios de aceptación

- Desde `64rem`, las descripciones de las fichas completas y de Snapchat Frames tienen un ancho máximo de `44rem`.
- Desde `64rem`, sus fichas técnicas tienen un ancho máximo de `23rem` y un separador vertical en el inicio de la columna.
- Las etiquetas técnicas conservan su ancho intrínseco y pueden envolver como unidades completas; la tercera etiqueta pasa a una segunda línea cuando el espacio no alcanza.
- Muchokids Nationalities conserva descripción y ficha técnica apiladas, sin separador, con un ancho máximo de `36rem` para cada bloque.
- Los valores se consumen desde tokens Sass compartidos, sin medidas equivalentes repetidas por proyecto.
- Las composiciones con descripción y ficha técnica en columnas conservan una separación visible y permiten que ambas columnas se reduzcan sin desbordamiento.
- Donas 3D muestra la descripción debajo del `h1`, con la ficha técnica en la columna contigua.
- Por debajo de `64rem`, las reglas actuales de tablet y móvil no cambian.
- `npm run lint` y `npm run build` finalizan correctamente.

## Requisitos no funcionales

- Mantener Sass, el enfoque mobile-first y los breakpoints centralizados existentes.
- Conservar la estructura semántica, el orden de lectura, la navegación por teclado y el manejo de foco actuales.
- Evitar desplazamiento horizontal en los anchos representativos de escritorio, tablet y móvil.

## Exclusiones

- No modificar el contenido, las imágenes, los colores ni los datos técnicos de los proyectos.
- No rediseñar las etiquetas internas de la ficha técnica.
- No alterar las secciones posteriores a la cabecera de cada proyecto.

## Validación

- `npm run lint`, `npm run build`, `npm run test:content` y `git diff --check`: correctos.
- Navegador integrado de Codex (Chromium), a 1280 CSS px: Donas 3D, Medusas, Deep Sea, Bosque, Pantano, Iconos de juego, Super reno y Snapchat Frames calculan la descripción a `704px` (`44rem`) y la ficha técnica a `368px` (`23rem`), con divisor vertical y sin desplazamiento horizontal.
- En esas ocho fichas, la tercera etiqueta técnica comienza en una línea inferior; las etiquetas anteriores también pueden envolverse como unidades completas cuando su propio contenido requiere más espacio.
- Muchokids Nationalities calcula descripción y ficha técnica a `576px` (`36rem`), las mantiene apiladas y no presenta divisor vertical ni desbordamiento horizontal.
- A 1024 CSS px las columnas estándar reducen únicamente la descripción según el espacio disponible, mantienen la ficha técnica en `23rem` y conservan `scrollWidth` igual al viewport.
- A 768 y 320 CSS px, Donas 3D, Medusas, Snapchat Frames y Muchokids Nationalities conservan sus anchos y apilado responsive previos, con `scrollWidth` igual al viewport.
- Revisión visual en Chromium a 1280 CSS px: Donas 3D y Medusas reproducen la jerarquía, el divisor y el ajuste de etiquetas de Snapchat Frames; Muchokids Nationalities conserva su composición compacta junto a la ilustración principal.
- Limitación: la comprobación de reflujo se acotó a las cabeceras y a muestras representativas de las tres plantillas; no se repitió una auditoría WCAG global porque no cambiaron la semántica, los controles ni el foco.
