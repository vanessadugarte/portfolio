# Especificación: foco al cargar el sitio

## Objetivo

Evitar que el encabezado de la ruta inicial reciba foco programático al abrir el portafolio, manteniendo la orientación de foco al navegar entre rutas de la SPA.

## Alcance

- Identificar la primera ubicación cargada en la sesión.
- No mover el foco al encabezado de esa ubicación inicial.
- Conservar el foco programático del encabezado tras una navegación posterior entre rutas.

## Flujo de usuario

Al entrar al sitio, el hero se muestra sin un indicador de foco. Tras activar una navegación interna, el encabezado de la nueva página recibe foco para orientar a quien navega con teclado o lector de pantalla.

## Criterios de aceptación

- La primera ruta abierta, incluida Inicio, no enfoca su `h1` automáticamente.
- La primera ruta sigue asignando su título localizado al documento.
- Una navegación posterior entre rutas conserva el enfoque del encabezado de destino sin desplazar la página de forma inesperada.
- `npm run lint` y `npm run build` finalizan correctamente.

## Requisitos no funcionales

- Mantener la navegación por teclado y la orientación de foco conforme a la base WCAG 2.2 A/AA del proyecto.
- No depender de que React Router asigne una clave de historial concreta a la carga inicial.

## Exclusiones

- Cambios visuales en el hero, la navegación o los estilos globales de foco.
