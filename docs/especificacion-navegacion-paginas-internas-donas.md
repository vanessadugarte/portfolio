# Especificación: navegación en las páginas internas de Donas

## Objetivo

Permitir salir de cualquier página interna de Donas hacia la categoría Front-end + UX/UI o hacia los proyectos adyacentes del catálogo.

## Alcance

- Mostrar la misma navegación de ficha de proyecto en Galería, Lugares, Recetas y Contacto.
- Reutilizar textos y destinos localizados del menú «Volver a categoría», «Anterior» y «Siguiente».
- Alinear verticalmente el menú de las páginas internas con el de la portada de Donas, sin espacio adicional encima.

## Flujo de usuario

Al abrir una página interna de Donas, la persona encuentra el menú de navegación antes de la navegación propia de Donas. Puede volver a Front-end + UX/UI o abrir el proyecto anterior o siguiente del catálogo de esa categoría.

## Criterios de aceptación

- Las cuatro rutas internas muestran «Volver a categoría», «Anterior» y «Siguiente» cuando existen proyectos vecinos.
- «Volver a categoría» lleva a Front-end + UX/UI; «Anterior» y «Siguiente» llevan a los proyectos vecinos de Donas en esa categoría.
- Los enlaces conservan sus nombres accesibles y se traducen al cambiar a inglés.
- La portada de Donas y las demás fichas conservan su navegación.
- El menú de las páginas internas comienza a la misma altura que el de la portada de Donas.

## Requisitos no funcionales

- Usar enlaces nativos con foco visible y orden lógico de teclado.
- Mantener el diseño responsive y las convenciones de Sass.

## Exclusiones

- No cambiar el contenido ni los flujos del sitio de Donas.

## Validación

- `npm run lint` y `npm run build`: correctos.
- Navegador integrado (Chromium): comprobadas las cuatro rutas internas en español; los tres enlaces muestran los textos y destinos previstos.
- Navegador integrado (Chromium): en Contacto, la interfaz en inglés conserva los tres enlaces con nombres accesibles traducidos.
- Teclado en Chromium: Tab recorre «Volver a categoría», «Anterior» y «Siguiente» en ese orden, con foco visible.
- Viewport de 320 CSS px en Chromium: los enlaces se distribuyen en dos filas sin desbordamiento horizontal (`scrollWidth` y ancho visible: 320 px).
- Navegador integrado (Chromium): la posición superior del menú de la portada y de las páginas internas coincide en escritorio (96 px) y a 320 CSS px (120 px); diferencia de 0 px en ambos casos.
- Alcance de la comprobación: navegación de Donas en Chromium; no se realizó una auditoría global ni una prueba con lector de pantalla.
