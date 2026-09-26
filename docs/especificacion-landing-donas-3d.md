# Especificación: landing de Donas 3D

## Objetivo

Incorporar una landing localizada para el proyecto Donas 3D que presente sus assets, contexto y proceso de creación.

## Alcance y flujo

Al abrir `#/proyectos/donas-3d`, la persona encuentra una portada, ficha técnica, paleta de color y galerías de proceso y detalles. La landing reutiliza la composición responsive y la navegación entre proyectos de Medusas. No se muestra la sección de referencias ni inspiración. Sprinkles decorativos, con opacidad, se distribuyen por el fondo sin alterar el contenido ni la interacción.

## Criterios de aceptación

- La ruta muestra el año 2024, Blender y las disciplinas de modelado, iluminación, textura y renderizado.
- En la ficha técnica, cada etiqueta y su valor se leen juntos en una misma línea, por ejemplo «Herramientas: Blender».
- Las etiquetas de la ficha técnica, como «Año», «Técnica» y «Herramientas», se muestran en negrita y sus valores conservan el peso regular.
- La portada, cuatro imágenes de proceso, dos vistas ampliadas de modelado y cuatro detalles se cargan desde `src/assets/images/projects/3d/3d-donuts`.
- La paleta con los seis colores proporcionados se muestra antes del paso 02.
- En tablet y escritorio, la ilustración final de la portada ocupa todo el ancho disponible dentro del contenedor, respetando sus márgenes laterales; en móvil conserva el ancho contenido y responsive.
- Las galerías se presentan como pasos 02 y 03, sin un paso ni una columna de inspiración.
- En el paso 02, `modelado-1` y `modelado-2` se muestran debajo de las cuatro imágenes de proceso: en tablet abarcan las dos columnas y en escritorio cada una abarca dos imágenes de la fila superior.
- Los sprinkles de fondo usan los colores de la paleta, tienen una presencia visible, tamaño bajo y se organizan en pequeños grupos compactos; permanecen decorativos y no reciben foco ni eventos de puntero.
- La información, los títulos de imagen y metadatos se localizan en español e inglés.
- La composición no genera desplazamiento horizontal a 320 px y conserva las rutas, foco y navegación existentes.

## Requisitos no funcionales

- Reutilizar componentes, tokens Sass y patrones semánticos existentes.
- Las imágenes informativas deben tener texto alternativo localizado; las decoraciones deben permanecer ocultas a tecnologías de asistencia.

## Exclusiones

- Crear referencias o inspiración para el proyecto.
- Modificar el contenido visual o la landing de Medusas.

## Validación

- `npm run lint` y `npm run build` deben finalizar correctamente.
- Se comprobará la ruta a 390 px y 1280 px en Chromium, incluyendo la ausencia de desplazamiento horizontal y el orden de foco del enlace de retorno.
