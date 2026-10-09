# Especificación: landing de Forest

## Objetivo

Completar la ficha bilingüe de Forest para presentar la ilustración de fondo creada para un nivel de Muchokids App.

## Alcance

- Conservar la ruta `/proyectos/forest` y su posición en Ilustración.
- Mostrar la obra final y las tres etapas de proceso disponibles desde `src/assets/images/projects/illustrations/forest/`.
- Incluir año 2017, técnica de ilustración digital, Illustrator, Photoshop y tableta Wacom, además de una paleta de colores del proyecto.
- Localizar la introducción, datos, títulos y alternativas de las imágenes en español e inglés.

## Flujo de usuario

1. La persona abre Forest desde Ilustración o desde la navegación entre proyectos.
2. Consulta el contexto y ficha técnica, la ilustración final, la paleta y las tres etapas de proceso.
3. Puede volver a Ilustración o ir al proyecto anterior o siguiente conservando el contexto de categoría.

## Criterios de aceptación

- La ruta deja de mostrar «Próximamente» / «Coming soon» y presenta un único `h1` localizado.
- `forest-finalwork.jpg` y las tres imágenes `forest-process-*` se cargan sin deformación y con alternativas útiles localizadas.
- Desde el breakpoint de escritorio (`64rem`), la obra final se centra y limita su ancho a `34rem`; en móvil y tablet conserva el ancho responsive existente.
- La ficha técnica muestra año 2017, ilustración digital e Illustrator, Photoshop y Wacom Tablet, con etiquetas localizadas.
- La paleta muestra únicamente muestras de color y sus códigos hexadecimales, sin texto explicativo adicional.
- No se muestran secciones de referencias o detalles, porque no se entregaron recursos para ellas.
- La ficha se adapta a 320 CSS px sin desplazamiento horizontal y conserva la navegación por teclado y el foco de entrada existentes.

## Requisitos no funcionales

- Reutilizar la estructura semántica, la navegación y los estilos Sass de las fichas de proyecto.
- Mantener las imágenes como contenido informativo con alternativas localizadas.

## Exclusiones

- No crear ni modificar recursos gráficos, referencias o detalles que no hayan sido proporcionados.
- No cambiar el catálogo, orden ni contenido de otros proyectos.

## Validación

- `npm run test:content` (18 pruebas), `npm run lint`, `npm run build` y `git diff --check`: correctos.
- Navegador integrado (Chromium): a 1280 CSS px la obra final queda centrada con `34rem` (544 px) de ancho; a 320 CSS px conserva su ancho responsive de 304 px. En ambos casos la ficha muestra una única `h1`, las tres etapas de proceso y las seis muestras de color sin desplazamiento horizontal. No se muestra una sección de detalles.
- Navegador integrado (Chromium): al abrir Forest desde Ilustración, el foco llega al `h1` sin desplazamiento. El cambio a español actualiza `html[lang]`, título, introducción y alternativas de imagen.
- La revisión de accesibilidad se limitó al contenido informativo, reflujo, idioma y foco de la ruta; no se modificaron los controles ni la navegación compartida.
