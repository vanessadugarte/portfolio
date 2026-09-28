# Especificación: portadas orgánicas de ilustración en móvil

## Objetivo

Dar más presencia a las obras principales con máscara orgánica en las fichas de ilustración cuando se ven en móvil.

## Alcance

- Ampliar horizontalmente las portadas orgánicas de Medusas, Deep Sea, Pantano y Game Icons solo por debajo del punto de quiebre de tablet.
- Reducir proporcionalmente las tres ramitas decorativas que rodean la portada de Pantano en ese mismo tamaño.

## Flujo de usuario

1. La persona abre una ficha de ilustración en un teléfono.
2. Ve la obra principal con más ancho disponible y, en Pantano, las ramitas como acentos secundarios.

## Criterios de aceptación

- Las portadas orgánicas dejan aproximadamente 8 px de espacio a cada lado a 320 CSS px, sin deformar la obra ni la máscara.
- Ambas obras de Deep Sea mantienen su disposición móvil actual.
- Las tres ramitas de Pantano se ven más pequeñas en móvil y conservan su carácter decorativo.
- Desde el punto de quiebre de tablet, el tamaño de las portadas y los adornos no cambia.
- No aparece desplazamiento horizontal a 320 CSS px ni a 200 % de zoom.

## Requisitos no funcionales

- Mantener Sass, las imágenes y alternativas existentes, el orden de lectura y la navegación.

## Exclusiones

- No modificar las galerías de proceso, los detalles, otras categorías ni los recursos fuente.

## Validación

- `npm run build`, `npm run lint` y `git diff --check`: correctos.
- Navegador integrado (Chromium), 320 CSS px: las portadas de Medusas, Deep Sea, Pantano y Game Icons ocupan de x=8 a x=312; no hay desplazamiento horizontal. Se comprobó visualmente Pantano y sus ramitas.
- Navegador integrado (Chromium), 641 CSS px: la portada de Pantano recupera el margen de tablet (24 px); no hay desplazamiento horizontal.
- El zoom de 200 % y lectores de pantalla no se probaron de forma independiente; no cambiaron controles, semántica ni alternativas.
