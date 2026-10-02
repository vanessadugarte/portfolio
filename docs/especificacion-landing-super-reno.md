# Especificación: Super reno / Superdeer

## Objetivo

Completar la ficha del personaje ilustrado para un cuento infantil con las imágenes disponibles, su proceso, paleta y datos técnicos.

## Alcance

- Conservar la ruta `/proyectos/reindeer` y su ubicación en Ilustración.
- Titular la ficha «Super reno» en español y «Superdeer» en inglés.
- Mostrar la ilustración del reno volando, las tres etapas disponibles del desarrollo de poses y la lámina final con dos versiones del personaje.
- Añadir después de las poses finales una sección «Detalles» / «Details» con cuatro recortes: rostro, brazo y capa, textura del fondo, y asta y oreja.
- Incluir la paleta de colores visible en las ilustraciones y la ficha técnica: 2018, ilustración digital, Photoshop, Illustrator y tableta Wacom.
- Localizar títulos, descripciones y alternativas de imágenes en español e inglés.

## Flujo de usuario

1. La persona abre el proyecto desde Ilustración o la navegación entre proyectos.
2. Lee el resumen y la ficha técnica, observa la ilustración, consulta la paleta y sigue las etapas de poses, color y textura hasta las versiones finales y sus detalles.
3. Puede volver a la categoría o navegar al proyecto anterior o siguiente.

## Criterios de aceptación

- La ruta deja de mostrar el estado pendiente y presenta un único `h1` localizado.
- Las nueve imágenes elegidas cargan con su proporción sin recortes relevantes, alternativas útiles y orden narrativo.
- La nueva sección «Detalles» / «Details» aparece después de «Poses finales» / «Final poses» con cuatro recortes distintos y encabezado de nivel 2.
- La paleta muestra muestras y códigos hexadecimales legibles en español e inglés.
- En la paleta de Reno, las muestras y sus códigos tienen al menos 2 rem de separación horizontal entre elementos contiguos, sin superposición a 320 CSS px.
- La ficha técnica muestra exactamente el año, la técnica y las herramientas indicadas.
- El contenido se adapta a 320 CSS px sin desplazamiento horizontal y conserva la navegación y el foco existentes.

## Requisitos no funcionales

- Reutilizar el modelo de proyecto, la composición editorial y los estilos Sass existentes.
- Conservar las imágenes informativas accesibles y la sincronización de idioma y título de documento.

## Exclusiones

- No añadir imágenes, etapas de producción ni información biográfica no proporcionadas.
- No cambiar la ruta, el orden del catálogo ni los demás proyectos.

## Validación

- `npm run test:content`, `npm run lint`, `npm run build` y `git diff --check`: correctos.
- Navegador integrado de Codex (Chromium): en la ruta directa, a 320 y 1280 CSS px se comprobó un solo `h1`, cinco imágenes cargadas, paleta de seis muestras y ausencia de desplazamiento horizontal. En móvil, los códigos de la paleta se distribuyen en dos filas de tres y permanecen legibles.
- El cambio de idioma actualiza `html[lang]`, título de documento, encabezado y alternativas. La lámina final conserva su proporción de 4000 × 3435 px.
- La revisión de accesibilidad se limitó al contenido informativo y al reflujo de esta ficha; se reutilizaron la navegación y el manejo de foco existentes. No se realizó una auditoría WCAG global.

## Validación de Detalles

- `npm run test:content` (16 pruebas), `npm run lint`, `npm run build` y `git diff --check`: correctos.
- Navegador integrado de Codex (Chromium): a 320 CSS px se comprobaron los cuatro recortes cargados y apilados, cada uno con su proporción de 725 × 569 px, sin desbordamiento horizontal. A 1280 CSS px aparecen en una fila de cuatro, sin desbordamiento.
- El cambio a inglés actualiza el encabezado «Details», `html[lang]`, título del documento y alternativas de imágenes. La comprobación de accesibilidad se limitó a estructura, contenido informativo y reflujo de la sección nueva; no se cambiaron controles ni foco.

## Validación de separación en la paleta

- `npm run build`, `npm run lint` y `git diff --check`: correctos.
- Navegador integrado de Codex (Chromium): a 320, 641 y 1280 CSS px la separación horizontal calculada es 32 px. La distancia mínima entre códigos contiguos es de 45 px en móvil y 32 px en tablet y escritorio; los códigos conservan 14 px y no hay desplazamiento horizontal.
- La comprobación de accesibilidad se limitó al reflujo y legibilidad de la paleta; no cambiaron controles, semántica ni foco.
