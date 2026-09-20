# Especificación: ritmo vertical compacto

## Objetivo

Reducir los espacios verticales excesivos del sitio, en especial la transición entre Trabajos seleccionados y Experiencia en Inicio, sin perder legibilidad ni jerarquía visual.

## Alcance

- Ajustar el relleno inferior de Trabajos seleccionados y la altura mínima de la vista previa de experiencia en Inicio.
- Reducir los rellenos y separaciones verticales sobredimensionados de las páginas de proyectos, categorías y experiencia.
- Conservar la estructura, el contenido, las rutas y la composición decorativa existentes.

## Flujo de usuario

Al desplazarse por Inicio y por las páginas internas, la persona encuentra la siguiente sección con una separación proporcional, tanto en móvil como en escritorio.

## Criterios de aceptación

1. Inicio no presenta un bloque vacío desproporcionado entre las tarjetas de Trabajos seleccionados y el contenido de Experiencia.
2. La sección de experiencia de Inicio contiene sus puestos y enlace sin altura de relleno innecesaria.
3. Las páginas de proyectos, categorías y experiencia tienen una separación superior e inferior más contenida y mantienen contenido legible desde 320 px.
4. No se alteran la semántica, la navegación por teclado, los objetivos táctiles ni la preferencia de movimiento reducido.

## Requisitos no funcionales

Los estilos continúan siendo Sass, adaptativos y respetan los puntos de quiebre existentes.

## Exclusiones

No se rediseñan los componentes, el contenido editorial ni las ilustraciones.
