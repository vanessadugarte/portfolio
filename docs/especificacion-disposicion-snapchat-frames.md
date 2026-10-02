# Especificación: disposición de Snapchat Frames

## Objetivo

Unificar la cabecera de Snapchat Frames con la convención de las demás fichas de proyecto.

## Alcance

- Mostrar «01» junto al título principal, con la descripción debajo.
- Colocar la ficha técnica a la derecha de la descripción en escritorio y permitir que se apile en pantallas estrechas.
- Eliminar el encabezado «Marcos» y su descripción antes de la galería, en español e inglés.

## Flujo de usuario

La persona abre Snapchat Frames, lee el número y el título, luego la descripción y la ficha técnica, y accede directamente a los marcos ilustrados.

## Criterios de aceptación

- La cabecera muestra un único `h1` con el título localizado y el número visible «01» a su izquierda.
- En escritorio, descripción y ficha técnica comparten una fila; en móvil se leen sin desplazamiento horizontal.
- La galería comienza después de la cabecera sin el punto «Marcos» ni su texto en ninguno de los idiomas.
- Se mantienen las imágenes, nombres y alternativas de la galería.

## Requisitos no funcionales

- Mantener la tipografía, los colores, el enfoque de la ruta y el soporte de español e inglés existentes.
- Conservar el orden de lectura y la legibilidad en móvil, tablet y escritorio.

## Exclusiones

- No modificar otras fichas ni el contenido de los marcos ilustrados.

## Validación

- `npm run build`, `npm run lint`, `npm run test:content` y `git diff --check`: correctos.
- Navegador integrado de Codex (Chromium): a 1280 CSS px, número y título comparten fila; descripción y ficha técnica comienzan a la misma altura en columnas adyacentes. A 320 CSS px, el contenido se apila y `scrollWidth` coincide con los 320 px del viewport.
- Revisión de estructura accesible en el navegador: un solo `h1`, número decorativo oculto a tecnologías de asistencia, título de documento e `html[lang]` sincronizados en español; la galería conserva 18 figuras con nombres y alternativas. No se ejecutó lector de pantalla ni auditoría global, pues no cambiaron controles ni navegación.
