# Especificación: convención visual para Medusas y Deep Sea

## Objetivo

Actualizar las fichas localizadas de Medusas y Deep Sea para que adopten la convención visual ya aplicada a Pantano: una obra principal orgánica, título protagonista con el color de su propia paleta, ficha técnica en etiquetas, proceso conectado y detalles orgánicos enmarcados.

## Alcance

- Aplicar una máscara SVG orgánica a la imagen principal de Medusas y a las dos obras principales de Deep Sea, sin modificar sus archivos fuente ni sus alternativas.
- Usar un color de la paleta de cada proyecto para su título principal y para el borde de sus detalles.
- Presentar año, técnica y herramientas como etiquetas con iconos; el nombre de cada dato queda disponible para tecnologías de asistencia.
- Conectar los pasos de proceso mediante flechas SVG decorativas locales.
- Recortar cada detalle con una máscara orgánica y añadir un borde de 5 px que siga su silueta.
- Reutilizar una configuración de contenido y estilos compartida con Pantano para evitar variantes de implementación por proyecto.

## Flujo de usuario

1. La persona abre Medusas o Deep Sea desde Ilustración o mediante la navegación entre proyectos.
2. Identifica el proyecto por su título destacado, consulta la ficha técnica y observa la obra final orgánica.
3. Recorre las referencias, el proceso conectado y los detalles enmarcados.

## Criterios de aceptación

- Medusas y las dos obras de Deep Sea se muestran con una máscara orgánica local, sin deformación ni pérdida de texto alternativo.
- «Medusas» usa `#004461` y «Deep Sea» usa `#041A3D`, ambos colores presentes en sus respectivas paletas y con contraste suficiente sobre el fondo de la ficha.
- La ficha técnica de ambos proyectos muestra iconos decorativos, conserva sus etiquetas localizadas para lectores de pantalla y agrupa los tres datos en etiquetas con borde.
- Los cuatro pasos de Medusas y los tres de Deep Sea se conectan con flechas SVG decorativas; en escritorio la secuencia es horizontal y en móvil se mantiene vertical y sin desbordamiento.
- Todos los detalles usan máscaras orgánicas y un borde de 5 px del color de acento correspondiente, sin alterar el orden de lectura ni ocultar su contenido.
- Las referencias, las paletas, las rutas, las traducciones y la navegación existentes se conservan.

## Requisitos no funcionales

- Mantener React, Vite, Sass y la configuración centralizada de recursos.
- Conservar HTML semántico, navegación por teclado, foco, alternativas localizadas y `prefers-reduced-motion`.
- No añadir recursos remotos, animaciones ni estilos globales nuevos.
- El diseño debe refluir a 320 CSS px sin desplazamiento horizontal.

## Exclusiones

- No cambiar el contenido editorial, el orden de las secciones, las imágenes fuente ni la composición de Donas 3D.
- No trasladar la paleta o las referencias de Medusas y Deep Sea al hero.

## Validación

- `npm run lint`, `npm run build` y pruebas de contenido correctos.
- Comprobación visual de las rutas a 320 px y 1280 px; limitar la revisión de accesibilidad al orden de foco y al reflujo porque los controles y la semántica no cambian.
