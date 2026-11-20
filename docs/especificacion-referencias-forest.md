# Especificación: referencias de Forest

## Objetivo

Mostrar las dos referencias visuales de Forest junto a la paleta, siguiendo la composición de Pantano.

## Alcance

- Incorporar las dos imágenes nuevas del directorio de Forest en la ficha del proyecto.
- En escritorio, ubicar la paleta a la derecha de la ilustración principal y las dos referencias debajo de ella.
- Reducir ligeramente el ancho máximo de la ilustración principal en escritorio y mostrar ocho colores en la paleta.
- Separar visualmente la sección 02 (Proceso) del bloque principal con una línea superior.
- Mantener el bloque en el flujo vertical de la página en tablet y móvil.
- En tablet y móvil, alinear las referencias al borde izquierdo de la paleta.
- Localizar el encabezado y los textos alternativos en español e inglés.

## Flujo de usuario

La persona abre la ficha de Forest, ve la ilustración principal y encuentra su paleta y referencias en el mismo bloque visual. Puede recorrer el contenido en orden lógico con tecnologías de asistencia.

## Criterios de aceptación

1. La ficha muestra exactamente las dos nuevas referencias con sus proporciones originales.
2. Desde el breakpoint de escritorio, la paleta queda a la derecha de la ilustración y las referencias debajo de la paleta, una junto a la otra.
3. En tablet y móvil no hay desbordamiento horizontal y el orden de lectura es ilustración, paleta y referencias.
4. El encabezado de referencias y las alternativas de imagen están disponibles en ambos idiomas.
5. La paleta mantiene solo muestras y códigos de color, sin texto explicativo.
6. En escritorio la ilustración principal mide como máximo 30rem de ancho y la paleta muestra exactamente ocho colores en dos filas de cuatro.
7. La sección 02 de Forest tiene una línea divisora superior en móvil, tablet y escritorio, con el color de borde compartido y 1.5rem de espacio antes de la línea.
8. Por debajo del breakpoint de escritorio, la paleta y las referencias comienzan en la misma línea vertical izquierda.

## Requisitos no funcionales

- Conservar React, Vite, Sass y el patrón de datos existente para fichas de ilustración.
- Respetar las dimensiones intrínsecas para evitar saltos de diseño.
- Verificar con `npm run build` y `npm run lint`; revisar visualmente escritorio y móvil.

## Exclusiones

- No modificar la composición ni el contenido de Pantano.
- No agregar nuevas secciones de proceso o detalles a Forest.

## Validación

- `npm run build`, `npm run lint` y `npm run test:content`: correctos.
- Navegador integrado de Codex, ruta Forest en español: a 1280 CSS px la paleta aparece a la derecha de la ilustración y las dos referencias cargan debajo, lado a lado. A 768 y 320 CSS px el bloque vuelve al flujo vertical; `scrollWidth` coincide con el ancho de pantalla, sin desplazamiento horizontal.
- Se comprobó en el DOM que las dos imágenes cargan y tienen alternativas descriptivas. No se hizo una auditoría global de accesibilidad ni una prueba con lector de pantalla, porque el cambio reutiliza la estructura semántica existente del bloque de Pantano.
- Ajuste posterior: `npm run build`, `npm run lint` y `npm run test:content` correctos. En el navegador integrado, a 1280 CSS px la ilustración mide 480 px (30rem), la paleta contiene ocho muestras en cuatro columnas y no hay desbordamiento; a 320 CSS px tampoco hay desbordamiento horizontal.
- Separador de sección 02: `npm run build` y `npm run lint` correctos. En el navegador integrado, a 1280 y 320 CSS px el borde superior de Proceso mide 1 px, usa el token de borde compartido y no produce desbordamiento horizontal. No cambian controles ni estructura semántica; no se requirió prueba de teclado ni lector de pantalla.
- Alineación tablet: `npm run build` y `npm run lint` correctos. En el navegador integrado, a 768 CSS px la paleta y las referencias comienzan en x = 24 px y `scrollWidth` = 768 px. Es un ajuste de alineación sin cambios de semántica o controles.
- Alineación móvil y tablet según captura: `npm run build` y `npm run lint` correctos. En el navegador integrado, los bordes izquierdos de la paleta y las referencias coinciden a 320, 768 y 940 CSS px; no hay desbordamiento horizontal. No se modificaron controles ni contenido semántico.
