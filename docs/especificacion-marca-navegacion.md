# Especificación: marca enlazada en la navegación

## Objetivo

Mostrar «Vanessa Dugarte» al lado izquierdo de la navegación como enlace al inicio.

## Alcance

- Añadir la marca al componente de navegación compartido.
- Enlazarla a la ruta de inicio mediante React Router.
- Mantener la marca en color blanco y con foco visible.
- Adaptar la distribución móvil para evitar desbordamiento horizontal.

## Flujo de usuario

La persona selecciona «Vanessa Dugarte» desde cualquier ruta y llega al inicio del portafolio.

## Criterios de aceptación

- La navegación muestra el texto «Vanessa Dugarte» alineado a la izquierda.
- El texto navega a `/` sin recargar la página.
- La marca se visualiza en blanco en sus estados interactivos.
- Se puede alcanzar y activar con teclado, con un indicador de foco visible.
- A 320 CSS px no aparece desplazamiento horizontal por la navegación.
- `npm run lint` y `npm run build` finalizan correctamente.

## Requisitos no funcionales

- Usar React Router y Sass existentes.
- Conservar los destinos y controles actuales de la navegación.
- Mantener una interfaz localizada; el nombre propio no requiere traducción.

## Exclusiones

- Cambiar las rutas existentes, el contenido del menú Proyectos o el selector de idioma.
- Rediseñar otras secciones del encabezado.

## Validación de accesibilidad

- Navegador: Codex In-app Browser, aplicación local Vite.
- Teclado: desde la marca, `Tab` desplaza el foco al enlace Inicio; el indicador de foco existente se conserva mediante `:focus-visible`.
- Reflujo: a 320 × 800 CSS px, la marca y los controles se distribuyen en dos filas sin desplazamiento horizontal visible.
- Enlace: desde `/#/experiencia`, seleccionar la marca navega a `/#/`.
- Limitación: la comprobación se realizó en el navegador integrado; no incluye una prueba con lector de pantalla.
