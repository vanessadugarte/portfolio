# Especificación: luminiscencia de vectores del hero

## Objetivo

Hacer claramente perceptible la luminiscencia turquesa de los vectores de categoría al interactuar con ellos en el hero de inicio, para armonizarla con el brillo de sus etiquetas.

## Alcance y flujo

En escritorio, al situar el cursor sobre un vector de categoría, el vector conserva el color turquesa, la rotación y la escala actuales, y muestra un halo luminoso de mayor alcance. Al navegar con teclado, el mismo tratamiento visual permanece disponible junto con el indicador de foco existente.

## Criterios de aceptación

- El hover de cada vector de categoría mantiene el color turquesa actual.
- El halo turquesa del vector es visiblemente más luminoso que el estado previo, sin modificar su tamaño o transformación.
- El estado `:focus-visible` conserva el mismo halo actualizado y su contorno de foco.
- El cambio no altera los vectores decorativos ni la presentación móvil.
- `npm run lint` y `npm run build` finalizan correctamente.

## Requisitos no funcionales

- Reutilizar los tokens Sass existentes y respetar las transiciones configuradas.
- Mantener la navegación por teclado y el foco visible existentes.

## Exclusiones

- Cambios de contenido, rutas, composición, color base o animación del hero.
- Modificaciones de los vectores decorativos.

## Validación

- Navegador integrado (Chromium), inicio a 1280 px: al pasar el cursor sobre cada vector de categoría, el halo turquesa se aprecia con más intensidad y la etiqueta conserva su brillo.
- Navegador integrado (Chromium), inicio a 1280 px: al tabular hacia un vector de categoría, se conserva el halo y el contorno de foco visible.
- `npm run lint` y `npm run build` finalizan correctamente.
