# Especificación: adornos de peces en Deep Sea

## Objetivo

Incorporar `little-fish-2` y `little-fish-3` como adornos de la obra principal de Deep Sea en escritorio.

## Alcance

- Mostrar los dos SVG seleccionados sobre los espacios libres del fondo del hero de Deep Sea desde el punto de quiebre de escritorio (64 rem), excluyendo `little-fish-1` y `adorno-fish` para evitar adornos aislados. No se superponen a la ilustración final, la paleta ni las referencias.
- Conservar la composición actual en tablet y móvil y mantener intactas las demás fichas de proyecto.

## Flujo de usuario

1. La persona abre la ficha de Deep Sea en escritorio.
2. Recorre el resumen y las dos obras finales acompañadas por los peces decorativos.
3. Continúa hacia referencias, proceso y detalles con el mismo orden de lectura.

## Criterios de aceptación

- Los dos SVG seleccionados aparecen sobre el fondo libre de la composición de Deep Sea a partir de 64 rem y no se muestran por debajo de ese ancho; `little-fish-1` y `adorno-fish` no aparecen en escritorio.
- Los adornos no cubren el título, la descripción ni los controles de navegación y no producen desplazamiento horizontal.
- Los adornos carecen de texto alternativo y quedan ocultos a tecnologías de asistencia; tampoco capturan eventos del puntero.
- La página conserva las obras finales y el contenido localizable en español e inglés.

## Requisitos no funcionales

- Reutilizar los datos de medios del proyecto y los estilos Sass del detalle.
- Preservar el diseño responsive y la accesibilidad existente.

## Exclusiones

- No añadir animación ni interacciones a los peces.
- No cambiar el contenido editorial o los recursos visuales de otros proyectos.

## Validación

- `npm run build` y `npm run lint`: correctos.
- Navegador integrado (Chromium): inspección visual a 1440 y 1024 CSS px. Los cuatro peces acompañan la obra sin cubrir el resumen ni las referencias; `document.documentElement.scrollWidth` coincide con el ancho de 1440 y 1024 px.
- Navegador integrado (Chromium): a 390 y 320 CSS px, los cuatro adornos tienen `display: none`; a 320 px no hay desbordamiento horizontal. Los cuatro elementos usan `alt=""`, `aria-hidden="true"` y `pointer-events: none` cuando se muestran.
- Limitación: esta comprobación visual y de semántica se limita a los adornos de Deep Sea; no constituye una auditoría WCAG global.
