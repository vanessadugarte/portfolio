# Especificación: foco inicial en el detalle de proyecto

## Objetivo

Evitar que el encabezado principal del detalle de proyecto muestre un contorno de foco al entrar desde otra ruta, sin perder la orientación de foco necesaria en la navegación SPA.

## Alcance y flujo

- Al abrir un proyecto desde una tarjeta o enlace interno, el `h1` del detalle continúa recibiendo foco programático.
- El encabezado, al no ser un control interactivo ni pertenecer al orden de tabulación, no muestra un contorno visual.
- Los enlaces y controles de la página conservan sus indicadores de `:focus-visible`.

## Criterios de aceptación

- Al entrar a Medusas desde Inicio, no aparece un contorno alrededor del bloque «01 Medusas».
- El elemento activo tras la navegación sigue siendo `#project-detail-title`.
- Los enlaces «Volver» y de paginación mantienen su foco visible al navegar con teclado.

## Requisitos no funcionales

- Mantener el título de documento localizado y el foco programático con `preventScroll`.
- Limitar el cambio visual a los encabezados de detalle con `tabindex="-1"`.
- Conservar la línea base WCAG 2.2 A/AA del proyecto.

## Exclusiones

- No se modifica el manejo de foco de otras rutas.
- No se cambia la apariencia del foco de elementos interactivos.

## Validación

- Herramienta: navegador integrado de Codex con la aplicación local de Vite. Entrada directa a `#/proyectos/medusas`: título de documento «Medusas | Vanessa Dugarte», `html[lang="es"]` y sin contorno en el encabezado; en una carga inicial directa el foco permanece en `body`.
- Teclado en el mismo navegador: desde Inicio, `Enter` sobre «Ver proyecto: Medusas» enfoca `#project-detail-title` sin contorno; `Shift+Tab` enfoca «Volver a ilustración» con anillo visible de 3 px.
- Limitación: esta comprobación no incluye lector de pantalla; no se modificaron nombres accesibles ni estados dinámicos.
