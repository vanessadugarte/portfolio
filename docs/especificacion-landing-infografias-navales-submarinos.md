# Especificación: primera etapa de Infografías navales — Submarinos

## Objetivo

Reemplazar el estado «Próximamente» de Infografías navales por una ficha inicial que permita revisar en localhost las cinco primeras páginas de Submarinos exportadas para la web.

## Alcance y flujo de usuario

- La tarjeta existente de Infografías navales en Otros conserva su ruta y abre una ficha bilingüe.
- La ficha presenta el proyecto y muestra las cinco páginas disponibles en su orden: patrón, portada, índice, título de prólogo y texto de prólogo.
- Cada página puede abrirse a tamaño completo para leer el contenido del diseño.
- Los 18 JPG de la serie Submarinos se sustituyen por los WebP aportados. Los originales editables se conservan fuera del repositorio.

## Criterios de aceptación

- La ruta existente muestra un único `h1`, introducción y galería con cinco imágenes WebP de 2376 × 1836 px, en orden numérico.
- Los títulos, descripciones, alternativas de imagen y enlaces de ampliación de la ficha se localizan en español e inglés; `html[lang]` y el título del documento siguen el idioma activo.
- Las imágenes se adaptan al ancho de pantalla sin desplazamiento horizontal a 320 CSS px y se pueden abrir por teclado con foco visible.
- La navegación de regreso y entre proyectos existente sigue funcionando.
- Los JPG de `naval-infographics/submarines` ya no están en el repositorio; los recursos de Portaaviones no cambian.
- `npm run test:content`, `npm run lint` y `npm run build` finalizan correctamente.

## Requisitos no funcionales

- Reutilizar React Router, el catálogo y la navegación existentes.
- Mantener la línea base WCAG 2.2 A/AA, la semántica de galería y la carga diferida de imágenes posteriores a la primera.
- Los textos se almacenan en el catálogo de traducciones; los estilos nuevos usan Sass y tokens compartidos.

## Exclusiones

- No se incorporan todavía las páginas restantes de Submarinos ni otras series navales.
- No se crea un visor interactivo ni se cambia la miniatura de la tarjeta.
- No se publica en `main` en esta etapa.

## Validación

- `npm run test:content`: 21 pruebas aprobadas, incluida la correspondencia entre las cinco páginas y sus textos localizados.
- `npm run lint`, `npm run build` y `git diff --check`: correctos. Vite incluye los cinco WebP en `dist/assets`.
- Navegador integrado de Codex (Chromium), localhost: la ruta directa muestra un único `h1`, las cinco imágenes cargan a 2376 px de ancho y los enlaces tienen nombres accesibles. A 320 CSS px y 1280 CSS px no hay desplazamiento horizontal; el título usa 80 px desde escritorio. Se comprobó Tab hasta el primer enlace de la galería, con foco visible, y Escape para cerrar el menú móvil.
- En inglés se actualizaron `html[lang]`, el título del documento, el `h1`, la navegación y los textos de la galería. Las páginas originales de la publicación permanecen en español como piezas del portafolio; sus alternativas describen el contenido en el idioma activo.
- La revisión de accesibilidad se limitó a semántica, nombres, foco, idioma y reflujo de esta ficha. No se ejecutó escáner ni lector de pantalla: la galería usa figuras, enlaces e imágenes nativas y no añade estados dinámicos.
