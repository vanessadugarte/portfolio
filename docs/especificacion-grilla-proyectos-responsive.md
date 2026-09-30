# Especificación: columnas de proyectos por dispositivo

## Objetivo

Mostrar las tarjetas de proyectos en una columna en móvil, tres en tablet y cuatro en escritorio.

## Alcance

- Grilla de trabajos seleccionados en Inicio.
- Grillas de Todos los proyectos y de las categorías con proyectos.
- Usar los puntos de quiebre Sass existentes: tablet desde `40.0625rem` y escritorio desde `64rem`.

## Flujo de usuario

Al recorrer cualquiera de estas grillas, la persona ve las tarjetas en una, tres o cuatro columnas según el ancho de pantalla, sin perder el orden de lectura.

## Criterios de aceptación

- Por debajo del punto de quiebre de tablet, cada grilla muestra una columna.
- Desde tablet y antes de escritorio, cada grilla muestra tres columnas.
- Desde escritorio, cada grilla muestra cuatro columnas.
- Las tarjetas conservan su orden y la página no presenta desplazamiento horizontal a 320 CSS px.
- `npm run build` y `npm run lint` finalizan correctamente.

## Requisitos no funcionales

- Conservar Sass, los tokens de puntos de quiebre y la legibilidad de las tarjetas.
- Mantener la navegación por teclado y los indicadores de foco de las tarjetas.

## Exclusiones

- Cambios en el contenido, las rutas, las imágenes y las fichas de detalle.

## Validación

- `npm run build` y `npm run lint`: correctos.
- Navegador integrado de Codex sobre Vite (`localhost:5173`): en Inicio, Todos los proyectos e Ilustración, la grilla calculada muestra 1 columna a 320 px, 3 a 768 px y 4 a 1280 px. En esas vistas y anchos no hay desplazamiento horizontal.
- Vite en `localhost:5173` y `localhost:5174`: ambos entregan las reglas actualizadas.
- Alcance de la comprobación visual: se midieron estos tres anchos representativos y la categoría Ilustración, que comparte la grilla con las demás categorías. No se repitió una auditoría WCAG completa porque no cambiaron controles, semántica ni foco.
