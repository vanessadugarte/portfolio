# Especificación: landing de Iconos de juego / Game Icons

## Objetivo

Completar la ficha bilingüe de Iconos de juego / Game Icons con los recursos ya disponibles, para que deje de mostrar el estado pendiente dentro de Ilustración.

## Alcance

- Conservar el identificador y la ruta estable `/proyectos/game-icons`.
- Mostrar la lámina final, dos etapas de proceso y dos acercamientos del proyecto desde `src/assets/images/projects/illustrations/game-icons/`.
- Reutilizar la composición editorial, navegación y tratamiento visual de las fichas de ilustración existentes.
- Incluir en ambos idiomas la introducción, los datos de 2017, técnica de ilustración digital y herramientas Photoshop e Illustrator, junto con alternativas útiles para cada imagen.

## Flujo de usuario

1. La persona abre Iconos de juego / Game Icons desde Ilustración o la navegación entre proyectos.
2. Revisa el resumen, la lámina de iconos, las etapas de dibujo y color, y los detalles de interfaz.
3. Puede volver a Ilustración o ir al proyecto anterior o siguiente, preservando el contexto de categoría.

## Criterios de aceptación

- La ruta deja de presentar «Próximamente» / «Coming soon» y muestra un único `h1` localizado.
- La lámina `game-icons-complete.jpg`, las dos imágenes `game-icons-process-*.jpg` y los dos detalles `icons-detail-*` se cargan sin deformación.
- La ficha muestra los datos y textos localizados en español e inglés, incluidas alternativas específicas de las imágenes.
- La tarjeta se mantiene solamente en Ilustración y no modifica los trabajos seleccionados de Inicio.
- A 320 CSS px el contenido se adapta sin desplazamiento horizontal; los enlaces de retorno, anterior y siguiente conservan sus nombres accesibles y operación por teclado.

## Requisitos no funcionales

- Reutilizar el catálogo y la arquitectura de contenido existentes, sin textos de interfaz en componentes.
- Mantener la estructura semántica, el foco de entrada de ruta y el soporte de movimiento reducido existentes.
- Tratar las imágenes como contenido informativo, con texto alternativo útil y localizado.

## Exclusiones

- No cambiar los demás proyectos ni su orden.
- No sumar el proyecto a Trabajos seleccionados.
- No crear ni modificar recursos visuales.

## Validación

- `npm run test:content`, `npm run lint` y `npm run build`: correctos.
- Navegador integrado de Codex (Chromium): a 320, 768 y 1280 CSS px, la ruta muestra un único `h1`, las seis imágenes locales, alternativas localizadas y ningún desbordamiento horizontal. La navegación desde Ilustración orienta el foco al `h1`; los enlaces de retorno, anterior y siguiente exponen sus nombres accesibles. Con Enter, el enlace al proyecto siguiente navega a Snapchat Frames y vuelve a orientar el foco a su `h1`. El cambio a inglés actualiza `html[lang]`, el título del documento y el contenido de la ficha.
- Limitación: la revisión se acotó a la ficha nueva, su navegación, idioma, reflujo e imágenes; no se realizó una auditoría WCAG global ni un escaneo automático, al reutilizar estructura semántica y controles existentes.
