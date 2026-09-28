# Especificación: ancho de etiquetas de ficha técnica

## Objetivo

Evitar que las etiquetas de la ficha técnica ocupen más ancho que el requerido por su contenido en pantallas pequeñas.

## Alcance

- Mantener las etiquetas de año, técnica y herramientas ajustadas a su contenido cuando haya espacio disponible.
- Aplicar la misma regla a la etiqueta de herramientas, sin forzarla a ocupar toda la fila en móvil.

## Flujo de usuario

Al consultar una ficha de proyecto desde un móvil, la persona ve cada dato técnico como una etiqueta compacta. La etiqueta de herramientas conserva el mismo comportamiento que las demás y se ajusta a su texto.

## Criterios de aceptación

- En anchos menores al punto de quiebre de tablet, ninguna etiqueta de la ficha técnica recibe un ancho completo por su posición en la lista.
- Las etiquetas conservan el ajuste al contenido, el límite de ancho disponible y el salto de texto existente para evitar desbordamiento horizontal.
- La semántica de la lista de definiciones y los nombres accesibles de los datos no cambian.

## Requisitos no funcionales

- El ajuste usa Sass y conserva el diseño responsive existente.
- No se añaden controles, contenido ni cambios de interacción; no requiere una auditoría WCAG adicional.

## Exclusiones

- No se modifica el contenido ni el orden de los datos técnicos.
- No se rediseñan las etiquetas ni se alteran los estilos de escritorio.

## Validación

- `npm run lint` y `npm run build` finalizan correctamente.
- Navegador integrado (Chromium), ruta `#/proyectos/jungle` a 390 px: año, técnica y herramientas se muestran como etiquetas de ancho ajustado, sin desbordamiento horizontal.
