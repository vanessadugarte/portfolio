# Especificación: landing de Iconos de juego / Game Icons

## Objetivo

Completar la ficha bilingüe de Iconos de juego / Game Icons con los recursos ya disponibles, para que deje de mostrar el estado pendiente dentro de Ilustración.

## Alcance

- Conservar el identificador y la ruta estable `/proyectos/game-icons`.
- Mostrar la lámina final junto a la composición de objetos, dos etapas de proceso, tres acercamientos estáticos y el GIF `fever-example.gif` en Detalles desde `src/assets/images/projects/illustrations/game-icons/`.
- Integrar una paleta de seis colores del proyecto en la sección Proceso. En escritorio comparte la fila con las dos etapas para reducir el tamaño de sus imágenes; en pantallas estrechas se presenta después de ellas.
- Reutilizar la composición editorial, navegación y tratamiento visual de las fichas de ilustración existentes.
- Incluir en ambos idiomas la introducción, los datos de 2017, técnica de ilustración digital y herramientas Photoshop e Illustrator, junto con alternativas útiles para cada imagen.

## Flujo de usuario

1. La persona abre Iconos de juego / Game Icons desde Ilustración o la navegación entre proyectos.
2. Revisa el resumen, la lámina de iconos y los objetos, las etapas de dibujo y color junto a su paleta, y los detalles de interfaz e iconografía, incluida la animación de la estrella.
3. Ve el GIF reproducirse de forma continua dentro de Detalles.
4. Puede volver a Ilustración o ir al proyecto anterior o siguiente, preservando el contexto de categoría.

## Criterios de aceptación

- La ruta deja de presentar «Próximamente» / «Coming soon» y muestra un único `h1` localizado.
- El título «Iconos de juego» / «Game Icons» ocupa una sola línea y todo el ancho que necesita en escritorio; en pantallas estrechas conserva el reflujo sin desbordamiento horizontal.
- La lámina `game-icons-complete.jpg`, `icons-objects.jpg`, las dos imágenes `game-icons-process-*.jpg` y los tres detalles `icons-detail-*` se cargan sin deformación.
- `fever-example.gif` aparece como cuarto detalle, conserva su proporción, tiene una alternativa localizada y se reproduce continuamente sin control de pausa.
- Las dos imágenes principales conservan su contorno rectangular original, sin máscara orgánica; se muestran en la misma fila en escritorio y se apilan en pantallas estrechas.
- Excepcionalmente, las cuatro imágenes de Detalles de Iconos de juego conservan su contorno y proporción originales, sin máscaras ni marcos orgánicos.
- La paleta aparece una sola vez dentro de Proceso, con título, seis muestras y valores hexadecimales legibles; comparte fila con las dos imágenes a ancho de escritorio sin recortarlas y se apila sin desbordamiento a 320 CSS px.
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

## Limitación de accesibilidad de la excepción

- El GIF proporcionado se repite indefinidamente y la reproducción continua solicitada no ofrece pausa ni una alternativa automática para `prefers-reduced-motion`. Esta excepción no cumple el requisito de movimiento reducido y control de contenido animado establecido en `AGENTS.md`.

## Validación inicial

- `npm run test:content`, `npm run lint` y `npm run build`: correctos.
- Navegador integrado de Codex (Chromium): a 320, 768 y 1280 CSS px, la versión inicial mostraba un único `h1`, las seis imágenes locales, alternativas localizadas y ningún desbordamiento horizontal. La navegación desde Ilustración orientaba el foco al `h1`; los enlaces de retorno, anterior y siguiente exponían sus nombres accesibles. Con Enter, el enlace al proyecto siguiente navegaba a Snapchat Frames y volvía a orientar el foco a su `h1`. El cambio a inglés actualizaba `html[lang]`, el título del documento y el contenido de la ficha.
- Limitación: la revisión se acotó a la ficha nueva, su navegación, idioma, reflujo e imágenes; no se realizó una auditoría WCAG global ni un escaneo automático, al reutilizar estructura semántica y controles existentes.

## Validación de la ampliación

- `npm run test:content`, `npm run lint` y `npm run build`: correctos.
- Navegador integrado de Codex (Chromium): a 1280 CSS px ambas imágenes principales aparecen en la misma fila, con proporciones originales, sin máscara y sin desbordamiento horizontal. A 320 CSS px se apilan, conservan proporciones y tampoco aparece desplazamiento horizontal. Las tres imágenes de detalles cargan; el tercer detalle conserva su proporción vertical.
- El DOM expone textos alternativos útiles para las dos imágenes principales y los tres detalles. El cambio a inglés actualiza `html[lang]`, título, `h1` y alternativas. La revisión de accesibilidad se limitó a contenido informativo y reflujo; no cambiaron controles, navegación ni foco, por lo que no se repitió una auditoría global.

## Validación del GIF antes de la excepción

- `npm run test:content`, `npm run lint`, `npm run build` y `git diff --check`: correctos.
- Navegador integrado de Codex (Chromium): el cuarto detalle carga a 1280 y 320 CSS px, conserva su proporción y no causa desbordamiento horizontal. Enter pausa la animación y muestra el fotograma fijo; Espacio la reanuda. El botón conserva el foco y muestra un contorno visible de 3 px. El control y la alternativa aparecen en español e inglés.
- El elemento `source` ofrece el fotograma fijo cuando se activa `prefers-reduced-motion: reduce` y la hoja Sass oculta entonces el control de reproducción. Se verificó esta configuración en DOM y código; no se emuló la preferencia del sistema en el navegador. La revisión se acotó al contenido animado, su control y reflujo.

## Validación de la excepción

- `npm run test:content`, `npm run lint`, `npm run build` y `git diff --check`: correctos.
- Navegador integrado de Codex (Chromium): a 1280 y 320 CSS px las cuatro imágenes de Detalles cargan con su proporción natural, sin máscaras, marcos orgánicos ni desplazamiento horizontal. La galería no contiene botones; el cuarto recurso cargado es `fever-example.gif`.
- El GIF tiene 21 fotogramas, dura 4,6 segundos por ciclo y el archivo indica repetición indefinida. La excepción de movimiento continuo descrita arriba permanece como limitación de accesibilidad.

## Validación de la paleta en Proceso

- `npm run test:content`, `npm run lint`, `npm run build` y `git diff --check`: correctos.
- Navegador integrado de Codex (Chromium): a 1280 y 1024 CSS px las dos etapas de proceso y la paleta comparten una fila, las imágenes conservan su proporción y no hay desbordamiento horizontal. A 320 CSS px las etapas se apilan y las seis muestras se organizan en dos filas de tres, sin desplazamiento horizontal.
- La paleta tiene título de nivel 3, valores hexadecimales legibles y descripción localizada. El cambio a inglés actualiza `html[lang]`, el título y la descripción. La revisión de accesibilidad se acotó a contenido y reflujo; no cambiaron controles ni foco.

## Validación del ancho del título

- `npm run test:content`, `npm run lint`, `npm run build` y `git diff --check`: correctos.
- Navegador integrado de Codex (Chromium): a 1024 CSS px «Iconos de juego» y «Game Icons» ocupan una sola línea dentro del ancho de la ficha; a 320 CSS px el título vuelve a fluir y no aparece desplazamiento horizontal. La comprobación se acotó al reflujo del encabezado.
