# Especificación: enlaces de trabajos seleccionados

## Objetivo

Aplicar el color `#344A91` a los enlaces «Ver proyecto» de las tarjetas de Inicio y hacer visible su estado interactivo.

## Alcance

- Actualizar los cuatro enlaces de la sección de trabajos seleccionados mediante su estilo compartido.
- Mantener su destino actual.

## Flujo de usuario

La persona recorre los trabajos seleccionados y, al pasar el cursor sobre «Ver proyecto» o enfocarlo con el teclado, ve el enlace subrayado antes de abrirlo.

## Criterios de aceptación

- Los enlaces se muestran en `#344A91` sin subrayado en reposo.
- En hover y foco visible, el texto conserva `#344A91` y aparece subrayado con el mismo color.
- `npm run lint` y `npm run build` finalizan correctamente.

## Requisitos no funcionales

- Reutilizar el token Sass existente para `#344A91` y conservar un foco perceptible.

## Exclusiones

- Cambios en el contenido, las tarjetas o los destinos de los enlaces.
