# Especificación: dirección de flechas de proceso

## Objetivo

Garantizar que las flechas decorativas de las secuencias de proceso siempre apunten al siguiente paso visible.

## Alcance

- Normalizar la orientación de cada SVG usado en el proceso de Medusas, Deep Sea y Pantano.
- Mostrar las flechas hacia abajo en los diseños verticales y hacia la derecha en escritorio.

## Flujo de usuario

1. La persona recorre las imágenes del proceso en una pantalla pequeña y las flechas la guían al paso que está debajo.
2. En escritorio, recorre la misma secuencia en una fila y las flechas señalan el paso siguiente a la derecha.

## Criterios de aceptación

- Todas las flechas de proceso apuntan hacia abajo por debajo del punto de quiebre de escritorio.
- Todas las flechas de proceso apuntan hacia la derecha desde el punto de quiebre de escritorio.
- Las flechas continúan siendo decorativas y no se exponen a tecnologías de asistencia.
- La adaptación no altera el orden, las imágenes ni la disposición responsive de los pasos.

## Requisitos no funcionales

- No debe introducir desplazamiento horizontal ni interacción adicional.
- La orientación se define junto al asset para que cada SVG mantenga su silueta y su dirección sea verificable.

## Exclusiones

- No se reemplazan ni redibujan los SVG existentes.
- No se modifican otras secciones ni la navegación entre proyectos.
