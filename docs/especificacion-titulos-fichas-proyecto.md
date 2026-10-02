# Especificación: títulos de fichas de proyecto

## Objetivo

Mantener una misma tipografía en los títulos principales de las fichas de proyecto y permitir que cada proyecto defina sus colores.

## Alcance

- Centralizar la familia, peso, interletrado y altura de línea del `h1` de las fichas completas, galerías y fichas pendientes mediante un estilo compartido y un token Sass con nombre genérico.
- Conservar los tamaños adaptados a cada composición para mantener el reflujo.
- Mostrar «Snapchat» en fucsia y «Frames» en turquesa sobre el fondo claro, con contraste WCAG AA para texto grande.
- Definir el texto segmentado en el contenido localizado y los colores en los datos del proyecto.

## Flujo de usuario

La persona abre cualquier ficha y reconoce la misma tipografía en el título. En Snapchat Frames, las dos palabras conservan su orden y sus colores en español e inglés.

## Criterios de aceptación

- Todos los `h1` de fichas de proyecto consumen el mismo token tipográfico y no definen familias propias por proyecto.
- El `h1` de Snapchat Frames mantiene un único encabezado accesible y el texto «Snapchat Frames» en ambos idiomas.
- «Snapchat» usa fucsia y «Frames» turquesa con contraste de al menos 3:1 sobre el fondo de la ficha.
- El título conserva reflujo a 320 CSS px, sin desplazamiento horizontal, y el cambio de idioma mantiene `html[lang]` y el título del documento.

## Requisitos no funcionales

- Conservar React, Sass y la configuración de color por proyecto.
- No alterar la navegación ni el contenido de las galerías.

## Exclusiones

- No cambiar la tipografía de encabezados de secciones, tarjetas o páginas que no sean fichas de proyecto.

## Validación

- `npm run test:content`, `npm run lint`, `npm run build` y `git diff --check`: correctos.
- Navegador integrado de Codex (Chromium): los títulos de Snapchat Frames, Game Icons, Deep Sea, Donuts y Reindeer usan la misma familia y peso. A 320 y 1280 CSS px no presentan desplazamiento horizontal; Snapchat Frames tampoco lo presenta a 768 CSS px.
- El `h1` de Snapchat Frames conserva el texto «Snapchat Frames» y un solo encabezado en español e inglés. Sus palabras muestran fucsia `#E90051` y turquesa `#008F87` sobre fondo `#F6F4ED`; los contrastes calculados son 4,16:1 y 3,61:1 respectivamente.
- La revisión de accesibilidad se limitó al contraste, idioma y reflujo de los títulos modificados. No cambió la navegación ni el foco.
