# Especificación: nuevos proyectos de ilustración

## Objetivo

Mostrar Deep Sea y Jungle como proyectos de la categoría Ilustración usando las miniaturas entregadas.

## Alcance y flujo de usuario

- Al visitar Ilustración, la persona encuentra Medusas, Deep Sea y Jungle como tarjetas de proyecto.
- Cada tarjeta muestra su miniatura, título, tipo y descripción en el idioma activo.
- Al abrir Deep Sea o Jungle, se accede a su ruta propia con un estado de detalle pendiente y título localizado.

## Criterios de aceptación

- Deep Sea usa `src/assets/images/projects/illustrations/deep-sea/deep-sea-thumbnail.jpg` y Jungle usa `src/assets/images/projects/illustrations/jungle/jungle-illustration-thumbnail.jpg`.
- Ambos proyectos aparecen solo en Ilustración y no alteran los cuatro Trabajos seleccionados del inicio.
- Las tarjetas tienen texto y alternativas de imagen en español e inglés.
- Las rutas `#/proyectos/deep-sea` y `#/proyectos/jungle` muestran el título correspondiente y el estado «Próximamente» / «Coming soon».

## Requisitos no funcionales

- Conservar el diseño responsive, el foco de navegación SPA y la línea base WCAG 2.2 A/AA.
- Mantener los textos fuera de los componentes para facilitar su localización.

## Exclusiones

- No se crean galerías ni contenido de detalle hasta recibir más material de estos proyectos.
- No se incorporan las miniaturas a Trabajos seleccionados.

## Validación

- `npm run test:content`: 12 pruebas aprobadas; se verifican el catálogo, los idiomas, el orden de seleccionados y el estado pendiente de ambos proyectos.
- `npm run build` y `npm run lint`: completados sin errores.
- Navegador integrado de Codex (Chromium): las tres tarjetas aparecen en Ilustración, las dos miniaturas cargan y sus alternativas están presentes en inglés. Al abrir Deep Sea desde su tarjeta, el `h1` recibe foco, el título de documento es correcto y aparece «Próximamente». El cambio de idioma muestra «Coming soon» y `html[lang="en"]`. La ruta directa de Jungle muestra su `h1`, título de documento y estado en inglés.
- En una ventana de 320 CSS px, las tarjetas mantienen el reflujo sin desplazamiento horizontal. La comprobación de accesibilidad se limitó a estructura, nombres de las tarjetas, foco de entrada, idioma y reflujo; no incluyó lector de pantalla.
