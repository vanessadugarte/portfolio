# Especificación: navegación entre proyectos

## Objetivo

Permitir que los enlaces «Anterior» y «Siguiente» recorran los proyectos dentro del listado desde el que se abrió la ficha.

## Alcance

- Simplificar las etiquetas en español a «Anterior» y «Siguiente».
- Conservar en la URL el contexto de listado: una categoría o «Todo».
- Navegar por el orden interno de una categoría o, en «Todo», por el orden de las categorías del menú.
- Mantener etiquetas accesibles que incluyan el título del proyecto de destino.

## Flujo de usuario

Al abrir un proyecto desde una categoría, puede avanzar o retroceder solo entre los proyectos de esa categoría. Al abrirlo desde «Todo», puede recorrer primero todos los proyectos de la primera categoría del menú, después los de la siguiente, y así sucesivamente.

## Criterios de aceptación

- Los controles visibles en español muestran «Anterior» y «Siguiente».
- Los enlaces de una ficha abierta desde una categoría no salen de esa categoría.
- Los enlaces de una ficha abierta desde «Todo» respetan el orden de `projectCategories`.
- Al recargar una ficha, se mantiene el contexto de navegación indicado en su URL.
- Los enlaces conservan nombre accesible, foco visible y operación con teclado.

## Requisitos no funcionales

- La solución conserva la fuente única del catálogo y de las categorías.
- La URL no expone textos localizados ni duplica contenido.

## Exclusiones

- No se modifican las rutas base ni el diseño visual de las fichas.
