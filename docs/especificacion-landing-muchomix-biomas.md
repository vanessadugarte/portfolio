# Especificación: ficha de Biomas Muchomix

## Objetivo

Crear una ficha bilingüe que reúna seis fondos de escenario realizados para Muchomix y los presente como una colección visual, manteniendo Deep Sea y Forest como proyectos independientes.

## Alcance

- Incorporar el proyecto `muchomix-biomas` a la categoría Ilustración, entre Forest y Muchomix Game.
- Usar `biomas-thumbnail.jpg` como miniatura y mostrar seis fondos seleccionados de los disponibles en `src/assets/images/projects/illustrations/biomas/`.
- Identificar cada entorno: zona de hielo, montañas nevadas, campo de flores, playa, desierto de cactus, dunas del desierto.
- Retirar «Montañas» y «Espacio» de la galería, conservando «Montañas nevadas» y los archivos originales.
- Usar «Biomas Muchomix» en español y «Muchomix Biomes» en inglés, conservando la ruta actual.
- Localizar título, descripción, ficha técnica, nombres y alternativas de imagen en español e inglés.

## Flujos de usuario

1. La persona abre Biomas Muchomix desde la categoría Ilustración.
2. Consulta el contexto y la ficha técnica de la colección.
3. Recorre los seis fondos completos, cada uno con un nombre visible y una alternativa útil.
4. Puede volver a Ilustración o navegar hacia Forest y Muchomix Game conservando el contexto de categoría.

## Criterios de aceptación

- La ruta `/proyectos/muchomix-biomas` contiene un único `h1` localizado y deja de depender del estado «Próximamente».
- Los seis fondos se muestran completos, sin recortes ni deformación, con dimensiones intrínsecas de `2048 × 2732`.
- La galería usa una columna a 320 CSS px, dos en tablet y dos en escritorio, situadas debajo del texto de presentación de la galería y aprovechando su ancho, sin desplazamiento horizontal.
- La ficha técnica informa el período 2016–2017, la técnica de ilustración digital y las herramientas Photoshop y Wacom Tablet.
- Los nombres, textos y alternativas de todas las imágenes existen en español e inglés.
- Deep Sea y Forest conservan sus fichas y assets independientes; no se repiten dentro de esta colección.
- La navegación anterior/siguiente queda en el orden Forest, Biomas Muchomix y Muchomix Game.

## Requisitos no funcionales

- Mantener React, React Router y Sass, reutilizando la navegación, metadatos, ficha técnica y jerarquía semántica existentes.
- Conservar foco de entrada en el `h1`, contraste, reflujo y operación por teclado.
- Cargar de forma prioritaria solo la primera obra y diferir las restantes.

## Exclusiones

- No crear nuevos fondos, procesos, referencias ni paletas de color.
- No modificar las fichas de Deep Sea, Forest o Muchomix Game fuera de la navegación derivada del catálogo.
- No incorporar el proyecto a Trabajos seleccionados.

## Validación

- `npm run test:content`: 22 pruebas correctas, incluida la colección de seis fondos y sus traducciones; `npm run lint`, `npm run build` y `git diff --check`: correctos. Build mantiene el aviso de tamaño de bundle superior a 500 kB.
- Navegador integrado (Chromium), medición del DOM: a 1280 CSS px, dos columnas de 548 px; a 768 CSS px, dos de 348 px; a 320 CSS px, una de 280 px. En los tres tamaños la galería queda debajo del texto y no existe desbordamiento horizontal.
- Revisión visual en escritorio: fondos completos, de mayor tamaño, en dos columnas. Se conservan las proporciones de las imágenes y los colores de sus rótulos.
- Contenido informativo: seis imágenes con alternativas útiles; título de documento, encabezado, descripción y rótulos actualizados en español e inglés. Se comprobó el cambio de idioma en navegador.
- Alcance de accesibilidad: orden del contenido, alternativas y reflujo de esta galería. No se modificaron controles, navegación ni foco; no se repitió una auditoría global ni pruebas con lector de pantalla.
