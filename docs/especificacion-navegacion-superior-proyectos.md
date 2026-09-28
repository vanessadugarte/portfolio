# Especificación: navegación superior entre proyectos

## Objetivo

Permitir recorrer los proyectos de una categoría desde el inicio de cada página de proyecto, sin tener que atravesar todo el proceso creativo para encontrar los enlaces «Anterior» y «Siguiente».

## Alcance

- Reubicar el paginador compartido junto al enlace «Volver a categoría», antes del título y de la introducción o el estado del proyecto.
- Presentar «Anterior» y «Siguiente» como enlaces de texto acompañados de flechas, con el nombre accesible del proyecto de destino.
- Mantener los tres enlaces en una única fila en todos los tamaños: el regreso a la categoría a la izquierda y las flechas a la derecha.
- Mostrar la navegación tanto en proyectos completos como en páginas con estado «Próximamente».
- Mantener el contexto activo de categoría o de «todos los proyectos» en los enlaces.
- Conservar los textos y nombres accesibles localizados en español e inglés.

## Flujo de usuario

1. La persona abre cualquier página de proyecto desde una categoría o desde el listado general.
2. Al inicio encuentra en una misma fila el regreso a la categoría y los enlaces «Anterior» y «Siguiente», acompañados de flechas, cuando están disponibles; debajo aparece el título.
3. Activa uno de los enlaces y continúa dentro del mismo contexto de navegación.

## Criterios de aceptación

- En todos los tamaños, «Volver a categoría», «Anterior» y «Siguiente» comparten una única fila; el regreso se alinea a la izquierda y las flechas a la derecha.
- «Anterior» y «Siguiente» se presentan como texto acompañado de flechas, sin borde ni fondo, y mantienen estados perceptibles de hover y foco.
- El paginador deja de mostrarse al final del proceso del proyecto.
- Las páginas «Próximamente» permiten continuar al proyecto anterior o siguiente.
- El primer y el último proyecto muestran únicamente el enlace disponible.
- Los enlaces conservan un objetivo de interacción de al menos 44 px de alto, foco visible y nombres accesibles que incluyen el título de destino.
- La fila de navegación conserva un orden de foco lógico: regreso, anterior y siguiente.
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

## Validación

- Inspección de implementación: la fila usa Flexbox sin puntos de quiebre que reordenen los enlaces; el regreso puede reducirse y ajustarse a dos líneas en el ancho mínimo para conservar la misma fila.
- Inspección de implementación: ambos enlaces conservan 44 px de alto, foco visible y nombre accesible con el proyecto de destino.
- `npm run test:content`, `npm run build` y `npm run lint`: correctos.
- Limitación: no se realizó una comprobación visual interactiva en navegador; no se repitió una auditoría global con lector de pantalla ni axe porque no cambió la semántica de los enlaces.
