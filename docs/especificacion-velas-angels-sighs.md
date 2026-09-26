# Especificación: proyecto Velas Angel's Sighs

## Objetivo

Incorporar Velas Angel's Sighs al catálogo de Ilustración para presentar las ilustraciones creadas para sus tapas y etiquetas, junto con la selección de combinaciones de color de los vasos.

## Alcance y flujo de usuario

- La categoría Ilustración muestra una tarjeta de Velas Angel's Sighs con su miniatura.
- La tarjeta muestra título, tipo, descripción y texto alternativo localizado en español e inglés.
- Al abrirla, la ruta de proyecto reutiliza el estado de detalle pendiente existente.

## Criterios de aceptación

- El proyecto usa `src/assets/images/projects/illustrations/candles/angels-sighs-thumbnail.png` y aparece solo en Ilustración.
- El contenido en español comunica las ilustraciones de tapas y etiquetas y la elección de colores de los vasos; su equivalente en inglés expresa el mismo alcance.
- No se añade a Trabajos seleccionados ni se crea una galería o landing de detalle sin material adicional.
- La tarjeta conserva la navegación SPA, el foco gestionado y el comportamiento de teclado de los componentes existentes.

## Requisitos no funcionales

- Reutilizar el catálogo centralizado y las traducciones, sin textos de interfaz en componentes.
- Conservar la línea base WCAG 2.2 A/AA, incluidos alternativa útil, foco visible y reflujo a 320 CSS px.

## Exclusiones

- No se modifican las otras categorías, los Trabajos seleccionados ni los proyectos existentes.
- No se añaden recursos de detalle adicionales.

## Validación

- `npm run test:content`, `npm run build` y `npm run lint` deben finalizar correctamente.
- La comprobación manual debe confirmar la tarjeta localizada, el acceso mediante teclado y el estado «Próximamente» / «Coming soon» de su detalle.
