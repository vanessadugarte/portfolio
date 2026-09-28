# Especificación: máscara orgánica de la ilustración de Medusas

## Objetivo

Presentar la ilustración final ubicada al inicio del proyecto Medusas dentro de una forma orgánica, en coherencia con la identidad visual del portafolio.

## Alcance

- Aplicar una máscara de recorte SVG únicamente a la ilustración final principal de Medusas.
- Usar una silueta asimétrica, más redondeada y próxima a los bordes de la obra para conservar una mayor parte de la ilustración.
- Reducir en escritorio el espacio vertical entre el resumen y la ilustración.
- Reutilizar el mecanismo de máscaras orgánicas de las páginas de proyecto.
- Mantener la imagen, su texto alternativo y su comportamiento responsive actuales.

## Flujo de usuario

1. La persona abre la página de detalle de Medusas.
2. Después del resumen del proyecto, ve la ilustración final recortada con un contorno orgánico.
3. La composición se adapta al ancho disponible en móvil, tablet y escritorio.

## Criterios de aceptación

- La ilustración final inicial de Medusas muestra un contorno orgánico en navegadores compatibles con máscaras CSS.
- El contorno evita una apariencia ovalada regular y mantiene visible a la figura principal.
- La máscara de la obra principal de Medusas conserva visualmente una mayor superficie de la ilustración que la silueta vertical anterior, sin perder su contorno orgánico.
- En escritorio, la ilustración queda visualmente más próxima al resumen que en la versión anterior.
- La máscara utiliza un recurso SVG local y no modifica el archivo original de la ilustración.
- El texto alternativo de la imagen se conserva.
- Las demás imágenes y páginas de proyecto no cambian.
- `npm run build` y `npm run lint` finalizan correctamente.

## Requisitos no funcionales

- Mantener React, Vite y Sass como base del proyecto.
- Conservar el escalado responsive y la proporción intrínseca de la imagen.
- Incluir la variante `-webkit-mask-*` para compatibilidad con Safari.

## Exclusiones

- No se rediseñan el encabezado, la galería, la paleta ni las imágenes de proceso de Medusas.
- No se agregan animaciones ni nuevos recursos gráficos.
