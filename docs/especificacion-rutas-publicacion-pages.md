# Especificación: rutas de recursos en GitHub Pages

## Objetivo

Permitir que el portafolio publicado cargue sus recursos tanto bajo `/portfolio/` en GitHub Pages como desde la raíz de un futuro dominio propio.

## Alcance

- Generar referencias relativas para JavaScript, estilos, imágenes y favicon en la compilación de Vite.
- Conservar las rutas hash actuales de la aplicación.

## Flujo de usuario

Una persona abre la URL publicada y ve el portafolio con sus estilos, imágenes y navegación funcionales.

## Criterios de aceptación

- El HTML compilado referencia los recursos con rutas relativas.
- El favicon y los archivos compilados se resuelven bajo `/portfolio/` y bajo `/`.
- `npm run lint` y `npm run build` finalizan correctamente.
- La URL pública carga el HTML y los recursos después del despliegue.

## Requisitos no funcionales

- No cambiar contenido, interacción ni estructura semántica.
- Mantener compatibilidad con el despliegue actual de GitHub Pages.

## Exclusiones

- Configuración DNS o del dominio personalizado.
- Cambios en el diseño o en las rutas de React Router.
