# Especificación: landing de Iconos de juego / Game Icons

## Objetivo

Completar la ficha bilingüe de Iconos de juego / Game Icons con los recursos ya disponibles, para que deje de mostrar el estado pendiente dentro de Ilustración.

## Alcance

- Conservar el identificador y la ruta estable `/proyectos/game-icons`.
- Mostrar la lámina final junto a la composición de objetos, tres etapas de proceso y nueve detalles estáticos desde `src/assets/images/projects/illustrations/game-icons/`: la pantalla de pausa, seis monedas individuales, la estrella con candado y el reloj de arena.
- Integrar una paleta de seis colores del proyecto en la sección Proceso. La paleta ocupa una fila propia después de las tres etapas, alineada con el encabezado de la sección y sin texto explicativo, tanto en escritorio como en pantallas estrechas.
- Reutilizar la composición editorial, navegación y tratamiento visual de las fichas de ilustración existentes.
- Incluir en ambos idiomas la introducción, los datos de 2017, técnica de ilustración digital y herramientas Photoshop e Illustrator, junto con alternativas útiles para cada imagen.

## Flujo de usuario

1. La persona abre Iconos de juego / Game Icons desde Ilustración o la navegación entre proyectos.
2. Revisa el resumen, la lámina de iconos y los objetos, las etapas de dibujo, color parcial y color final, la paleta y los detalles de interfaz e iconografía, incluidas las seis monedas y la estrella con candado.
3. Puede volver a Ilustración o ir al proyecto anterior o siguiente, preservando el contexto de categoría.

## Criterios de aceptación

- La ruta deja de presentar «Próximamente» / «Coming soon» y muestra un único `h1` localizado.
- El título «Iconos de juego» / «Game Icons» ocupa una sola línea y todo el ancho que necesita en escritorio; en pantallas estrechas conserva el reflujo sin desbordamiento horizontal.
- La lámina `game-icons-complete.jpg`, `icons-objects.jpg`, las imágenes de proceso `game-icons-process-1.jpg`, `game-icons-process-3.jpg` y `game-icons-process-2.jpg` en ese orden, y los nueve detalles configurados se cargan sin deformación.
- Se retiran `icons-detail-1.jpg` e `icons-detail-3.jpg` de la sección Detalles. `estrella-candado.png`, `coins-02.svg` a `coins-07.svg` e `icons-detail-4.png` tienen alternativas localizadas y conservan sus proporciones originales.
- Las dos imágenes principales conservan su contorno rectangular original, sin máscara orgánica; se muestran en la misma fila en escritorio y se apilan en pantallas estrechas.
- En escritorio, el conjunto de las dos imágenes finales ocupa como máximo el 94 % del ancho disponible, deja aire a ambos lados y permanece centrado.
- Excepcionalmente, las nueve imágenes de Detalles de Iconos de juego conservan su contorno y proporción originales, sin máscaras ni marcos orgánicos. En escritorio se distribuyen en una sola fila de nueve columnas, centradas verticalmente; las seis monedas se muestran a menor escala dentro de sus celdas. En pantallas estrechas se apilan.
- En escritorio, `icons-detail-2` ocupa una columna más ancha; las seis monedas conservan aproximadamente su tamaño original, pero se ubican en columnas más compactas y centradas para formar un grupo más cerrado.
- En móvil, las seis monedas se presentan centradas en dos filas de tres columnas, con un tamaño contenido; Pause y los demás detalles conservan filas propias.
- La paleta aparece una sola vez dentro de Proceso, con título, seis muestras y valores hexadecimales legibles, sin texto explicativo; ocupa una fila propia después de las tres imágenes, alineada con el encabezado de la sección, y no se desborda a 320 CSS px.
- En escritorio, la ficha técnica mantiene una separación vertical de al menos `1.5rem` respecto del título para que no haya solapamiento visual.
- En escritorio, las imágenes finales mantienen una separación vertical de al menos `1.5rem` respecto del bloque de título, introducción y ficha técnica, para conservar su ritmo visual.
- La ficha muestra los datos y textos localizados en español e inglés, incluidas alternativas específicas de las imágenes.
- La tarjeta se mantiene solamente en Ilustración y no modifica los trabajos seleccionados de Inicio.
- A 320 CSS px el contenido se adapta sin desplazamiento horizontal; los enlaces de retorno, anterior y siguiente conservan sus nombres accesibles y operación por teclado.

