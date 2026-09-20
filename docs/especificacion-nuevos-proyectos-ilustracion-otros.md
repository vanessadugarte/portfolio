# Especificación: personajes de Muchokids e infografías navales

## Objetivo

Incorporar las nuevas miniaturas a las categorías correspondientes y ajustar el proyecto de iconos al nombre y carpeta actuales.

## Alcance y flujos de usuario

- En Ilustración se muestran Muchokids Nationalities y el proyecto existente de iconos, ahora identificado como Iconos de juego / Game Icons.
- En Otros se muestra Infografías navales / Naval Infographics.
- Cada tarjeta presenta su miniatura, título, tipo y descripción en el idioma activo. Al abrirla, se muestra su ruta de proyecto con un estado de detalle pendiente.

## Criterios de aceptación

- Muchokids Nationalities usa `src/assets/images/projects/illustrations/muchokids-nationalities/muchokids-nationalities-760x500.jpg` y solo aparece en Ilustración.
- Iconos de juego usa `src/assets/images/projects/illustrations/game-icons/iconos-760x500.jpg`, sustituye al registro Icons y no produce una tarjeta duplicada.
- Infografías navales usa `src/assets/images/projects/other/ship-infographic-thumbnail.jpg` y solo aparece en Otros.
- Los tres proyectos tienen título, descripción y alternativa de imagen localizados en español e inglés; mantienen la navegación SPA y el estado «Próximamente» / «Coming soon» mientras no haya material de detalle.
- Los cuatro Trabajos seleccionados del inicio mantienen su orden y contenido.

## Requisitos no funcionales

- Reutilizar catálogo, componentes y rutas existentes; conservar foco visible y orientado tras navegación, título de documento localizado, reflujo a 320 CSS px y la línea base WCAG 2.2 A/AA.
- No escribir textos de interfaz directamente en componentes.

## Exclusiones

- No crear galerías ni contenido de detalle sin material adicional.
- No cambiar la ruta de la categoría Otros ni añadir estos proyectos a Trabajos seleccionados.

## Validación

- `npm run test:content`: 13 pruebas aprobadas; incluyen categorías, rutas, traducciones, detalles pendientes y conservación de Trabajos seleccionados.
- `npm run build` y `npm run lint`: completados sin errores; el build incluye las tres miniaturas.
- Navegador integrado de Codex (Chromium): Ilustración muestra Iconos de juego y Muchokids con imágenes cargadas y alternativas útiles; Otros muestra Infografías navales con su miniatura y alternativa. Las tarjetas abren sus rutas con `h1` enfocado y estado «Próximamente». El cambio de idioma de Infografías navales actualiza título, `html[lang]` y «Coming soon»; la tarjeta Game Icons también abre con Enter y orienta el foco al `h1`.
- A 320 CSS px, ambas categorías y los detalles comprobados en inglés no presentan desplazamiento horizontal. La revisión de accesibilidad se limitó a nombres, alternativas, idioma, foco/teclado y reflujo de los proyectos añadidos; no se ejecutó escáner ni lector de pantalla porque se reutilizan los componentes semánticos y el comportamiento de navegación existentes.
