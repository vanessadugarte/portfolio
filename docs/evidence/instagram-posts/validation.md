# Validación de Diseño para Instagram

Especificación: [Diseño para Instagram](../../especificacion-instagram-posts.md).

## Resultado

La colección muestra actualmente 24 piezas de cuatro marcas: 21 imágenes WebP y tres animaciones MP4 con portadas estáticas y controles nativos. Ventti contiene seis piezas tras retirar «Nueva tienda online». Laura Constanza contiene seis imágenes tras retirar `boots` y el vídeo `cora`. Los archivos originales y derivados se conservan; la miniatura suministrada mantiene su derivado de 173.046 bytes.

## Comprobaciones iniciales (versión de 27 piezas)

Entorno: macOS, Google Chrome 157.0.8103.78 mediante Playwright, Vite local y comprobación adicional sobre la compilación de producción con `vite preview`.

| Criterio | Comprobación | Resultado |
| --- | --- | --- |
| Entradas y portada | Inicio, catálogo y categoría Diseño gráfico | Título localizado y miniatura nuevos; mantiene la cuarta posición destacada |
| Marcas y piezas | Prueba de contenido, DOM e inspección visual | Cuatro secciones visibles; 27 piezas, proporciones completas; todos los archivos resuelven |
| Animaciones | Estado inicial, decodificación y teclado en Chrome | Cinco vídeos detenidos, sin autoplay y con `preload="none"`; los cinco decodifican; Tab alcanza el primero y Espacio reproduce/pausa; Tab/Shift+Tab salen y regresan |
| Rutas | Navegación directa a `/proyectos/ventti?categoria=all`, categoría, historial | Redirige a `/proyectos/instagram-posts?categoria=all`; atrás/adelante y retorno a categoría funcionan |
| Idiomas y semántica | DOM, árbol de accesibilidad y cambio ES/EN | Un main, un h1 y cuatro h2; título de documento, lang, alternativas y nombres de vídeos localizados; foco en h1 después de navegación SPA |
| Responsive | 320, 768 y 1440 CSS px | Una, dos y tres columnas; sin desbordamiento horizontal; h1 de 80 px en escritorio |
| Ampliación y espaciado | Texto al 200 %, reflujo a 720 px equivalente a ventana de 1440 px al 200 %, espaciado de texto WCAG | Sin desbordamiento horizontal; se conserva el contenido |
| Movimiento reducido | Contexto `prefers-reduced-motion: reduce` | Todas las animaciones permanecen detenidas hasta la interacción |
| Accesibilidad automática | axe-core, etiquetas WCAG 2 A/AA, 2.1 A/AA y 2.2 AA, limitada a la ficha, ES/EN | Cero infracciones; comprobaciones manuales pendientes del escáner resueltas abajo |
| Calidad | `npm run build`, `npm run lint`, `npm run test:content` | Compilación y lint correctos; 22 pruebas de contenido correctas |

Resultados de navegador: [browser-checks.json](browser-checks.json). Capturas: [escritorio](desktop.png), [móvil](mobile.png), [Urban Burgess](urban-burgess.png).

## Revisión manual y límites

- Se inspeccionaron las publicaciones originales y muestras de los fotogramas de los GIFs para redactar alternativas y descripciones de las cinco secuencias. Los vídeos se generaron sin pista de audio; las descripciones visibles asociadas ofrecen la alternativa al contenido visual. El aviso manual de axe `video-caption` no corresponde a audio hablado pendiente de subtitular.
- axe no resolvió automáticamente el contraste de las flechas decorativas de navegación. Usan `#151515` sobre `#f6f4ed`, contraste calculado de 16,59:1. Están ocultas a tecnologías de asistencia y acompañan enlaces con texto.
- Se revisaron las capturas de escritorio y móvil, con imágenes completas y legibilidad de los textos de interfaz. El texto dentro de las piezas forma parte del trabajo gráfico original y tiene alternativas descriptivas.
- La comprobación de ampliación usa tamaño de texto y ancho de reflujo equivalentes; no es una prueba del comando de zoom de la interfaz de Chrome. No se probó con lector de pantalla real, Safari ni dispositivos físicos. El árbol accesible y axe no demuestran conformidad WCAG completa.
- Vite informa un aviso no bloqueante por el bundle JavaScript superior a 500 kB. No se modifica la estrategia global de carga en este alcance.
- No se realizó auditoría global ni se actualizó la matriz del issue #30.

