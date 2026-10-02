# Especificación: tamaño de los códigos de las paletas

## Objetivo

Mostrar los códigos hexadecimales de todas las paletas de proyectos con una tipografía legible y uniforme.

## Alcance

- Aplicar 14 px a los códigos hexadecimales del componente compartido de paleta, incluido Super reno.
- Mantener la disposición actual de las muestras en cada proyecto y punto de quiebre.

## Flujo de usuario

1. La persona abre cualquier ficha de proyecto con paleta de colores.
2. Consulta el código hexadecimal bajo cada muestra en móvil, tablet o escritorio.

## Criterios de aceptación

- Todos los códigos de las paletas se muestran a 14 px con el tamaño raíz predeterminado y nunca bajan de 14 CSS px; ninguna regla de proyecto los reduce.
- Las muestras y códigos se mantienen visibles sin desplazamiento horizontal a 320 CSS px.

## Requisitos no funcionales

- Definir el tamaño mediante un token Sass reutilizable que combine `rem` con un mínimo de 14 px para respetar los aumentos de fuente configurados por la persona.
- Conservar la semántica y el contraste de las paletas existentes.

## Exclusiones

- No modificar colores, contenido, rutas ni la tipografía de otros textos.

## Validación

- `npm run build`, `npm run lint` y `git diff --check`: correctos.
- Navegador integrado de Codex (Chromium): las seis fichas con paleta muestran códigos de 14 px a 320 CSS px y no presentan desplazamiento horizontal. Se comprobaron además Pantano, Super reno e Iconos de juego a 768, 1024 y 1280 CSS px con el mismo tamaño y sin desbordamiento.
- La revisión se limita al tamaño calculado y al reflujo de las paletas; no cambiaron estructura semántica, controles ni foco.
