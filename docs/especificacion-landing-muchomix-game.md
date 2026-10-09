# Especificación: ficha de Muchomix Game

## Objetivo

Convertir la ruta existente de Muchomix Game en una ficha bilingüe que explique el concepto del videojuego infantil y presente sus pantallas principales con la misma identidad editorial del portafolio.

## Alcance

- Mantener el proyecto dentro de la categoría Ilustración y conservar su slug `muchomix-game`.
- Sustituir el estado «Próximamente» por una ficha completa en español e inglés.
- Presentar la pantalla principal y agrupar las nueve pantallas restantes en cuatro bloques: mecánica de juego, progresión y recompensas, resultados y ranking, y experiencia social.
- Explicar la premisa de unir tres o más caritas de la misma nacionalidad, la presencia de una heroína y un villano, el avance por niveles y la conexión con amigos.
- Reutilizar exclusivamente los assets existentes en `src/assets/images/projects/illustrations/muchomix-game/`.

## Flujos de usuario

1. La persona abre Muchomix Game desde la categoría Ilustración y llega a una ficha con título, descripción y datos técnicos localizados.
2. Recorre la pantalla principal y comprende la mecánica de unir caritas para sumar puntos.
3. Continúa por las pantallas del villano, niveles, recompensas, resultados, ranking y amistades, cada una con un rótulo y una alternativa útil.
4. Puede volver a Ilustración o navegar al proyecto anterior o siguiente sin perder el contexto de categoría.
5. Al cambiar el idioma, se actualizan el título del documento, los textos, los rótulos y las alternativas de imagen.

## Criterios de aceptación

- La ruta `/proyectos/muchomix-game` deja de mostrar el estado pendiente y contiene un único `h1` localizado.
- Se muestran `gameplay.jpg` y las nueve pantallas complementarias sin deformación, con dimensiones intrínsecas y carga diferida salvo la imagen principal.
- La ficha comunica que el objetivo es unir tres o más caritas de la misma nacionalidad para sumar puntos, que existen una heroína y un villano, que se avanza por niveles y que es posible conectar con amigos.
- En escritorio, la introducción no supera `44rem`, la ficha técnica no supera `23rem` y ambas quedan separadas visualmente; el `h1` mide `5rem`.
- En móvil, el contenido refluye a 320 CSS px sin desplazamiento horizontal y las imágenes mantienen su proporción.
- Todo el contenido editorial y las alternativas de imagen existen en español e inglés.
- La navegación anterior/siguiente conserva Muchokids: nacionalidades, Forest, Muchomix Game y Velas Angel's Sighs en el orden actual.

## Requisitos no funcionales

- Mantener React, React Router y Sass, sin estilos en línea salvo variables visuales dinámicas.
- Conservar HTML semántico, jerarquía de encabezados, foco en el `h1`, `html[lang]`, contraste y soporte de movimiento reducido existentes.
- Evitar dependencias nuevas y preservar las demás fichas del catálogo.

## Exclusiones

- No se implementa el videojuego ni se simula interacción dentro de sus pantallas.
- No se crean personajes, animaciones, recursos gráficos ni una paleta de color adicional.
- No se modifica el orden del catálogo ni se incorpora Muchomix Game a trabajos seleccionados.

## Validación

- `npm run test:content` (19 pruebas), `npm run lint`, `npm run build` y `git diff --check`: correctos.
- Navegador integrado (Chromium): a 1280 CSS px la ficha muestra un único `h1` de 80 px, introducción de 704 px (`44rem`), ficha técnica de 368 px (`23rem`), diez imágenes y ningún desplazamiento horizontal.
- Navegador integrado (Chromium): a 320 CSS px la ficha conserva un único `h1`, las diez imágenes refluyen en una columna y `scrollWidth` coincide con `clientWidth` (320 px).
- Navegador integrado (Chromium): la navegación SPA orienta el foco al `h1` sin desplazamiento; el cambio de idioma actualiza `html[lang]`, navegación, introducción, secciones y alternativas de imagen.
- La revisión de accesibilidad se limitó a semántica, jerarquía de encabezados, contenido informativo, idioma, foco y reflujo de la ruta; no se modificaron los controles compartidos.
