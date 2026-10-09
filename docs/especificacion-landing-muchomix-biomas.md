# Especificación: ficha de Muchomix — Biomas

## Objetivo

Crear una ficha bilingüe que reúna ocho fondos de escenario realizados para Muchomix y los presente como una colección visual, manteniendo Deep Sea y Forest como proyectos independientes.

## Alcance

- Incorporar el proyecto `muchomix-biomas` a la categoría Ilustración, entre Forest y Muchomix Game.
- Usar `biomas-thumbnail.jpg` como miniatura y mostrar los ocho fondos finales disponibles en `src/assets/images/projects/illustrations/biomas/`.
- Identificar cada entorno: zona de hielo, montañas nevadas, montañas, campo de flores, playa, desierto de cactus, dunas del desierto y espacio.
- Localizar título, descripción, ficha técnica, nombres y alternativas de imagen en español e inglés.

## Flujos de usuario

1. La persona abre Muchomix — Biomas desde la categoría Ilustración.
2. Consulta el contexto y la ficha técnica de la colección.
3. Recorre los ocho fondos completos, cada uno con un nombre visible y una alternativa útil.
4. Puede volver a Ilustración o navegar hacia Forest y Muchomix Game conservando el contexto de categoría.

## Criterios de aceptación

- La ruta `/proyectos/muchomix-biomas` contiene un único `h1` localizado y deja de depender del estado «Próximamente».
- Los ocho fondos se muestran completos, sin recortes ni deformación, con dimensiones intrínsecas de `2048 × 2732`.
- La galería usa una columna a 320 CSS px, dos en tablet y una composición centrada de hasta tres columnas en escritorio, sin desplazamiento horizontal.
- La ficha técnica informa el período 2016–2017, la técnica de ilustración digital y las herramientas Photoshop y Wacom Tablet.
- Los nombres, textos y alternativas de todas las imágenes existen en español e inglés.
- Deep Sea y Forest conservan sus fichas y assets independientes; no se repiten dentro de esta colección.
- La navegación anterior/siguiente queda en el orden Forest, Muchomix — Biomas y Muchomix Game.

## Requisitos no funcionales

- Mantener React, React Router y Sass, reutilizando la navegación, metadatos, ficha técnica y jerarquía semántica existentes.
- Conservar foco de entrada en el `h1`, contraste, reflujo y operación por teclado.
- Cargar de forma prioritaria solo la primera obra y diferir las restantes.

## Exclusiones

- No crear nuevos fondos, procesos, referencias ni paletas de color.
- No modificar las fichas de Deep Sea, Forest o Muchomix Game fuera de la navegación derivada del catálogo.
- No incorporar el proyecto a Trabajos seleccionados.

## Validación

- `npm run test:content` (20 pruebas), `npm run lint`, `npm run build` y `git diff --check`: correctos.
- Navegador integrado (Chromium): a 1280 CSS px la ficha muestra un único `h1` de 80 px, introducción de 704 px (`44rem`), ficha técnica de 368 px (`23rem`) y los ocho fondos distribuidos en tres columnas con la última fila centrada.
- Navegador integrado (Chromium): a 768 CSS px la galería usa dos columnas de 348 px; a 320 CSS px usa una columna de 280 px. En ambos tamaños `scrollWidth` coincide con `clientWidth`, y ninguna imagen altera su proporción intrínseca.
- Navegador integrado (Chromium): el cambio de idioma actualiza `html[lang]`, título de documento, contenido, rótulos y alternativas de las ocho imágenes. Al entrar desde Forest, el foco se orienta al `h1` de Muchomix — Biomas.
- No se registraron errores ni advertencias en la consola. La revisión de accesibilidad se limitó a semántica, jerarquía de encabezados, contenido informativo, idioma, foco y reflujo de la nueva ruta; no se modificaron los controles compartidos.
- Comprobación manual de contraste: los rótulos azul, verde, violeta y naranja superan `3:1` como texto grande en negrita; la numeración naranja usa `#8f3514` sobre `#f6f4ed` con una relación aproximada de `7.10:1` para texto normal.
