# Especificación: Muchokids Nationalities

## Objetivo

Completar la ficha del proyecto de rostros infantiles de Muchokids y mostrar sus ilustraciones como trabajo terminado.

## Alcance

- Presentar el personaje de Brasil con contorno blanco sobre el fondo ilustrado de Río de Janeiro y ubicar tres banderas circulares decorativas alrededor de la composición.
- Mostrar quince personajes en una galería con el nombre de su país. La tercera fila incorpora India, Emiratos Árabes Unidos, una segunda ilustración de Países Bajos, Reino Unido y Canadá.
- Introducir la galería con el titular localizado «01 Personajes», siguiendo la tipografía de los títulos de sección.
- Mostrar los personajes directamente sobre el fondo crema, sin tarjetas, bordes ni rellenos individuales.
- Explicar brevemente que los rostros se inspiraron en trajes típicos de distintos países para la app de videojuego infantil e interactivo Muchokids.
- Mostrar una ficha técnica localizada: ilustración digital, 2017 e Illustrator, Photoshop y Wacom Tablet.
- Localizar título, texto, nombres y alternativas de imágenes en español e inglés.

## Flujo de usuario

La persona abre la ficha desde Ilustración, ve el título y el personaje de Brasil, lee el contexto breve y recorre los demás rostros. Puede volver a la categoría o navegar a los proyectos vecinos.

## Criterios de aceptación

- La ruta `/proyectos/muchokids-nationalities` muestra un único `h1`, el personaje de Brasil con contorno blanco delante del fondo de Río de Janeiro y quince SVG en la galería, sin duplicar a Brasil.
- El fondo queda detrás de la cara, se adapta con ella al ancho disponible y no se anuncia como imagen independiente; la alternativa del conjunto describe el personaje y la escena.
- El paisaje de Brasil se muestra más grande y su borde inferior llega a la línea que separa la cabecera de la galería, sin producir desplazamiento horizontal.
- La cara queda ligeramente más baja sobre el paisaje, sin el rótulo visible «Brasil»; las tres banderas circulares la acompañan y permanecen fuera del contenido accesible.
- En escritorio, la cara desciende más sobre las montañas del fondo; la posición en tablet y móvil se conserva.
- En escritorio, la ficha comienza inmediatamente después de la navegación y la cabecera no reserva altura vacía por encima de la composición; el espacio inferior conserva la superposición de la cara sin cruzar la línea de la galería.
- Cada rostro tiene una alternativa útil y un nombre localizado visible.
- La cabecera muestra la ficha técnica con técnica, año y herramientas en español e inglés.
- Antes de la cuadrícula aparece un `h2` negro y localizado; usa la misma tipografía y tamaño que «Proceso» y en inglés muestra «01 Characters».
- Los personajes no tienen tarjetas, bordes, rellenos ni espaciado interno individuales.
- No aparecen bloques de proceso, detalles ni contenido pendiente.
- La composición se adapta a móvil, tablet y escritorio sin desplazamiento horizontal.
- La galería usa una columna en móvil, tres en tablet y cinco en escritorio; en escritorio hay tres filas completas.
- El título de documento, el idioma y el foco de navegación SPA conservan el comportamiento existente.

## Requisitos no funcionales

- Conservar React, Vite, Sass, los controles de navegación y la accesibilidad WCAG 2.2 A/AA del sitio.
- Cargar la galería de forma diferida y reservar el espacio de las imágenes mediante sus dimensiones.

## Exclusiones

- No crear imágenes nuevas ni atribuir fechas, herramientas o etapas de trabajo que no se han documentado.
- No modificar el contenido de las otras fichas de proyecto.

## Validación

- `npm run build`, `npm run lint`, `npm run test:content` y `git diff --check`: correctos.
- Navegador integrado de Codex (Chromium): galería de 1 columna a 320 CSS px, 3 a 768 CSS px y 5 a 1280 CSS px; `scrollWidth` coincide con el ancho del viewport en los tres tamaños. Los quince personajes forman tres filas completas en escritorio y las cinco imágenes nuevas cargan.
- Inspección de estructura accesible en Chromium: un único `h1`, quince figuras de galería con nombre y alternativa en español y una imagen principal con alternativa útil; los cinco nombres y alternativas nuevos cambian a inglés junto con el título de documento y `html[lang]`.
- Navegador integrado de Codex (Chromium): el nuevo fondo y la cara con contorno blanco cargan y se superponen en móvil (320 CSS px), tablet (768 CSS px) y escritorio (1280 CSS px), sin desbordamiento horizontal. El fondo tiene alternativa vacía y está oculto a tecnologías de asistencia; la alternativa de la cara describe también el paisaje en español e inglés.
- Navegador integrado de Codex (Chromium): el paisaje ampliado mide 320, 640 y 634 CSS px en esos tres tamaños, respectivamente; su borde inferior coincide con la línea divisoria. No aparece desplazamiento horizontal.
- Navegador integrado de Codex (Chromium): la cara se superpone más abajo en el paisaje, el rótulo visible «Brasil» desaparece y las tres banderas decorativas rodean la escena en móvil, tablet y escritorio. La imagen principal conserva su alternativa en español e inglés y el grupo de banderas tiene `aria-hidden="true"`.
- Navegador integrado de Codex (Chromium): a 1024 y 1280 CSS px la cara desciende sobre las montañas sin cruzar la línea divisoria; la bandera izquierda queda separada del párrafo. A 320 y 768 CSS px se conserva la posición previa de la cara y no hay desplazamiento horizontal.
- Limitación: no se ejecutó lector de pantalla ni escáner automático; la revisión cubrió la estructura, los textos y el reflujo modificados, no una auditoría global.
