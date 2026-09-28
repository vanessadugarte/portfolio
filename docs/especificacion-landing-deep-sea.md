# Especificación: landing de Deep Sea

## Objetivo

Incorporar una landing localizada para Deep Sea que muestre la ilustración final, dos referencias de inspiración, cuatro bocetos de proceso, detalles y una paleta horizontal junto a las referencias.

## Alcance y flujo

Al abrir `#/proyectos/deep-sea`, la persona encuentra la ficha del proyecto, una sección de referencias con `inspo-1` e `inspo-2` y, en escritorio, las dos ilustraciones finales. La paleta de seis colores se muestra en horizontal junto a esas referencias, como en Medusas. Después puede recorrer los cuatro bocetos de la galería de proceso antes de llegar a los detalles. En móvil y tablet se prioriza la segunda ilustración, de proporción vertical, antes del resto del contenido.

## Criterios de aceptación

- Desde el punto de quiebre de escritorio, la cabecera muestra `finalwork-deepsea.jpg` (1200 × 891 px) y `complete-work-deepsea.jpg` (1200 × 1618 px) lado a lado, sin recorte ni deformación.
- En móvil y tablet se muestra únicamente `complete-work-deepsea.jpg`, la ilustración de proporción vertical, a ancho disponible y sin deformación.
- En escritorio, una línea divisora separa las imágenes principales de la sección de referencias (punto 02).
- La ficha técnica presenta el año `2017`, la técnica «Ilustración digital» y las herramientas «Photoshop, Illustrator, Wacom Tablet», con etiquetas localizadas en español e inglés.
- En escritorio, la copia derecha de `adorno-deepsea.png` rota 90° hacia la izquierda, comienza junto al límite inferior de la navegación y queda pegada al borde derecho del viewport; no recibe foco ni se expone a tecnologías de asistencia.
- La sección de referencias carga `inspo-1.jpg` e `inspo-2.jpg`, ambas con alternativas localizadas en español e inglés.
- La paleta presenta los siete tonos marinos y luminosos de la pieza en disposición horizontal junto a las referencias en escritorio. Cada muestra circular muestra únicamente su código hexadecimal debajo.
- La galería de proceso presenta `sketch-0-deep-sea.jpg` como primera imagen a la izquierda, seguida de `sketch-deepsea-1.jpg`, `sketch-deepsea-2.jpg` y `sketch-deepsea-3.png` como cuarta y última imagen.
- Las cuatro piezas del proceso ocupan tarjetas cuadradas del mismo tamaño, sin deformación.
- La galería de detalles contiene las cuatro imágenes `detail-deepsea-*.jpg`.
- Todo texto e imagen informativa cuenta con contenido localizado en español e inglés.
- La página no provoca desplazamiento horizontal a 320 px y conserva el orden de foco existente.

## Requisitos no funcionales

- Reutilizar la estructura semántica, los componentes y tokens Sass del detalle de proyecto.
- Mantener las imágenes decorativas fuera del árbol de accesibilidad y proporcionar alternativas útiles a las imágenes informativas.

## Exclusiones

- Modificar la presentación de Medusas, Donas 3D u otros proyectos.

## Validación

- `npm run lint` y `npm run build` finalizan correctamente.
- Comprobación visual en Chromium a 390 px, 768 px y 1280 px, incluyendo únicamente la ilustración vertical en móvil y tablet, las dos ilustraciones en escritorio, la rama derecha rotada y pegada al borde del viewport en escritorio, las cuatro tarjetas de proceso del mismo tamaño, proporción de la obra, referencias y paleta horizontal, ausencia de desbordamiento horizontal y foco del enlace de retorno.
