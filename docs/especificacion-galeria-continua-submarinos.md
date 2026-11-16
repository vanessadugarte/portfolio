# Especificación: galería continua de Submarinos

## Objetivo

Mostrar las 14 páginas de Submarinos seguidas, sin números ni títulos visibles entre imágenes.

## Alcance y flujo de usuario

- La persona abre la ficha de Infografías navales y recorre las páginas de Submarinos en su orden actual.
- Después de la introducción de la galería, las imágenes se presentan una tras otra, sin pies, números ni separación visual entre páginas.

## Criterios de aceptación

- La galería muestra las 14 imágenes WebP en el mismo orden y sin texto visible entre ellas.
- Cada imagen mantiene una alternativa útil en español e inglés; la galería conserva su encabezado y el único `h1` de la ruta.
- Las imágenes siguen sin enlaces de ampliación y caben completas en una ventana de escritorio habitual.
- A 320 CSS px no hay desplazamiento horizontal.
- `npm run test:content`, `npm run lint` y `npm run build` finalizan correctamente.

## Requisitos no funcionales

- Mantener React/Vite, Sass, carga diferida y la línea base WCAG 2.2 A/AA.
- Conservar la navegación y el resto de la ficha.

## Exclusiones

- No se alteran los archivos de imagen ni se incorpora otra serie naval.
- No se añade un visor o mecanismo de zoom.

## Validación

- `npm run test:content`: 21 pruebas aprobadas; las 14 páginas conservan alternativas en ambos idiomas.
- `npm run lint`, `npm run build` y `git diff --check`: correctos.
- Navegador integrado de Codex (Chromium), localhost: 14 imágenes, cero pies, separación vertical de 0 px y alto de 560 px por imagen a 1280 × 800 CSS px. A 320 CSS px, la imagen mide 280 px de ancho y no hay desplazamiento horizontal.
- Se comprobó un único `h1` y las alternativas expuestas en el árbol de accesibilidad. La revisión se limitó a la galería modificada; no hay controles ni estados dinámicos nuevos.
