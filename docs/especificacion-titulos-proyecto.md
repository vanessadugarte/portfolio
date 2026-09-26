# Especificación: tamaños de títulos de proyecto y sección

## Objetivo

Unificar en 32 px el tamaño tipográfico y en `-0.035em` el interletrado de los encabezados `h2` de las landings de categoría, Trabajos seleccionados y Experiencia de Inicio. Mantener en 20 px los títulos `h3` de proyectos seleccionados, sin etiquetas de texto encima de los encabezados `h2`, y usar Google Sans en los encabezados `h2` y las etiquetas de categorías del hero.

## Alcance

- Crear tokens Sass reutilizables para el tamaño del título de proyecto y del encabezado de sección.
- Aplicar el token de 32 px a los `h2` de las landings de categoría, Trabajos seleccionados y Experiencia de Inicio.
- Aplicar el token de interletrado a esos mismos `h2`.
- Conservar la capitalización de oración en el `h2` «Trabajos seleccionados»; solo su letra inicial va en mayúscula.
- Mantener el token de 20 px en los títulos `h3` de la sección de proyectos seleccionados en Inicio.
- Mantener esos tamaños en móvil, tablet y escritorio.
- Ocultar los párrafos de etiqueta que preceden a los encabezados `h2` de Inicio, Experiencia y las categorías de proyecto.
- Centralizar la tipografía Google Sans de los `h2` y las etiquetas de categorías del hero en un token Sass con alternativas de respaldo.

## Flujo de usuario

Al recorrer el portafolio, la persona ve los encabezados `h2` sin una etiqueta de texto ni un espacio vertical residual encima. Las landings de categoría, Trabajos seleccionados y Experiencia de Inicio usan un tamaño uniforme de 32 px, mientras los títulos de sus tarjetas de proyecto se mantienen en 20 px.

## Criterios de aceptación

- Existen variables Sass específicas con valores `20px` y `32px`.
- Los `h2` de las landings de categoría, Trabajos seleccionados y Experiencia de Inicio consumen las variables de `32px` y `-0.035em`, y no declaran esos valores en línea.
- Los títulos `h3` de las tarjetas consumen la variable de `20px` y no declaran el tamaño en línea.
- El `h2` de Trabajos seleccionados se muestra como «Trabajos seleccionados», sin transformación a mayúsculas.
- No existe una media query que cambie el tamaño de esos títulos.
- No se renderizan párrafos inmediatamente antes de los encabezados `h2` afectados.
- Todos los `h2` y las etiquetas de categorías del hero usan el token de tipografía Google Sans.
- `npm run lint` y `npm run build` finalizan correctamente.

## Requisitos no funcionales

- Conservar la arquitectura Sass existente basada en `@use` y tokens centralizados.
- No alterar el contenido, la navegación ni otros estilos tipográficos.

## Exclusiones

- Cambios adicionales de tipografía, peso, color o espaciado en títulos y etiquetas.
