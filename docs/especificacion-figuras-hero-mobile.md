# Especificación: figuras del hero más grandes en móvil

## Objetivo

Dar mayor presencia visual a las figuras SVG del hero de Inicio en pantallas móviles.

## Alcance

- Aumentar ligeramente el tamaño móvil de las cinco figuras de categoría y las cuatro decorativas.
- Conservar sus posiciones, formas, enlaces y tamaños de tablet y escritorio.

## Flujo de usuario

Al abrir Inicio en móvil, la persona ve las figuras más grandes y puede seguir identificando y activando los enlaces de categoría.

## Criterios de aceptación

- Las nueve figuras son aproximadamente un 10–15 % más grandes en móvil.
- A 320 CSS px no hay desplazamiento horizontal ni superposición que impida leer las etiquetas o activar los enlaces.
- Los enlaces de categoría conservan su acceso por teclado y su indicador de foco.
- Desde el punto de quiebre de tablet, la composición conserva los tamaños anteriores.

## Requisitos no funcionales

- Mantener las posiciones y tamaños de la composición centralizados en los datos del hero.
- Conservar la semántica y el comportamiento accesible existentes.

## Exclusiones

- Rediseñar los SVG, mover las figuras o cambiar la altura del hero.

## Validación

- `npm run build` y `npm run lint`: correctos.
- Navegador integrado de Codex, viewport de 320 CSS px: revisión visual de las figuras y etiquetas; ancho desplazable del documento de 320 px, sin desbordamiento horizontal.
- Navegador integrado de Codex, teclado: Tab pasa de «Otros» a «Ilustración» con contorno de foco visible de 3 px; Enter abre la ruta de Ilustración.
- Alcance de la comprobación: Inicio en español a 320 CSS px; no se repitió una auditoría global ni una prueba con lector de pantalla porque no cambió la semántica.
