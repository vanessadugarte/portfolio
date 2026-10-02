# Especificación: ajuste de h1 de proyectos en escritorio

## Objetivo

Unificar en 80 px el tamaño del encabezado principal de todos los proyectos en escritorio.

## Alcance

- Crear un token Sass reutilizable de `5rem` (80 px) para el `h1` de detalle de proyecto en escritorio.
- Aplicar el token al `h1.project-detail-title` compartido por todas las variantes de proyecto, incluidas las fichas pendientes.
- Conservar los tamaños y el comportamiento fluido existentes en móvil y tablet, por debajo del breakpoint de escritorio.

## Flujo de usuario

Al abrir cualquier proyecto en escritorio, la persona ve el título principal con un tamaño uniforme de 80 px. En móvil y tablet, el título conserva su adaptación actual.

## Criterios de aceptación

- Existe un token Sass para el tamaño de escritorio con valor `5rem` (80 px).
- Todo `h1.project-detail-title` dentro de una ficha de proyecto usa ese token desde el breakpoint de escritorio (`64rem`).
- Los proyectos con composiciones especiales y los proyectos pendientes muestran el `h1` a 80 px en escritorio.
- Los tamaños de móvil y tablet no cambian.
- `npm run lint` y `npm run build` finalizan correctamente.

## Requisitos no funcionales

- Conservar la arquitectura Sass, centralizar el valor compartido y mantener el reflujo del texto sin desplazamiento horizontal.

## Validación

- `npm run lint`: correcto.
- `npm run build`: correcto.
- Navegador integrado, viewport de 1280 px: Donas, Medusas, Snapchat Frames, Muchokids Nationalities y Jardín web calculan el `h1` a `80px`, sin desbordamiento horizontal.
- Navegador integrado, viewport de 768 px: Medusas y Muchokids Nationalities conservan sus tamaños fluidos previos, sin desbordamiento horizontal.
- Limitación: la comprobación visual usa muestras representativas de las variantes de plantilla; la regla compartida cubre todos los `h1.project-detail-title`.

## Exclusiones

- No modificar contenido, estructura ni otros estilos tipográficos.
- No cambiar el tamaño de los `h1` de páginas que no sean fichas de proyecto.
