# Especificación: proyecto Who Is Paying

## Objetivo

Incorporar Who Is Paying al portafolio como un proyecto funcional de la categoría Front-end + UX/UI, alojando su interacción principal dentro de la propia ficha.

## Alcance

- Añadir Who Is Paying al catálogo central y a la landing Front-end + UX/UI.
- Crear una ficha bilingüe en español e inglés.
- Implementar dentro del portafolio una versión React de la aplicación para añadir, editar y eliminar participantes y sortear quién paga.
- Mantener una portada de categoría basada en el recurso gráfico original.
- Mostrar la paleta original sin texto explicativo adicional.
- Mostrar el título «Who is paying?» en ambos idiomas y mantener la interacción principal dentro de la ficha.
- Integrar el proyecto en la navegación anterior/siguiente de su categoría.

## Flujos de usuario

1. La persona visita Front-end + UX/UI y encuentra la tarjeta Who Is Paying.
2. Abre la ficha interna desde la imagen, el título o el enlace de la tarjeta.
3. Escribe un nombre y lo añade a la lista de participantes.
4. Puede editar o eliminar cualquier participante mediante controles identificados.
5. Inicia el sorteo y recibe dentro de la página el nombre de quien pagará.
6. Puede repetir el sorteo, volver a la categoría o continuar al proyecto anterior/siguiente.

## Criterios de aceptación

- Who Is Paying aparece en `/proyectos/frontend-uxui` en español e inglés.
- El título del proyecto aparece como «Who is paying?» en la tarjeta y la ficha en ambos idiomas.
- `/proyectos/who-is-paying` muestra una ficha completa y no el estado “próximamente”.
- La ficha contiene una aplicación operativa que permite añadir nombres no vacíos, editar y eliminar participantes.
- El sorteo permanece deshabilitado sin participantes y selecciona uno de los nombres existentes cuando se activa.
- El resultado se presenta en la página y se anuncia mediante una región de estado, sin depender de alertas del navegador.
- Los formularios se envían con teclado, los controles tienen nombres accesibles localizados y el foco visible no queda oculto.
- La ficha conserva las tecnologías del proyecto original —HTML, CSS y JavaScript— e identifica su adaptación dentro del portafolio con React y Sass.
- La portada de categoría procede del proyecto original y tiene una alternativa localizada útil.
- La ficha no muestra un enlace al repositorio original.
- La paleta contiene únicamente muestras y códigos de color.
- El proyecto participa correctamente en la navegación de la categoría y del listado general.
- El catálogo y las traducciones superan sus pruebas de consistencia.

## Requisitos no funcionales

- Mantener React, React Router y la arquitectura de contenido centralizada del portafolio.
- Mantener un único `h1`, jerarquía de encabezados coherente, foco visible, mensajes de estado y nombres accesibles localizados.
- Conservar el diseño responsive desde 320 CSS px, el reflujo con zoom de 200 % y `prefers-reduced-motion`.
- Mantener el estado de la aplicación solo durante la visita actual, sin almacenamiento remoto.
- No afectar las fichas, rutas ni cambios locales de otros proyectos.

## Exclusiones

- No reescribir ni modernizar el repositorio original.
- No modificar el repositorio ni el despliegue externo de GitHub Pages.
- No mostrar un enlace externo al repositorio original dentro de la ficha.
- No usar `iframe`, incrustaciones externas ni servicios de terceros para ejecutar la aplicación.
- No añadir persistencia entre recargas, cuentas de usuario ni servicios de servidor.
- No añadir Who Is Paying a Trabajos seleccionados de la página de inicio.

## Validación prevista

- `npm run test:content`
- `npm run lint`
- `npm run build`
- Revisión visual responsive de la categoría y de la ficha.
- Comprobación de teclado, foco, formularios, edición, eliminación, sorteo, región de estado, encabezados y textos alternativos en el alcance modificado.

## Validación del ajuste de título y enlaces

- `npm run test:content`: 22 pruebas correctas; se verifica el título y la ausencia del enlace en los datos de ambos idiomas.
- `npm run lint` y `npm run build`: correctos.
- Navegador integrado (Chromium): ficha revisada en español e inglés; título de documento y `h1` con signo de interrogación; sin enlace al repositorio; navegación de regreso y proyecto anterior conservada.
- Esta comprobación se limita al contenido y los enlaces modificados; no repite la auditoría global de accesibilidad ni los flujos de la aplicación interactiva.
