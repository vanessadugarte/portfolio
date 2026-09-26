# Especificación: interacción del menú Proyectos

## Objetivo

Actualizar el desplegable Proyectos de la navegación para usar un icono chevron y ofrecer una interacción adecuada a cada tipo de dispositivo.

## Alcance

- Sustituir los indicadores de texto `+` y `-` por un chevron.
- En escritorio, abrir el menú al situar el cursor sobre Proyectos y cerrarlo al salir de esa área.
- Mantener un área de hover continua entre el disparador y el panel de opciones para permitir recorrerlo sin cierres involuntarios.
- En móvil, conservar la apertura y cierre mediante clic y cerrar el menú al hacer clic fuera de él.
- Alinear a la izquierda el texto de todas las opciones del panel.

## Flujo de usuario

En escritorio, la persona pasa el cursor por Proyectos, atraviesa el espacio visual hasta sus categorías y el menú permanece abierto mientras el cursor está en esa área. El menú desaparece al mover el cursor fuera. En móvil, toca Proyectos para alternar el menú y tocar fuera lo cierra.

## Criterios de aceptación

- Proyectos muestra un icono chevron, sin los caracteres `+` ni `-`.
- Desde el punto de quiebre de escritorio, el menú se abre con hover y se cierra al salir con el cursor.
- El espacio visual entre Proyectos y el panel forma parte del área de hover, por lo que se pueden alcanzar todas las opciones sin cerrar el menú.
- Bajo ese punto de quiebre, el menú se alterna con clic y un clic fuera lo cierra.
- Los enlaces de categorías existentes mantienen sus destinos.
- Todas las opciones del panel se muestran alineadas a la izquierda.
- "Ver todo" parte con el mismo color y sin subrayado que las demás opciones; muestra subrayado únicamente cuando su ruta está seleccionada o durante hover/foco.
- "Ver todo" no muestra una línea divisoria inferior.
- Cada enlace del panel tiene un indicador de foco visible para navegación por teclado.
- `npm run lint` y `npm run build` finalizan correctamente.

## Requisitos no funcionales

- Mantener React, React Router y Sass; no incorporar estilos en línea.
- Mantener la interacción por teclado disponible para el menú.

## Exclusiones

- Cambiar categorías, rutas o los textos del menú.
- Rediseñar el resto de la barra de navegación.