## Requisitos no funcionales

- Reutilizar el catálogo y la arquitectura de contenido existentes, sin textos de interfaz en componentes.
- Mantener la estructura semántica y el foco de entrada de ruta existentes.
- Tratar las imágenes como contenido informativo, con texto alternativo útil y localizado.

## Exclusiones

- No cambiar los demás proyectos ni su orden.
- No sumar el proyecto a Trabajos seleccionados.
- No modificar los recursos visuales proporcionados ni las fichas de otros proyectos.

## Validación inicial

- `npm run test:content`, `npm run lint` y `npm run build`: correctos.
- Navegador integrado de Codex (Chromium): a 320, 768 y 1280 CSS px, la versión inicial mostraba un único `h1`, las seis imágenes locales, alternativas localizadas y ningún desbordamiento horizontal. La navegación desde Ilustración orientaba el foco al `h1`; los enlaces de retorno, anterior y siguiente exponían sus nombres accesibles. Con Enter, el enlace al proyecto siguiente navegaba a Snapchat Frames y volvía a orientar el foco a su `h1`. El cambio a inglés actualizaba `html[lang]`, el título del documento y el contenido de la ficha.
- Limitación: la revisión se acotó a la ficha nueva, su navegación, idioma, reflujo e imágenes; no se realizó una auditoría WCAG global ni un escaneo automático, al reutilizar estructura semántica y controles existentes.

## Validación de la ampliación

- `npm run test:content`, `npm run lint` y `npm run build`: correctos.
- Navegador integrado de Codex (Chromium): a 1280 CSS px ambas imágenes principales aparecen en la misma fila, con proporciones originales, sin máscara y sin desbordamiento horizontal. A 320 CSS px se apilan, conservan proporciones y tampoco aparece desplazamiento horizontal. Las tres imágenes de detalles cargan; el tercer detalle conserva su proporción vertical.
- El DOM expone textos alternativos útiles para las dos imágenes principales y los tres detalles. El cambio a inglés actualiza `html[lang]`, título, `h1` y alternativas. La revisión de accesibilidad se limitó a contenido informativo y reflujo; no cambiaron controles, navegación ni foco, por lo que no se repitió una auditoría global.

## Validación de la paleta en Proceso

- `npm run test:content`, `npm run lint`, `npm run build` y `git diff --check`: correctos.
- Navegador integrado de Codex (Chromium): a 1280 y 1024 CSS px las dos etapas de proceso y la paleta comparten una fila, las imágenes conservan su proporción y no hay desbordamiento horizontal. A 320 CSS px las etapas se apilan y las seis muestras se organizan en dos filas de tres, sin desplazamiento horizontal.
- La paleta tiene título de nivel 3, valores hexadecimales legibles y descripción localizada. El cambio a inglés actualiza `html[lang]`, el título y la descripción. La revisión de accesibilidad se acotó a contenido y reflujo; no cambiaron controles ni foco.

## Validación del ancho del título

- `npm run test:content`, `npm run lint`, `npm run build` y `git diff --check`: correctos.
- Navegador integrado de Codex (Chromium): a 1024 CSS px «Iconos de juego» y «Game Icons» ocupan una sola línea dentro del ancho de la ficha; a 320 CSS px el título vuelve a fluir y no aparece desplazamiento horizontal. La comprobación se acotó al reflujo del encabezado.

## Validación del cuarto detalle estático

- `npm run test:content` (15 pruebas), `npm run lint`, `npm run build` y `git diff --check`: correctos. La compilación incluye `icons-detail-4.jpg` y no incluye el GIF retirado.
- Navegador integrado de Codex (Chromium): a 320 y 1280 CSS px la ficha muestra cuatro detalles y ningún GIF. `icons-detail-4.jpg` carga con dimensiones naturales de 1136 × 1816 px, conserva su proporción vertical y no provoca desplazamiento horizontal.
- En español e inglés se verificaron el texto alternativo del reloj de arena, un único `h1`, el título de documento localizado y `html[lang]`. La revisión de accesibilidad se acotó al nuevo contenido informativo y su reflujo; no cambiaron controles, navegación ni foco.

