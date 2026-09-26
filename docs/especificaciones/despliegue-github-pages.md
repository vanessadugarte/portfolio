# Especificación: despliegue de producción en GitHub Pages

## Objetivo

Publicar el portafolio estático desde la rama `main` en GitHub Pages de forma reproducible y automática.

## Alcance

- Añadir un flujo de GitHub Actions que instale dependencias, compile la aplicación y publique únicamente el directorio `dist/`.
- Ejecutar la publicación tras cada actualización de `main` y permitir su ejecución manual desde GitHub Actions.
- Habilitar GitHub Pages para que use el origen de GitHub Actions.

## Flujos de usuario

1. Una persona visitante abre la URL pública de GitHub Pages y recibe la versión compilada más reciente de `main`.
2. La mantenedora integra cambios en `main`; la acción compila y publica esa revisión sin subir artefactos generados al repositorio.
3. La mantenedora puede repetir el despliegue desde la pestaña Actions cuando lo necesite.

## Criterios de aceptación

- El flujo se activa con un `push` a `main` o de forma manual.
- El flujo usa Node.js 22.20.0, ejecuta `npm ci` y `npm run build` antes de publicar.
- Sólo se publica el contenido de `dist/`.
- La URL del entorno de GitHub Pages queda registrada por el trabajo de despliegue.
- La compilación y el lint locales finalizan correctamente.

## Requisitos no funcionales

- El despliegue no requiere secretos personalizados.
- Sólo una publicación de Pages puede estar activa a la vez.
- La entrega conserva el uso de rutas hash para funcionar como sitio estático.

## Exclusiones

- Configurar dominio personalizado, DNS, analítica, formularios o redirecciones externas.
- Cambiar contenido, rutas o diseño de la aplicación.
