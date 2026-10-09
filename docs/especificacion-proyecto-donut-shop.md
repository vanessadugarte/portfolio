# Especificación: proyecto Donut Shop

## Objetivo

Incorporar Donut Shop al portafolio como un proyecto de la categoría Front-end + UX/UI, presentando de forma clara su alcance académico, su interacción principal y los recursos originales del proyecto.

## Alcance

- Añadir Donut Shop al catálogo central de proyectos y a la landing Front-end + UX/UI.
- Crear una ficha de proyecto bilingüe en español e inglés.
- Mostrar una imagen principal, la paleta utilizada y una galería de los cuatro productos originales.
- Enlazar la demo publicada en GitHub Pages y el repositorio público de GitHub.
- Integrar el proyecto en la navegación anterior/siguiente de su categoría.

## Flujos de usuario

1. La persona visita la categoría Front-end + UX/UI y encuentra la tarjeta Donut Shop.
2. Abre la ficha interna del proyecto desde la imagen, el título o el enlace de la tarjeta.
3. Revisa el contexto, aporte, herramientas, paleta y productos incluidos.
4. Puede abrir la demo o el código fuente en una pestaña nueva.
5. Puede regresar a la categoría o continuar al proyecto anterior/siguiente.

## Criterios de aceptación

- Donut Shop aparece en `/proyectos/frontend-uxui` en ambos idiomas.
- La ruta `/proyectos/donut-shop` muestra contenido completo y no el estado “próximamente”.
- El título visible del proyecto es `Donut Shop`.
- La ficha identifica el trabajo como proyecto académico individual y no lo presenta como React.
- Las tecnologías indicadas son HTML, CSS, JavaScript, jQuery y Bootstrap.
- Los enlaces a la demo y al repositorio son distinguibles, operables con teclado y se abren de forma segura.
- Las cuatro imágenes informativas cuentan con alternativas localizadas.
- La paleta contiene únicamente muestras y códigos de color.
- El catálogo y las traducciones superan sus pruebas de consistencia.

## Requisitos no funcionales

- Mantener React, React Router y la arquitectura de contenido centralizada del portafolio.
- Conservar el diseño responsive existente desde 320 CSS px y con zoom de 200 %.
- Mantener un único `h1`, jerarquía de encabezados coherente, foco visible y contraste suficiente.
- Respetar `prefers-reduced-motion` mediante los estilos compartidos existentes.
- No afectar las fichas ni las rutas de otros proyectos.

## Exclusiones

- No reescribir ni modernizar el repositorio original de Donut Shop.
- No integrar el carrito original dentro del portafolio.
- No modificar el despliegue externo de GitHub Pages.
- No añadir Donut Shop a Trabajos seleccionados de la página de inicio en este cambio.

## Validación prevista

- `npm run lint`
- `npm run build`
- Pruebas del catálogo de contenido.
- Revisión visual responsive de la categoría y la ficha.
- Comprobación de teclado, foco, enlaces externos, encabezados y textos alternativos en el alcance modificado.