## Validación de la ampliación del proceso y la paleta

- `npm run lint`, `npm run build` y `git diff --check`: correctos. `npm run test:content` recorre correctamente la secuencia nueva, pero el conjunto queda pendiente por una aserción ajena que aún espera `icons-detail-4.jpg` mientras la configuración compartida ya referencia `icons-detail-4.png`.
- Navegador integrado de Codex (Chromium): a 1280 CSS px las tres etapas aparecen en el orden dibujo lineal, color parcial y color final; la paleta queda en una fila posterior, alineada con el encabezado «02 Proceso», y no expone texto explicativo. A 320 CSS px las etapas se apilan, la paleta conserva ese orden y no hay desplazamiento horizontal.
- La revisión de accesibilidad se acotó al nuevo contenido informativo y al reflujo: cada etapa tiene alternativa localizada y la paleta conserva un encabezado visible y valores hexadecimales legibles. No cambiaron controles, navegación ni foco.

## Validación de la separación de la ficha técnica

- `npm run lint`, `npm run build` y `git diff --check`: correctos.
- Navegador integrado de Codex (Chromium): a 1280 CSS px, el borde superior de la ficha técnica queda a 24 px del borde inferior del `h1` «Game Icons», sin solapamiento.
- La revisión de accesibilidad se limitó al espaciado visual de escritorio; no cambiaron semántica, contenido, controles, foco ni los puntos de quiebre inferiores.

## Validación de los detalles actualizados

- `npm run test:content` (17 pruebas), `npm run lint`, `npm run build` y `git diff --check`: correctos.
- Navegador integrado de Codex (Chromium): a 1280 CSS px la sección muestra nueve imágenes en una sola fila, con todos los elementos centrados verticalmente y las monedas al 55 % del ancho de las demás celdas; a 320 CSS px se apilan en una sola columna. En ambas anchuras no hay desplazamiento horizontal.
- La revisión de accesibilidad se acotó al contenido informativo y al reflujo: las nueve imágenes tienen alternativas localizadas no vacías. No cambiaron controles, navegación ni foco.

## Validación del ritmo vertical de las imágenes finales

- `npm run lint`, `npm run build` y `git diff --check`: correctos.
- Chrome, escritorio (1352 CSS px): el bloque de imágenes finales comienza 24 px (`1.5rem`) después del bloque que contiene el título, la introducción y la ficha técnica, sin solapamiento.
- La revisión de accesibilidad se limitó al reflujo y la legibilidad del cambio de espaciado. No se alteraron semántica, contenido, controles, foco ni los puntos de quiebre inferiores.

## Validación del ancho de las imágenes finales

- `npm run lint`, `npm run build` y `git diff --check`: correctos.
- Chrome, escritorio (1352 CSS px): el conjunto mide 1144 px (94 % del contenedor), conserva 37 px a cada lado y permanece centrado.
- La revisión de accesibilidad se limitó al reflujo y la legibilidad: no se alteraron controles, semántica ni foco.

## Validación de la cuadrícula de detalles

- `npm run lint`, `npm run build` y `git diff --check`: correctos.
- Chrome, escritorio: `icons-detail-2` mide 207 px dentro de su columna ampliada; las seis monedas miden 71 px, mantienen aproximadamente su tamaño previo y sus centros se separan 121 px, formando un grupo más compacto.
- La revisión de accesibilidad se limitó al contenido informativo y al reflujo. No se alteraron alternativas, controles, semántica ni foco.

## Validación de la cuadrícula móvil de monedas

- `npm run lint`, `npm run build` y `git diff --check`: correctos.
- Chrome, 320 CSS px: las seis monedas forman dos filas de tres columnas y miden 66 px; Pause, la estrella bloqueada y el reloj de arena ocupan filas propias, sin desplazamiento horizontal.
- La revisión de accesibilidad se limitó al reflujo y al contenido informativo. No se modificaron alternativas, controles, semántica ni foco.
