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
3. Se muestran 24 piezas (21 imágenes y 3 animaciones), sin recortes de contenido. Ventti contiene seis piezas: se retira de la galería el primer vídeo, «Nueva tienda online», y permanece «Botines con flecos». Laura Constanza contiene seis imágenes: se retiran `laura-constanza-boots.webp` y el vídeo «Botines Cora», con sus textos en ES/EN. Los archivos originales se conservan.
4. Las animaciones parten detenidas, muestran una portada y permiten reproducir y pausar mediante teclado y controles nativos.
5. La ruta anterior redirige sin romper el contexto, y funcionan las rutas directas, el historial y el cambio de idioma.
6. Se conserva un `main`, un `h1`, encabezados de marca `h2`, títulos de documento y foco de navegación existentes, alternativas útiles y foco visible.
7. No hay desbordamiento horizontal a 320 CSS px; el título mide 5rem desde escritorio y la descripción/ficha técnica respetan los tokens existentes.
8. Pasan `npm run build`, `npm run lint` y las pruebas de contenido pertinentes.
9. La ficha técnica muestra los datos confirmados por Vanessa: año 2015–2016, software Photoshop y formato Instagram posts y GIFs, con etiquetas y formato localizados en español e inglés.
10. Al abrir la ficha en cualquier idioma, los datos técnicos usan el componente compartido de chips de los otros proyectos: iconos decorativos, etiquetas accesibles, bordes redondeados y espaciado común. Los chips se ajustan a 320 CSS px y conservan la columna con separador en escritorio. Este ajuste no modifica los datos ni las galerías.
11. La cabecera sigue el tratamiento gráfico de ilustración: sin rótulo de categoría sobre el título ni margen superior adicional después de la navegación, con la familia, peso e interletrado compartidos y la escala de título de ilustración en móvil/tablet; en escritorio conserva 5rem. Se mantienen los chips y las columnas de descripción/ficha técnica, sin añadir numeración al proyecto. Se comprueba el reflujo a 320 CSS px en ES/EN.

## Requisitos no funcionales

- React, React Router y Sass; reutilizar navegación, tokens y metadatos existentes.
- Optimizar derivados para web sin modificar los archivos fuente aportados. Imágenes con dimensiones explícitas y carga diferida; vídeos sin descarga anticipada del contenido.
- Validación de accesibilidad y responsive limitada a la nueva ficha, la redirección y sus entradas; documentar herramientas, resultados y limitaciones.

## Exclusiones

No se crean fichas por marca, filtros, ampliadores, nuevos enlaces a redes sociales, ni auditoría global. No se publicará en producción ni se fusionará el PR como parte de este cambio.
