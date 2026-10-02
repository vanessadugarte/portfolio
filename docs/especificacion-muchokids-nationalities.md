# Especificación: Muchokids Nationalities

## Objetivo

Completar la ficha del proyecto de rostros infantiles de Muchokids y mostrar sus ilustraciones como trabajo terminado.

## Alcance

- Presentar el personaje de Brasil como imagen principal y usar su bandera SVG como adorno cerca del título.
- Mostrar los ocho personajes restantes en una galería con el nombre de su país; Australia completa la segunda fila en escritorio.
- Explicar brevemente que los rostros se inspiraron en trajes típicos de distintos países para la app de videojuego infantil e interactivo Muchokids.
- Localizar título, texto, nombres y alternativas de imágenes en español e inglés.

## Flujo de usuario

La persona abre la ficha desde Ilustración, ve el título y el personaje de Brasil, lee el contexto breve y recorre los demás rostros. Puede volver a la categoría o navegar a los proyectos vecinos.

## Criterios de aceptación

- La ruta `/proyectos/muchokids-nationalities` muestra un único `h1`, el personaje de Brasil y los ocho SVG restantes sin duplicar a Brasil en la galería.
- La bandera de Brasil se repite como adorno cerca del título sin formar parte del contenido accesible.
- Cada rostro tiene una alternativa útil y un nombre localizado visible.
- No aparecen bloques de proceso, detalles ni contenido pendiente.
- La composición se adapta a móvil, tablet y escritorio sin desplazamiento horizontal.
- La galería usa una columna en móvil, tres en tablet y cuatro en escritorio; en escritorio hay dos filas completas.
- El título de documento, el idioma y el foco de navegación SPA conservan el comportamiento existente.

## Requisitos no funcionales

- Conservar React, Vite, Sass, los controles de navegación y la accesibilidad WCAG 2.2 A/AA del sitio.
- Cargar la galería de forma diferida y reservar el espacio de las imágenes mediante sus dimensiones.

## Exclusiones

- No crear imágenes nuevas ni atribuir fechas, herramientas o etapas de trabajo que no se han documentado.
- No modificar el contenido de las otras fichas de proyecto.

## Validación

- `npm run build`, `npm run lint`, `npm run test:content` y `git diff --check`: correctos.
- Navegador integrado de Codex (Chromium): galería de 1 columna a 320 CSS px, 3 a 768 CSS px y 4 a 1280 CSS px; `scrollWidth` coincide con el ancho del viewport en los tres tamaños. La segunda fila de escritorio muestra México, Kenia, Cuba y Australia. En móvil, los enlaces de regreso y de proyectos vecinos ocupan filas separadas sin superponerse.
- Inspección de estructura accesible en Chromium: un único `h1`, nueve figuras con nombre y alternativa localizada, banderas decorativas ocultas, título y `html[lang]` sincronizados en español e inglés. Al navegar desde el proyecto anterior, el foco llega al `h1` sin desplazamiento inesperado.
- Limitación: no se ejecutó lector de pantalla ni escáner automático; la revisión cubrió la estructura y los riesgos concretos de esta ficha, no una auditoría global.
