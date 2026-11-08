# Especificación: galería de Submarinos con todas las páginas aportadas

## Objetivo

Mostrar en la ficha de Infografías navales las páginas adicionales de Submarinos y permitir apreciar cada página completa dentro de la ventana en escritorio.

## Alcance y flujo de usuario

- La persona entra a la ficha desde la tarjeta de Infografías navales y recorre las páginas de Submarinos en el orden de la publicación.
- Cada página aparece directamente en la galería, con título y alternativa de imagen en el idioma activo.
- Las imágenes de la galería dejan de enlazar al archivo original o abrir nuevas pestañas.
- En escritorio, cada imagen y su pie caben verticalmente en una ventana habitual sin requerir desplazamiento para terminar de verla; en móvil se adaptan al ancho disponible.

## Criterios de aceptación

- Se incorporan los nuevos WebP distintos de la serie sin mostrar dos veces una misma imagen exportada.
- La galería conserva una sola secuencia ordenada de figuras, con textos localizados en español e inglés.
- Ninguna figura incluye un enlace de ampliación ni una acción de «ver a tamaño completo».
- A 1280 × 800 CSS px, cada imagen con su pie mide menos que la altura de la ventana; a 320 CSS px no hay desplazamiento horizontal.
- La navegación de proyectos, los metadatos de idioma y el único `h1` de la ruta siguen funcionando.
- `npm run test:content`, `npm run lint` y `npm run build` finalizan correctamente.

## Requisitos no funcionales

- Mantener React/Vite, Sass y los tokens existentes.
- Mantener WCAG 2.2 A/AA: alternativas útiles, semántica de figura y carga diferida de las imágenes posteriores a la primera.

## Exclusiones

- No se incorporan otras series navales ni se crea un visor o control de zoom.
- No se modifica la miniatura de la tarjeta ni se publica en `main`.

## Validación

- `npm run test:content`: 21 pruebas aprobadas, incluida la secuencia y las alternativas localizadas.
- `npm run lint`, `npm run build` y `git diff --check`: correctos.
- Navegador integrado de Codex (Chromium), localhost: a 1280 × 800 CSS px, cada figura mide 595 px de alto y no hay enlaces en la galería; la última imagen carga correctamente. A 320 CSS px, el ancho de la imagen es 280 px y no aparece desplazamiento horizontal.
- Se comprobó la semántica de imágenes y figuras, sus nombres accesibles y un único `h1`. No se añadió interacción dinámica; la revisión de accesibilidad se limitó al contenido informativo y al reflujo de esta ficha.
