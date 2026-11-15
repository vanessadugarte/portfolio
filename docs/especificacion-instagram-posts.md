# Diseño para Instagram

## Objetivo

Convertir la ficha pendiente de Ventti en una colección de diseño para Instagram, con las piezas aportadas por Vanessa y una sección por marca que se recorre sin abrir otras fichas.

## Alcance y flujo

- Sustituir Ventti por «Diseño para Instagram» en inicio, catálogo, diseño gráfico y navegación entre proyectos, usando la miniatura `rrss-thumbnail.webp` suministrada.
- Abrir una única ficha en `/proyectos/instagram-posts`, con introducción y bloques consecutivos de Ventti, Diva Approved, Urban Burgess y Laura Constanza.
- Mostrar las publicaciones completas, con proporciones originales, y las animaciones con controles nativos y sin reproducción automática.
- Mantener `/proyectos/ventti` como redirección a la nueva ficha, conservando el contexto de categoría.
- Mantener contenido y alternativas en español e inglés. Los textos describen las piezas; no atribuyen fechas, herramientas, resultados ni responsabilidades no confirmadas.

## Criterios de aceptación

1. La miniatura nueva y el título aparecen en todas las entradas al proyecto; conserva su posición entre los trabajos destacados.
2. Las cuatro marcas tienen encabezado y galería visibles en una misma página, sin pestañas, acordeones ni navegación adicional para ver las piezas.
3. Se incluyen las 27 piezas suministradas (22 imágenes y 5 animaciones), sin recortes de contenido.
4. Las animaciones parten detenidas, muestran una portada y permiten reproducir y pausar mediante teclado y controles nativos.
5. La ruta anterior redirige sin romper el contexto, y funcionan las rutas directas, el historial y el cambio de idioma.
6. Se conserva un `main`, un `h1`, encabezados de marca `h2`, títulos de documento y foco de navegación existentes, alternativas útiles y foco visible.
7. No hay desbordamiento horizontal a 320 CSS px; el título mide 5rem desde escritorio y la descripción/ficha técnica respetan los tokens existentes.
8. Pasan `npm run build`, `npm run lint` y las pruebas de contenido pertinentes.

## Requisitos no funcionales

- React, React Router y Sass; reutilizar navegación, tokens y metadatos existentes.
- Optimizar derivados para web sin modificar los archivos fuente aportados. Imágenes con dimensiones explícitas y carga diferida; vídeos sin descarga anticipada del contenido.
- Validación de accesibilidad y responsive limitada a la nueva ficha, la redirección y sus entradas; documentar herramientas, resultados y limitaciones.

## Exclusiones

No se crean fichas por marca, filtros, ampliadores, nuevos enlaces a redes sociales, ni auditoría global. No se publicará en producción ni se fusionará el PR como parte de este cambio.
