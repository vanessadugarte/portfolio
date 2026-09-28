# Especificación: navegación superior entre proyectos

## Objetivo

Permitir recorrer los proyectos de una categoría desde el inicio de cada página de proyecto, sin tener que atravesar todo el proceso creativo para encontrar los enlaces «Anterior» y «Siguiente».

## Alcance

- Reubicar el paginador compartido inmediatamente después del título y antes de la introducción o el estado del proyecto.
- Mostrar la navegación tanto en proyectos completos como en páginas con estado «Próximamente».
- Mantener el contexto activo de categoría o de «todos los proyectos» en los enlaces.
- Conservar los textos y nombres accesibles localizados en español e inglés.

## Flujo de usuario

1. La persona abre cualquier página de proyecto desde una categoría o desde el listado general.
2. Al inicio encuentra el regreso a la categoría, el título y, justo debajo, los enlaces al proyecto anterior y siguiente disponibles.
3. Activa uno de los enlaces y continúa dentro del mismo contexto de navegación.

## Criterios de aceptación

- «Anterior» y «Siguiente» aparecen inmediatamente después del `h1` en todas las páginas de proyecto.
- El paginador deja de mostrarse al final del proceso del proyecto.
- Las páginas «Próximamente» permiten continuar al proyecto anterior o siguiente.
- El primer y el último proyecto muestran únicamente el enlace disponible.
- Los enlaces conservan un objetivo de interacción de al menos 44 px de alto, foco visible y nombres accesibles que incluyen el título de destino.
- Tras orientar el foco al `h1` en una navegación SPA, Tab avanza hacia el paginador en un orden lógico.
- La composición no produce desplazamiento horizontal a 320 CSS px.
- `npm run test:content`, `npm run build` y `npm run lint` finalizan correctamente.

## Requisitos no funcionales

- Mantener React Router como mecanismo de navegación.
- Mantener Sass, los tokens existentes y el enfoque mobile-first.
- No duplicar el paginador ni los textos localizados.

## Exclusiones

- No se modifica el orden del catálogo de proyectos.
- No se convierte la navegación en un elemento fijo o flotante.
- No se alteran imágenes, textos editoriales ni composiciones internas de los proyectos.
