# Especificación: ocultar Snapchat Frames del portafolio

## Objetivo

Evitar que Snapchat Frames aparezca como proyecto publicado y que la navegación lleve a una ficha que no debe mostrarse.

## Alcance

- Marcar Snapchat Frames como no publicado en el catálogo central.
- Excluirlo de listados, tarjetas y navegación entre proyectos.
- Resolver su URL directa con la página 404 localizada.
- Corregir la referencia de formato que producía un error en la ficha, conservada en el código para una eventual publicación futura.

## Flujos de usuario

1. La persona recorre Ilustración o el listado general sin encontrar Snapchat Frames.
2. Desde Iconos de juego, «Siguiente» abre Super reno; desde Super reno, «Anterior» abre Iconos de juego.
3. Una visita a `/proyectos/snapchat-frames` muestra la página no encontrada y su enlace de regreso al inicio.

## Criterios de aceptación

- Snapchat Frames no aparece en las categorías, el listado general ni la navegación anterior/siguiente, en español o inglés.
- La ruta directa no muestra la ficha ni un error de React; presenta el 404 localizado con un único `h1` y título de documento correcto.
- Los proyectos adyacentes de Ilustración permanecen conectados en ambos sentidos.
- Los datos y recursos de la ficha se conservan sin borrarlos para una posible publicación posterior.

## Requisitos no funcionales

- Mantener el catálogo como fuente de verdad para visibilidad y navegación.
- Conservar rutas semánticas, enlaces nativos, foco visible y funcionamiento con teclado.
- No introducir desbordamiento horizontal en móvil.

## Exclusiones

- No borrar los archivos de imagen ni rehacer la ficha de Snapchat Frames.
- No cambiar el contenido de otros proyectos.

## Validación

- `npm run test:content`: 22 pruebas correctas; cubren URL no publicada, listados y vecinos de Ilustración.
- `npm run lint`, `npm run build` y `git diff --check`: correctos.
- Navegador integrado (Chromium): URL directa muestra el 404 localizado en español e inglés, con un único `h1` y título de documento; sin error de React.
- Navegador integrado (Chromium): Snapchat no aparece en Ilustración ni en el listado general. «Siguiente» desde Iconos de juego abre Super reno, cuyo «Anterior» vuelve a Iconos de juego; el foco se orienta al `h1` al navegar.
- A 320 CSS px, Iconos de juego y el 404 mantienen `scrollWidth` igual al ancho visible (320 px).
- La revisión se limitó a las rutas, navegación y reflujo afectados; no se repitió la auditoría global ni se probó lector de pantalla.
