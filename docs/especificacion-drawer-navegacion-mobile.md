# Especificación: navegación móvil con drawer

## Objetivo

Ofrecer una navegación compacta en móvil mediante un botón hamburguesa que abre un panel lateral.

## Alcance

- Bajo 641 px, mostrar la marca y un botón hamburguesa en una sola barra.
- Abrir un drawer lateral con Inicio, Proyectos, las categorías, Experiencia y el cambio de idioma.
- Conservar la navegación actual desde 641 px.

## Flujos de usuario

- La persona abre el drawer con el botón hamburguesa y elige un destino. El panel se cierra al navegar.
- Puede cerrarlo con el botón de cierre, Escape o un toque fuera del panel.
- Al cerrar sin navegar, el foco vuelve al botón que abrió el panel.

## Criterios de aceptación

- El botón anuncia su función y el estado abierto/cerrado en español e inglés.
- El drawer muestra los destinos existentes y señala la ruta activa.
- El drawer deja al menos 56 px de superficie exterior visible a 320 px para poder cerrarlo con un toque fuera.
- Mientras está abierto, el foco queda dentro del panel y el contenido posterior no recibe interacción.
- El panel se cierra al navegar o pasar al diseño de tablet/escritorio.
- La página no presenta desplazamiento horizontal a 320 px ni con zoom de 200 %.
- El menú se puede usar con teclado y respeta `prefers-reduced-motion`.
- `npm run lint` y `npm run build` terminan correctamente.

## Requisitos no funcionales

- Mantener React, React Router, traducciones centralizadas y Sass.
- Usar controles nativos y conservar contraste y foco visible WCAG 2.2 AA.

## Exclusiones

- Cambiar rutas, categorías o la interacción del menú Proyectos en escritorio.
- Rediseñar el contenido de las páginas.

## Validación

- `npm run lint` y `npm run build`: correctos.
- Navegador integrado (Chromium), 320 px: apertura, Escape, navegación a Ilustración, foco en `main`, etiquetas en ambos idiomas y ausencia de desplazamiento horizontal; correctos. El drawer mide 264 px, deja 56 px exteriores y se cierra al tocar esa franja.
- Navegador integrado (Chromium), 500 px: cierre al tocar fuera y ciclo de Tab/Shift+Tab dentro del drawer; correctos.
- Navegador integrado (Chromium), 768 px: drawer cerrado y navegación de escritorio visible; correcto.
- Limitación: no se realizó una prueba con lector de pantalla ni una auditoría WCAG completa.
