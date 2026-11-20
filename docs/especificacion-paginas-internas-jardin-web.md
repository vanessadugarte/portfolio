# Páginas internas de Jardín Virtual en el portafolio

## Objetivo

Permitir recorrer la muestra de Jardín Virtual como un pequeño sitio dentro del portafolio y abrir la ficha de cada producto visible, con su precio de referencia y descripción.

## Alcance

- Activar en la muestra los enlaces internos de Inicio, Plantas, Maceteros y Contacto.
- Crear rutas propias para los catálogos de plantas y maceteros, la página de contacto y el detalle de cada producto de la selección visible (tres plantas y tres maceteros).
- Mostrar imagen, nombre, precio histórico en pesos chilenos, descripción y datos de cuidado cuando corresponda.
- Usar los datos y recursos locales del repositorio original; conservar español e inglés mediante el sistema de traducciones del portafolio.

## Flujos de usuario

1. Desde la ficha «Jardín web», la persona selecciona Plantas o Maceteros en la navegación de Jardín Virtual.
2. Recorre el catálogo y abre cualquiera de sus productos.
3. Consulta la imagen, precio de referencia, descripción y cuidados disponibles, y vuelve al catálogo o al inicio de la muestra.
4. Puede abrir Contacto para ver la página de archivo y regresar mediante la misma navegación.

## Criterios de aceptación

- Cada enlace visible de la navegación y cada tarjeta de producto lleva a una ruta interna válida, también al abrirla directamente o usar el historial del navegador.
- Cada ruta tiene un título de documento localizado, un único `h1`, foco orientado al encabezado tras navegar y contenido coherente en español e inglés.
- Cada producto mostrado en los catálogos y en la ficha principal tiene una ficha con el precio del archivo original, sin presentar ese importe como precio vigente.
- Las rutas internas desconocidas muestran la página 404 del portafolio.
- La experiencia funciona sin Firebase, Trefle ni solicitudes a servicios del proyecto original.
- En 320 CSS px no hay desplazamiento horizontal; enlaces y tarjetas funcionan con teclado y muestran foco visible.

## Requisitos no funcionales

- Mantener React Router como único enrutador, rutas centralizadas y estilos Sass junto a los componentes.
- Conservar WCAG 2.2 A/AA en el alcance modificado, incluido idioma, semántica, contraste, foco y reflujo.

## Exclusiones

- No se implementan carrito, pago, disponibilidad, pedidos ni contacto activo.
- La muestra presenta la selección visible del portafolio; no importa el catálogo completo de Firebase.

## Fuente

- https://github.com/vanessadugarte/virtual-garden, componentes `Router`, `ProductDetail`, `Plants`, `FlowerPots`, `Contacto` y datos locales de `plants.js` y `flowerPots.js`.

## Validación de accesibilidad y funcionamiento

- Navegador integrado de Codex, vista móvil de 320 CSS px: se abrieron la ficha de Monstera, el catálogo de plantas, la ficha de Ficus, el catálogo de maceteros, la ficha de Cemento y Contacto; cada enlace llegó a su ruta y el foco quedó en el `h1` tras navegar. No se observó contenido que sobresaliera horizontalmente del viewport.
- Navegador integrado de Codex, español e inglés: títulos del documento, nombres de enlaces, precios de referencia, descripciones, textos alternativos y `html[lang]` coherentes con el idioma. La ruta directa de Monstera carga su ficha; un producto desconocido muestra la página 404 localizada.
- Navegador integrado de Codex, teclado: Tab desde Plantas avanzó a Maceteros en el orden visual, con foco en el enlace. Las nuevas tarjetas son enlaces nativos completos.
- Limitación: no se realizó una auditoría WCAG completa ni una prueba con lector de pantalla. La comprobación se centró en las rutas, controles y contenido añadidos.
