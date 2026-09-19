# Especificación: tamaño de títulos de proyecto

## Objetivo

Unificar en 20 px el tamaño tipográfico del encabezado y los títulos de proyectos seleccionados, sin etiquetas de texto encima de los encabezados `h2`, y usar Google Sans en los encabezados `h2` y las etiquetas de categorías del hero.

## Alcance

- Crear un token Sass reutilizable para el tamaño del título de proyecto.
- Aplicar el token al encabezado `h2` y a los títulos `h3` de la sección de proyectos seleccionados en Inicio.
- Mantener el mismo tamaño en móvil, tablet y escritorio.
- Ocultar los párrafos de etiqueta que preceden a los encabezados `h2` de Inicio, Experiencia y las categorías de proyecto.
- Centralizar la tipografía Google Sans de los `h2` y las etiquetas de categorías del hero en un token Sass con alternativas de respaldo.

## Flujo de usuario

Al recorrer el portafolio, la persona ve los encabezados `h2` sin una etiqueta de texto ni un espacio vertical residual encima; en proyectos seleccionados, el encabezado y los títulos de cada proyecto mantienen un tamaño uniforme de 20 px.

## Criterios de aceptación

- Existe una variable Sass específica con valor `20px`.
- El encabezado de la sección y los títulos de las tarjetas consumen esa variable y no declaran el tamaño en línea.
- No existe una media query que cambie el tamaño de esos títulos.
- No se renderizan párrafos inmediatamente antes de los encabezados `h2` afectados.
- Todos los `h2` y las etiquetas de categorías del hero usan el token de tipografía Google Sans.
- `npm run lint` y `npm run build` finalizan correctamente.

## Requisitos no funcionales

- Conservar la arquitectura Sass existente basada en `@use` y tokens centralizados.
- No alterar el contenido, la navegación ni otros estilos tipográficos.

## Exclusiones

- Cambios de tamaño, peso, color o espaciado en títulos y etiquetas.
- Cambios de tipografía, peso, color o espaciado.
