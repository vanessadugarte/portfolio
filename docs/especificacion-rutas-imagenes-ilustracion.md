# Especificación: rutas de imágenes de ilustración

## Objetivo

Adaptar las referencias de imágenes a la nueva carpeta `src/assets/images/projects/illustrations`.

## Alcance y flujo de usuario

- En inicio e Ilustración, las tarjetas de Medusas, Deep Sea y Jungle cargan sus miniaturas desde sus respectivas subcarpetas de `illustrations`.
- Al abrir Medusas, sus imágenes de portada, referencias, proceso y detalles cargan desde `illustrations/medusas`.

## Criterios de aceptación

- Ningún import o URL del código apunta a las ubicaciones anteriores de Medusas, Deep Sea o Jungle.
- Las miniaturas de los tres proyectos y todas las imágenes del detalle de Medusas se resuelven durante el build.
- El orden de proyectos, las rutas públicas y los textos permanecen vigentes.
- `npm run test:content`, `npm run build` y `npm run lint` finalizan correctamente.

## Requisitos no funcionales

- Conservar la estructura de contenido localizada y las alternativas de imagen existentes.
- Mantener las imágenes locales bajo `src/assets/images/projects/illustrations`.

## Exclusiones

- No se agregan proyectos ni imágenes nuevas al catálogo.
- No se modifica el diseño ni la navegación.

## Validación

- `npm run test:content`: 12 pruebas aprobadas.
- `npm run build`: correcto; Vite incluyó las tres miniaturas y los recursos del detalle de Medusas en `dist/assets`.
- `npm run lint`: correcto.
- Búsqueda de rutas anteriores en `src` y `docs`: sin coincidencias.
- El cambio solo altera rutas de archivos locales; no modifica semántica, controles, foco, texto alternativo ni estilos, por lo que no requiere una nueva evaluación de accesibilidad.
