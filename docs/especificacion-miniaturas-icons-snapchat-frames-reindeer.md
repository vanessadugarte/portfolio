# Especificación: Iconos de juego, Snapchat Frames y Reindeer en Ilustración

## Objetivo

Mostrar los tres proyectos de ilustración con las miniaturas entregadas en sus respectivas carpetas. El proyecto inicialmente llamado Icons se actualizó a Iconos de juego / Game Icons cuando cambió el nombre de su carpeta; véase [la especificación del ajuste](especificacion-nuevos-proyectos-ilustracion-otros.md).

## Alcance y flujos de usuario

- En la categoría Ilustración, la persona encuentra tarjetas de Iconos de juego, Snapchat Frames y Reindeer junto a los proyectos existentes.
- Cada tarjeta presenta su miniatura, título, tipo y descripción en el idioma activo.
- Al abrir cualquiera de las tarjetas, su ruta propia muestra un título localizado y el estado de detalle pendiente.

## Criterios de aceptación

- Iconos de juego, Snapchat Frames y Reindeer usan respectivamente las miniaturas de `src/assets/images/projects/illustrations/game-icons/`, `snapchat-frames/` y `reindeer/`.
- Los tres proyectos pertenecen solo a Ilustración y no cambian los cuatro Trabajos seleccionados del inicio.
- Los títulos, descripciones y alternativas útiles de las miniaturas están disponibles en español e inglés.
- Las rutas `/proyectos/game-icons`, `/proyectos/snapchat-frames` y `/proyectos/reindeer` resuelven cada proyecto y presentan «Próximamente» / «Coming soon» mientras no haya contenido de detalle.

## Requisitos no funcionales

- Mantener la navegación por teclado, el foco y título de documento de las rutas SPA, el reflujo responsive y la línea base WCAG 2.2 A/AA.
- Mantener los textos localizados fuera de los componentes y reutilizar el catálogo y las tarjetas existentes.

## Exclusiones

- No se crean galerías o detalles sin imágenes y contenido adicionales.
- No se agregan estos trabajos a la sección de Trabajos seleccionados.

## Validación

- `npm run test:content`: 12 pruebas aprobadas; catálogo, traducciones, rutas, orden y detalles pendientes de los tres proyectos.
- `npm run build` y `npm run lint`: completados sin errores; el build incluye las tres miniaturas.
- Navegador integrado de Codex (Chromium), antes del cambio de nombre: la categoría mostró las tres tarjetas y sus imágenes cargaron a 760×500 con alternativas localizadas en español e inglés; Icons abrió su ruta con el `h1` enfocado y «Próximamente» / «Coming soon» al cambiar el idioma. Las rutas directas de Snapchat Frames y Reindeer mostraron título de documento, `html[lang="es"]`, `h1` enfocado y estado pendiente. La validación del nombre y la ruta nuevos se documenta en la especificación enlazada.
- A 320 CSS px, la categoría y los detalles comprobados no presentan desplazamiento horizontal; Tab desde el encabezado de la categoría lleva al primer enlace de proyecto. Revisión limitada a las nuevas tarjetas, rutas, imágenes, idioma, foco y reflujo; no se ejecutó escáner ni lector de pantalla al reutilizar componentes y comportamiento existentes.
