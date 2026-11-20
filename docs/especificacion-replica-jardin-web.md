# Muestra integrada de Jardín web

## Objetivo

Presentar el proyecto Jardín Virtual dentro de su ficha del portafolio, con una muestra visual fiel a los recursos del repositorio original y disponible sin salir del sitio.

## Alcance

- Sustituir el estado «próximamente» de `jardin-web` por una ficha con introducción, datos del proyecto y una muestra de la tienda.
- Incorporar imágenes locales del repositorio `vanessadugarte/virtual-garden`: marca, banner, collage y productos seleccionados.
- Conservar la composición y los colores principales del sitio original en una adaptación responsive.
- Localizar en español e inglés los textos y las alternativas de las imágenes.

## Flujo de usuario

1. La persona abre la ficha «Jardín web» desde proyectos o trabajos seleccionados.
2. Lee el contexto del proyecto y recorre la muestra de Jardín Virtual dentro de la ficha.
3. Usa la navegación del portafolio para volver a la categoría o pasar a otra ficha.

## Criterios de aceptación

- La ruta existente de `jardin-web` muestra la ficha y sus imágenes locales, sin depender de la API ni de Firebase del proyecto original.
- La muestra incluye banner, presentación, collage y selección de plantas y maceteros extraídos del repositorio original.
- Los elementos de tienda representados como muestra no simulan compras, carrito ni enlaces que no funcionan.
- La ficha tiene un único `h1`, encabezados ordenados, imágenes con alternativas pertinentes, texto legible y reflujo en móvil.
- Español e inglés muestran títulos, textos y alternativas coherentes con el idioma activo.

## Requisitos no funcionales

- Mantener React, Vite, Sass y la arquitectura de rutas actual.
- Evitar solicitudes de red durante la visualización de la muestra.
- Mantener WCAG 2.2 A/AA en el alcance modificado, incluido zoom y reducción de movimiento.

## Exclusiones

- No se replica el proceso de compra, el catálogo dinámico, el contacto activo, el carrito ni la integración con Firebase o Trefle.
- La muestra no actualiza precios ni disponibilidad comercial.

## Fuente

- Repositorio original: https://github.com/vanessadugarte/virtual-garden (rama `main`, consultada el 19 de noviembre de 2026).
- La navegación, los catálogos de archivo y las fichas de producto se amplían en [Páginas internas de Jardín Virtual](especificacion-paginas-internas-jardin-web.md).

## Validación de accesibilidad del alcance

- Navegador integrado de Codex, ruta directa de la ficha en español e inglés: título del documento localizado, un `h1` y encabezados `h2`/`h3` en orden; todas las imágenes tienen atributo `alt` (descriptivo o vacío cuando son decorativas).
- Navegador integrado de Codex, viewport de 320 CSS px: ancho del documento y ancho desplazable iguales a 320 px; inspección visual de cabecera, mosaico y tarjetas sin corte de texto ni desplazamiento horizontal.
- Cambio de idioma mediante el control existente: nombre del control, título, contenido y alternativas de imágenes cambian al inglés. La navegación y el foco usan los componentes existentes del portafolio.
- Limitación: no se realizó una auditoría WCAG completa ni una prueba con lector de pantalla; el cambio añade contenido estático y no incorpora controles nuevos.
