# Especificación: enlaces del menú Proyectos en móvil

## Objetivo

Permitir que cada enlace de categoría del menú Proyectos navegue con un solo toque en dispositivos móviles.

## Alcance

- Ajustar el cierre del menú cuando el navegador no informa el siguiente elemento enfocado.
- Conservar el cierre al seleccionar una categoría, al pulsar Escape y al hacer clic fuera del menú.

## Flujos de usuario

1. Una persona abre Proyectos en móvil y toca una categoría una vez; se muestra la página correspondiente.
2. Una persona navega con teclado por los enlaces; el menú permanece abierto mientras el foco está dentro y se cierra al salir.
3. Una persona descarta el menú con Escape o al pulsar fuera.

## Criterios de aceptación

- Un cambio de foco sin `relatedTarget` no cierra el menú antes de procesar el enlace tocado.
- La selección de cada enlace navega a la ruta esperada y cierra el menú.
- Escape, clic exterior y salida de foco conocida siguen cerrando el menú.
- `npm run lint` y `npm run build` finalizan correctamente.

## Requisitos no funcionales

- Conservar la semántica nativa de `details`, `summary` y los enlaces.
- Mantener la navegación por teclado y el foco visible.

## Exclusiones

- Cambiar las rutas, el contenido o el aspecto visual del menú.
