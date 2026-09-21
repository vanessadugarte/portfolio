# Especificación: etiquetas de categoría en listados

## Objetivo

Evitar que las tarjetas repitan la categoría ya indicada por el encabezado de una landing de categoría.

## Alcance

- Ocultar el tipo o categoría de cada tarjeta en todas las landings de categoría, incluidas Ilustración y Otros.
- Conservarlo en el listado «Ver todo», donde permite identificar la categoría de cada proyecto.

## Flujo de usuario

Al abrir Ilustración, Otros o cualquier otra categoría, la persona lee el nombre de la categoría una vez en el encabezado y explora tarjetas sin esa repetición. Al abrir «Ver todo», cada tarjeta mantiene su categoría para distinguir los proyectos.

## Criterios de aceptación

1. Las tarjetas de las rutas de categoría no muestran el texto de tipo.
2. Las tarjetas de «Ver todo» muestran el texto de tipo localizado.
3. Los enlaces, títulos, descripciones, imágenes, orden de foco y rutas de las tarjetas no cambian.

## Requisitos no funcionales

- La regla funciona en español e inglés sin duplicar contenido.
- No se introducen cambios de estructura semántica ni controles nuevos.

## Exclusiones

- No se modifica el contenido de Trabajos seleccionados de Inicio ni las fichas de proyecto.
