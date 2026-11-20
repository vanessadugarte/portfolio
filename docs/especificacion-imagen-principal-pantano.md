# Imagen principal de Pantano

## Objetivo

Mostrar la ilustración principal de Pantano con su contorno rectangular original y esquinas redondeadas de 16 px, ligeramente más pequeña y sin adornos superpuestos.

## Alcance

- Quitar la máscara orgánica únicamente de la imagen principal de la ficha de Pantano.
- Reducir ligeramente el ancho visible de la imagen principal y quitar los tres adornos del hero.
- Conservar la imagen, sus proporciones originales y las máscaras de la sección Detalles.

## Flujo de usuario

Al abrir la ficha de Pantano en móvil, tablet o escritorio, la persona ve la ilustración principal completa con esquinas de 16 px y sin adornos encima.

## Criterios de aceptación

- La imagen principal de Pantano no recibe la clase ni la variable de máscara orgánica.
- La imagen principal muestra su contorno rectangular con `border-radius: 16px` en todos los tamaños.
- La imagen ocupa un poco menos de ancho en móvil, tablet y escritorio; mantiene sus proporciones y queda centrada en su espacio.
- No aparecen los tres adornos del hero de Pantano ni se produce desbordamiento horizontal a 320 px.
- Las imágenes de Detalles y las fichas de otros proyectos conservan su presentación actual.
- `npm run build` y `npm run lint` terminan correctamente.

## Requisitos no funcionales

Conservar la alternativa textual de la imagen, la adaptación responsive y el comportamiento de movimiento reducido existente.

## Exclusiones

No cambiar el archivo de imagen, su recorte, la composición del texto del hero ni otras máscaras.

## Validación

- `npm run build`, `npm run lint` y `npm run test:content`: correctos; 22 pruebas de contenido aprobadas.
- Navegador integrado de Codex, ficha de Pantano: en escritorio (1280 px) la imagen principal mide 512 px de ancho; en móvil (320 px), 280 px. Conserva `border-radius: 16px` y `mask-image: none`. A 320 px se confirmaron cero adornos del hero y ningún desbordamiento horizontal.
- La comprobación visual cubre el contorno y el reflujo de esta ficha; no constituye una auditoría WCAG completa.