## Ajuste de chips de la ficha técnica — 2026-11-16

- Se extrae `ProjectFacts` sin cambiar su marcado para compartirlo entre Instagram y las demás fichas; se elimina la excepción Sass que quitaba bordes, redondeado y espaciado.
- Navegador integrado de Codex, inspección visual y DOM: chips comprobados a 320 y 1440 CSS px; a 320 px el documento mide 320 px de ancho en ES y EN. En escritorio se conserva el separador vertical.
- Árbol de accesibilidad: lista de definiciones con Año/Year, Software y Formato/Format; los tres iconos decorativos tienen `aria-hidden="true"`. Se mantienen los estilos comunes de texto. No se añaden controles ni cambios de foco; no se realizó una auditoría global ni una prueba con lector de pantalla.
- `npm run build`, `npm run lint` y las 22 pruebas de `npm run test:content` pasan. Persiste el aviso previo de tamaño del bundle.

## Cabecera de ilustración y selección de Ventti — 2026-11-16

- La cabecera elimina el rótulo de categoría y el margen superior adicional; usa la tipografía compartida y la escala de ilustración para móvil/tablet, conservando 80 px en escritorio. Continúan los chips y el separador de la ficha técnica.
- Se retiran la pieza `new-shop` y sus textos ES/EN del catálogo visible, conservando los archivos. Ventti muestra seis piezas y solo el vídeo `fringe`; la colección tiene 26 piezas y cuatro vídeos. Las pruebas de contenido verifican estos recuentos y la correspondencia de traducciones.
- Navegador integrado de Codex, inspección visual, DOM y árbol de accesibilidad: un h1; título de 80 px a 1440 CSS px y de 40 px a 320 CSS px; margen superior de la cabecera de 0 px. Documento sin desbordamiento horizontal a 320 CSS px en ES/EN. Se mantienen las etiquetas de los chips y los nombres y descripciones localizados de los vídeos restantes.
- Pasan build, lint y las 22 pruebas de contenido. El cambio conserva los controles nativos y no altera su implementación; la revisión se limita a cabecera y selección de medios, sin auditoría global ni lector de pantalla real.

## Selección de Laura Constanza — 2026-11-17

- Se retiran de la galería `boots` y el vídeo `cora`, junto con sus textos ES/EN; quedan seis imágenes en Laura Constanza y 24 piezas en la colección (21 imágenes y tres vídeos). Se conservan los archivos fuente.
- Navegador integrado de Codex, inspección del DOM: seis imágenes con alternativas descriptivas en la sección y cero vídeos; ausentes las dos piezas retiradas. La prueba de contenido comprueba la selección exacta y la correspondencia ES/EN. No se modifica el estilo ni la implementación de los controles; no se repite la auditoría global ni se prueba con lector de pantalla.
- Pasan `npm run build`, `npm run lint` y las 22 pruebas de contenido. Persiste el aviso previo del tamaño del bundle.

## Derivados de medios

Los originales están en `src/assets/images/projects/graphic-design/instagram posts/`; los derivados en su subcarpeta `web/`. Imágenes convertidas con Pillow a WebP, calidad 85 (80 para la miniatura), conservando dimensiones. GIFs convertidos mediante FFmpeg a H.264/MP4, sin audio, CRF 22, `yuv420p` y `faststart`. La portada de Cora usa el último fotograma para mostrar el conjunto completo; las demás usan el primero.
