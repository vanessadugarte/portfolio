# Especificación: landing de Deep Sea

## Objetivo

Incorporar una landing localizada para Deep Sea que muestre la ilustración completa, dos referencias de inspiración, cuatro bocetos de proceso, detalles y una paleta de ocho tonos integrada a la composición principal en escritorio.

## Alcance y flujo

Al abrir `#/proyectos/deep-sea`, la persona encuentra la ficha del proyecto y, en escritorio, una composición similar a la de Pantano: la ilustración completa y el bloque compacto de paleta se agrupan en el centro, dejando el espacio libre a ambos lados; el bloque presenta primero la paleta y después las referencias `inspo-1` e `inspo-2`. Después puede recorrer los cuatro bocetos de la galería de proceso antes de llegar a los detalles. En móvil y tablet se conserva la secuencia vertical del contenido.

## Criterios de aceptación

- Desde el punto de quiebre de escritorio, la cabecera muestra únicamente `complete-work-deepsea.jpg` (1200 × 1618 px), completa, sin recorte ni deformación y sin máscara orgánica.
- En móvil y tablet se muestra únicamente `complete-work-deepsea.jpg`, la ilustración de proporción vertical, a ancho disponible y sin deformación.
- En escritorio, las dos referencias se ubican al lado de la ilustración completa dentro de la composición principal, debajo de la paleta, con el mismo tratamiento compacto de Pantano y alineadas a la izquierda con el título «Paleta de color».
- En escritorio, la ilustración y el bloque de paleta quedan centrados como conjunto y próximos entre sí, con el espacio restante distribuido a ambos lados de la composición.
- La ficha técnica presenta el año `2017`, la técnica «Ilustración digital» y las herramientas «Photoshop, Illustrator, Wacom Tablet», con etiquetas localizadas en español e inglés.
- En escritorio, la copia derecha de `adorno-deepsea.png` rota 90° hacia la izquierda, comienza junto al límite inferior de la navegación y queda pegada al borde derecho del viewport; no recibe foco ni se expone a tecnologías de asistencia.
- El bloque de referencias carga `inspo-1.jpg` e `inspo-2.jpg`, ambas con alternativas localizadas en español e inglés; su título no lleva número ni texto descriptivo.
- La paleta presenta ocho tonos marinos y luminosos antes de las referencias. En escritorio se distribuye en dos filas de cuatro muestras, como la ficha de Pantano; en tamaños menores conserva su ajuste responsive. Cada muestra circular muestra únicamente su código hexadecimal debajo.
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
- Comprobación visual en Chromium a 390 px, 768 px y 1280 px, incluyendo la secuencia vertical en móvil y tablet; en escritorio, una única ilustración completa sin máscara junto al bloque compacto con paleta superior y referencias inferiores sin numeración; además de la rama derecha rotada, las cuatro tarjetas de proceso del mismo tamaño, ausencia de desbordamiento horizontal y foco del enlace de retorno.
