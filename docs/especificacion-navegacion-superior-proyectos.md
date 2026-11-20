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
- Muchokids Nacionalidades conserva la misma altura de la fila de navegación que sus proyectos vecinos, a igual ancho de pantalla y posición inicial de scroll; permite avanzar y retroceder sin desplazar el puntero entre clics consecutivos.
- La composición no produce desplazamiento horizontal a 320 CSS px.
- `npm run test:content`, `npm run build` y `npm run lint` finalizan correctamente.

## Requisitos no funcionales

- Mantener React Router como mecanismo de navegación.
- Mantener Sass, los tokens existentes y el enfoque mobile-first.
- No duplicar el paginador ni los textos localizados.
- Nacionalidades hereda el espaciado superior compartido de las fichas, sin una excepción de escritorio que desplace la navegación.

## Exclusiones

- No se modifica el orden del catálogo de proyectos.
- No se convierte la navegación en un elemento fijo o flotante.
- No se alteran imágenes, textos editoriales ni composiciones internas de los proyectos.

## Validación

- Inspección de implementación: la fila usa Flexbox sin puntos de quiebre que reordenen los enlaces; el regreso puede reducirse y ajustarse a dos líneas en el ancho mínimo para conservar la misma fila.
- Inspección de implementación: ambos enlaces conservan 44 px de alto, foco visible y nombre accesible con el proyecto de destino.
- `npm run test:content`, `npm run build` y `npm run lint`: correctos.
- Limitación: no se realizó una comprobación visual interactiva en navegador; no se repitió una auditoría global con lector de pantalla ni axe porque no cambió la semántica de los enlaces.

### Corrección de altura de Nacionalidades — 2026-11-19

- Se elimina el `padding-top: 4rem` exclusivo de Nacionalidades en escritorio para heredar los `6rem` compartidos.
- Playwright con Google Chrome 157.0.8103.79: comparación de Nacionalidades con Superdeer y Forest a 320, 768, 1024 y 1440 CSS px. La fila comienza en 120 px a 320 y en 96 px en los demás anchos, igual en las tres páginas; sin desbordamiento horizontal.
- Clics consecutivos en las mismas coordenadas: Superdeer → Nacionalidades → Forest y el recorrido inverso, correctos.
- Teclado en Nacionalidades: Tab y Shift+Tab mantienen el orden regreso → anterior → siguiente, foco visible y objetivos de 44 px; Enter abre Forest correctamente.
- `npm run build`, `npm run lint` y `npm run test:content` (22 pruebas): correctos. Build conserva el aviso de tamaño de bundle superior a 500 kB.
- Alcance de la comprobación: geometría y operación de la fila afectada en Chrome. No se repitió auditoría global, axe ni lector de pantalla; la corrección solo elimina una excepción de espaciado.

### Corrección de disposición móvil de Nacionalidades — 2026-11-20

- Se elimina la excepción Sass que colocaba «Anterior» y «Siguiente» debajo de «Volver a categoría» en Nacionalidades por debajo del breakpoint de tablet.
- Navegador integrado Chromium: a 320, 768 y 1440 CSS px, los tres enlaces comparten la misma fila, tienen 44 px de alto y la página no presenta desbordamiento horizontal. Revisión visual a 320 CSS px: los enlaces y el contenido siguen visibles.
- `npm run build`, `npm run lint` y `npm run test:content` (22 pruebas): correctos. El build conserva el aviso de tamaño de bundle superior a 500 kB.
- La comprobación se limita a la disposición afectada; la semántica, el foco y los destinos de los enlaces no cambiaron.
