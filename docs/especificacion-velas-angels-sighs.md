# Especificación: ficha de Angel's Sighs

## Objetivo

Completar la ficha bilingüe de Angel's Sighs para presentar la identidad visual de la marca, sus etiquetas y la colección de ilustraciones vectoriales creadas para imprimir en tapas de madera según cada fragancia.

## Alcance

- Mantener el proyecto dentro de la categoría Ilustración y conservar su slug `angels-sighs`.
- Sustituir el estado «Próximamente» por una ficha completa en español e inglés.
- Presentar el logo, el sistema de etiqueta, tres aplicaciones en velas y las diez ilustraciones finales disponibles en `src/assets/images/projects/illustrations/candles/`.
- Incorporar los dos videos de proceso de Lavender y Sacred Fire mediante versiones web H.264, con controles nativos, sin reproducción automática y con una ilustración de portada.
- Comunicar el año 2025, el trabajo de identidad visual e ilustración vectorial y el uso de Adobe Illustrator y Wacom Tablet.

## Flujos de usuario

1. La persona abre Angel's Sighs desde Ilustración y encuentra el contexto del encargo, el año, la técnica y las herramientas.
2. Recorre el logo y la etiqueta para comprender el sistema de identidad visual.
3. Consulta las aplicaciones en velas y la colección de ilustraciones diseñadas para las tapas de madera.
4. Reproduce, pausa o recorre con los controles nativos cualquiera de los dos videos de proceso.
5. Puede volver a Ilustración o navegar al proyecto anterior conservando el contexto de categoría.
6. Al cambiar el idioma, se actualizan el título del documento, los textos, los rótulos y las alternativas de las imágenes.

## Criterios de aceptación

- La ruta `/proyectos/angels-sighs` deja de mostrar «Próximamente» / «Coming soon» y contiene un único `h1` localizado.
- La ficha muestra `velas.png`, `logo-angel.jpg`, `logo-cuadrado.jpg`, `label.svg`, las tres aplicaciones `vela-*` y las diez ilustraciones cuadradas sin deformación y con alternativas útiles localizadas.
- Los videos de Lavender y Sacred Fire se muestran con controles nativos, `preload="metadata"`, portada, reproducción iniciada por la persona y una fuente H.264 compatible con navegadores actuales.
- La ficha técnica muestra año 2025, identidad visual e ilustración vectorial, Adobe Illustrator y Wacom Tablet, con etiquetas localizadas.
- En escritorio, el `h1` mide `5rem`, la introducción no supera `44rem` y la ficha técnica no supera `23rem`, con separación visual entre ambas.
- En móvil, todo el contenido refluye a 320 CSS px sin desplazamiento horizontal; las galerías y videos conservan su proporción.
- No se crea una paleta explicativa: cualquier representación cromática propia del material de marca se presenta únicamente como parte de la imagen original.
- La navegación por teclado, el foco de entrada, los controles nativos de video, `html[lang]` y la navegación SPA existentes se conservan.

## Requisitos no funcionales

- Reutilizar el catálogo centralizado, React Router, Sass y la arquitectura bilingüe, sin textos de interfaz dentro del componente.
- Cargar de forma prioritaria solo la imagen principal; el resto de las imágenes usa carga diferida y dimensiones intrínsecas.
- Mantener WCAG 2.2 A/AA como línea base, con estructura semántica, alternativas localizadas, foco visible y videos que no se reproducen automáticamente.
- Evitar dependencias nuevas y preservar las demás fichas y cambios en curso del catálogo.

## Exclusiones

- No se modifica el orden del catálogo ni se incorpora Angel's Sighs a Trabajos seleccionados.
- No se crean nuevas ilustraciones, fotografías, animaciones ni una identidad diferente a los recursos proporcionados.
- No se añaden fragancias o nombres comerciales que no estén identificados por los archivos existentes.

## Validación

- `npm run test:content` (19 pruebas), `npm run lint`, `npm run build` y `git diff --check`: correctos.
- Navegador integrado (Chromium), a 1280 CSS px: un único `h1` de 80 px, introducción de 704 px (`44rem`), ficha técnica de 368 px (`23rem`) con separador, 17 imágenes, dos videos y ningún desbordamiento horizontal.
- Navegador integrado (Chromium), a 320 CSS px: un único `h1`, `scrollWidth` y `clientWidth` de 320 px, galerías reordenadas sin recorte y ambos videos visibles con controles nativos.
- Los dos videos H.264 cargaron completamente (`readyState` 4) con dimensiones de 1280 × 712 px, portada, controles y sin reproducción automática. No se realizó una auditoría del contenido de la pista de audio; si contiene voz relevante, requerirá subtítulos sincronizados.
- Al abrir la ficha mediante navegación SPA desde Ilustración, el foco llegó al `h1` con `scrollY` 0. El cambio a español actualizó el título del documento, el contenido, las alternativas y `html[lang]` sin recargar la página.
- La revisión de accesibilidad se limitó a semántica, jerarquía de encabezados, contenido informativo, idioma, foco, reflujo y controles de video de esta ruta; no se modificaron los controles compartidos ni se ejecutó una auditoría global con lector de pantalla.
