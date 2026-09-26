# Especificación: etiquetas y composición del hero

## Objetivo

Mostrar las categorías del hero en capitalización normal y preservar una separación visual clara entre sus etiquetas y las figuras SVG.

## Alcance

- Eliminar la transformación a mayúsculas de las etiquetas de categorías del hero.
- Ajustar los tamaños y posiciones de las figuras del hero cuando sea necesario para que ninguna etiqueta se superponga con una figura.
- Reubicar la figura de Diseño gráfico hacia la izquierda y arriba únicamente en escritorio.
- Conservar los enlaces, las rutas, el texto localizado y las interacciones existentes.

## Flujo de usuario

Al llegar a Inicio, la persona lee cada categoría con su capitalización habitual y puede identificarla sin que el texto quede cubierto por una figura.

## Criterios de aceptación

- Las etiquetas usan el texto localizado tal como está definido, sin convertirlo a mayúsculas.
- Las etiquetas permanecen legibles y visualmente separadas de las figuras en móvil, tablet y escritorio.
- En escritorio, la figura y la etiqueta de Diseño gráfico aparecen más a la izquierda y arriba que su composición de tablet, sin invadir otras figuras ni texto.
- Los cinco accesos a categoría conservan su destino y funcionamiento con teclado.
- `npm run lint` y `npm run build` finalizan correctamente.

## Requisitos no funcionales

- Mantener los estilos en Sass y los valores de composición centralizados en el contenido del hero.
- No cambiar rutas, semántica ni textos de traducción.

## Exclusiones

- Rediseñar los SVG fuente o cambiar las demás secciones de Inicio.
