# Especificación: códigos hexadecimales en la paleta de Medusas

## Objetivo

Hacer visible la información técnica de la paleta de color de Medusas sin restar protagonismo a las muestras cromáticas.

## Alcance y flujo

Al llegar a la sección «Referencias» del detalle de Medusas, la persona ve cada círculo de color con su código hexadecimal inmediatamente debajo. En cualquier ancho de pantalla, las muestras se reordenan según el espacio disponible sin ocultar códigos.

## Criterios de aceptación

- Cada una de las seis muestras de la paleta muestra su código hexadecimal visible bajo el círculo correspondiente.
- Los círculos conservan su forma, color y tamaño responsive actual.
- Los códigos usan una tipografía monoespaciada, no se parten en dos líneas y siguen el orden de las muestras.
- Los códigos continúan disponibles para tecnologías de asistencia.
- `npm run lint` y `npm run build` finalizan correctamente.

## Requisitos no funcionales

- Mantener contraste, reflujo y legibilidad a 320 CSS px y en escritorio.
- No introducir controles interactivos ni cambios de navegación.

## Exclusiones

- Copiar códigos al portapapeles u otra interacción sobre las muestras.
- Modificar los valores de la paleta, sus referencias o las demás secciones del proyecto.

## Validación

- Chromium, ruta `#/proyectos/medusas` en escritorio y a 390 px: los seis códigos se muestran junto a sus muestras, sin desbordamiento horizontal.
- `npm run lint` y `npm run build` correctos.
