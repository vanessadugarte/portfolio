# Especificación: landing integrada de Donuts

## Objetivo

Convertir la ruta interna de Donuts en una recreación responsive de la página de inicio del proyecto `coderhouse-donuts`, para que la persona experimente el proyecto visual dentro del portafolio sin ser redirigida a la demo externa.

## Alcance

- Mantener Donuts en la categoría Front-end + UX/UI y conservar la ruta `/proyectos/donut-shop`.
- Mantener la navegación anterior, siguiente y de regreso a la categoría antes de la experiencia integrada.
- Recrear el home original con identidad rosada, marca Donuts, bienvenida, historia, recetas, favoritas y cierre.
- Servir localmente los recursos visuales originales del repositorio `coderhouse-donuts`.
- Incorporar navegación propia de la landing que desplaza a sus secciones sin cambiar de ruta.
- Localizar textos, nombres accesibles y alternativas de imagen en español e inglés.
- Mantener el zoom de `1.3` aplicado únicamente a la miniatura de categoría.
- Omitir los indicadores decorativos `01`, `02`, `03` y `04` de Historia, Recetas, Favoritas y Contacto.
- Reducir en `1rem` la escala tipográfica de los `h2` de las secciones de la landing, en todos sus tamaños responsivos.

## Flujos de usuario

1. La persona visita Front-end + UX/UI y encuentra la tarjeta Donuts con un encuadre cercano de las donas.
2. Abre `/proyectos/donut-shop` desde la imagen, el título o el enlace de la tarjeta.
3. Tras la navegación del portafolio, recorre el home integrado de Donuts sin abrir otro sitio.
4. Usa la navegación interna para desplazarse a Inicio, Historia, Recetas, Favoritas o Contacto.
5. Puede volver a la categoría o continuar al proyecto anterior/siguiente.

## Criterios de aceptación

- La ruta muestra un único `h1` con la identidad Donuts y no la ficha genérica anterior.
- La landing conserva los colores, el carácter tipográfico y los recursos visuales principales del home original.
- La portada combina logo, mensaje de bienvenida y composición principal de donas.
- Historia presenta el texto editorial y la dona rosada del proyecto original.
- Recetas muestra seis tarjetas con nombre e imagen; no incluye botones sin una acción real.
- Favoritas muestra cuatro composiciones y sus textos editoriales.
- La navegación interna usa controles nativos, funciona con teclado y no cambia la ruta.
- No se muestra un enlace obligatorio a la demo: la experiencia principal ya vive dentro del portafolio.
- Todas las imágenes informativas tienen alternativas equivalentes en español e inglés; los adornos quedan ocultos para tecnologías de asistencia.
- La landing mantiene reflujo a 320 CSS px, no provoca desplazamiento horizontal y conserva foco visible.
- La miniatura de categoría mantiene su zoom sin afectar el hero de la landing.
- Las secciones Historia, Recetas, Favoritas y Contacto no muestran numeración decorativa.
- Los `h2` de las secciones de la landing se muestran `1rem` por debajo de su escala anterior, sin perder su comportamiento responsive.
- El catálogo y las traducciones superan sus pruebas de consistencia.

## Requisitos no funcionales

- Mantener React, React Router y la arquitectura de contenido centralizada del portafolio.
- Implementar estilos nuevos en un parcial Sass cercano a la página y reutilizar los tokens del proyecto.
- Mantener un único `main` proporcionado por el layout y un único `h1` en la ruta.
- Conservar títulos de documento localizados y orientación de foco al navegar por SPA.
- Respetar `prefers-reduced-motion`; la navegación interna no fuerza desplazamiento animado.
- Evitar dependencias remotas para fuentes e imágenes de la landing.
- No afectar las fichas ni las rutas de otros proyectos.

## Exclusiones

- No integrar las páginas secundarias originales de Galería, Lugares, Recetas o Contacto como rutas nuevas.
- No reescribir ni desplegar el repositorio original `coderhouse-donuts`.
- No incorporar el proyecto `carrito-donas-coderhouse`.
- No añadir Donuts a Trabajos seleccionados del inicio.
- No cambiar el slug interno existente.

## Validación realizada

- `npm run test:content`: 21 pruebas superadas.
- `npm run test:branch-policy`: 4 pruebas superadas.
- `npm run lint`: sin errores.
- `npm run build`: compilación de producción completada; Vite mantiene su aviso informativo por el tamaño del paquete JavaScript.
- Chromium a 320 × 844, 768 × 1024 y 1280 × 900 CSS px: composición responsive verificada sin desplazamiento horizontal.
- Navegación interna: mantiene `/proyectos/donut-shop`, desplaza a cada sección y entrega el foco a su encabezado visible.
- Accesibilidad en el alcance modificado: un único `h1`, jerarquía de encabezados, controles nativos, foco visible y alternativas localizadas comprobados en español e inglés mediante el árbol de accesibilidad de Chromium.
- Limitación: esta validación es proporcional al cambio y no sustituye una auditoría WCAG completa del sitio.
