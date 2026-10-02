# Especificación: galería Snapchat Frames

## Objetivo

Completar la ficha bilingüe de Snapchat Frames como una galería de marcos creados para la promoción del videojuego Muchokids sobre nacionalidades.

## Alcance

- Conservar la ruta `/proyectos/snapchat-frames` y su ubicación en Ilustración.
- Mostrar 18 marcos verticales: China, Países Bajos, Irlanda, México, temática árabe, Cuba, Egipto, Inglaterra, Francia, India, Italia, Muchokids, Rusia, España, Estados Unidos, Alemania, Suecia y Corea del Sur.
- Mostrar el nombre localizado encima de cada marco y aplicar una sombra sutil a cada imagen para delimitar visualmente su caja.
- Mostrar, debajo de la galería de marcos, los 13 elementos ilustrados aislados proporcionados, reunidos en una composición editorial que evidencie los componentes de los marcos.
- Usar en esa sección el encabezado «02 Elementos de las composiciones» con la convención visual compartida de los `h2` de fichas de proyecto: número visible, texto negro, tipografía y escala de sección.
- Presentar solamente los marcos completos en una galería, sin atribuirles un proceso de creación ni una obra principal.
- Explicar que la persona se sitúa en el espacio libre del marco, bajo el sombrero, tocado o accesorio ilustrado cuando corresponde; el marco de marca Muchokids utiliza un centro libre para la foto.
- Mostrar una ficha técnica con año 2017, técnica de ilustración digital y herramientas Photoshop, Illustrator y Wacom Bamboo, en etiquetas como las demás fichas completas.
- Usar la tipografía compartida de las fichas para el título; «Snapchat» lleva fucsia y «Frames» turquesa.
- Incluir textos, nombres y alternativas de imagen en español e inglés.

## Flujo de usuario

1. La persona abre la ficha desde Ilustración o la navegación entre proyectos.
2. Lee el contexto, la ficha técnica y los 18 marcos completos con sus nombres.
3. Vuelve a Ilustración o navega al proyecto anterior o siguiente.

## Criterios de aceptación

- La ficha deja de mostrar «Próximamente» / «Coming soon», tiene un único `h1` y conserva el título de documento y el foco de entrada de ruta.
- Se cargan los 18 JPG completos con su proporción vertical, sin recortar ninguna composición en la galería principal.
- No aparecen secciones de Detalles, Proceso o Referencias ni una imagen principal.
- Cada marco tiene nombre y alternativa útil y localizada.
- El nombre de cada marco aparece inmediatamente antes de su imagen y los 18 marcos muestran la misma sombra sutil, sin alterar su proporción ni recortar su contenido.
- La sección de elementos aislados contiene los 13 SVG proporcionados, con encabezado, descripción y alternativas localizadas; en escritorio el texto ocupa la primera fila y los 13 elementos se presentan sin tarjetas en una única fila debajo. En pantallas estrechas, el contenido se apila y los elementos se ajustan sin desborde.
- El encabezado de elementos aislados muestra el número decorativo «02» y reutiliza los estilos del `h2` de las secciones de ficha, sin aplicar el color de acento ni mayúsculas forzadas.
- La ficha técnica presenta los tres datos proporcionados con etiquetas visuales de borde e iconos; los nombres localizados en español e inglés quedan asociados a los valores para tecnologías de asistencia.
- Todas las fichas completas reutilizan el mismo componente de datos técnicos y muestran cada dato en una etiqueta compacta sin perder la relación entre término y definición.
- El contenido se adapta a 320 CSS px sin desplazamiento horizontal; los enlaces existentes siguen funcionando con teclado.
- El cambio de idioma sincroniza contenido, `html[lang]`, título del documento y alternativas.

## Requisitos no funcionales

- Mantener React, la estructura de rutas y Sass del proyecto.
- Reutilizar navegación y componentes compartidos de las fichas de proyecto.
- Cargar de forma diferida las imágenes bajo el primer marco y evitar animación innecesaria.

## Exclusiones

- No añadir una simulación interactiva de Snapchat ni cámara.
- No crear imágenes principales, imágenes de proceso ni datos no proporcionados.
- No modificar el orden del catálogo ni el contenido de las otras fichas.

## Validación

- `npm run test:content`, `npm run lint`, `npm run build` y `git diff --check`: correctos.
- Navegador integrado de Codex (Chromium): a 320 y 1280 CSS px la ficha muestra 18 imágenes, sin el marco de Canadá ni desplazamiento horizontal. La comprobación previa de la galería confirmó una, dos y tres columnas a 320, 768 y 1280 CSS px respectivamente.
- La ruta directa muestra el título de documento y `html[lang]` del idioma activo. En español e inglés se verificaron el recuento de 18 marcos y la ausencia de Canadá; el cambio de idioma actualiza los textos. Al abrir la tarjeta desde Ilustración, el foco llega al `h1` sin desplazar la página, según la comprobación anterior de la navegación compartida.
- Navegador integrado de Codex (Chromium): la ficha técnica expone año, técnica y herramientas como términos y definiciones; sus datos y etiquetas aparecen en español e inglés. A 320 y 1280 CSS px no provoca desplazamiento horizontal y la ruta conserva un único `main` y `h1`.
- Navegador integrado de Codex (Chromium): a 320 y 1280 CSS px, los tres datos de Snapchat Frames se muestran en etiquetas compactas con borde y sin desbordamiento horizontal. Se comprobó también Donas en ambos anchos y Medusas con sus iconos y términos accesibles.
- Navegador integrado de Codex (Chromium): a 320 y 1280 CSS px, los 18 nombres aparecen antes de sus imágenes y todas las imágenes comparten una sombra sutil; no se detectó desplazamiento horizontal.
- La revisión de accesibilidad se limitó al contenido informativo, reflujo, idioma y foco de la ruta modificada. No se realizó una auditoría WCAG global ni un escaneo automático porque se reutilizan los controles y la navegación existentes.
