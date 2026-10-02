# Especificación: iconos en las fichas técnicas

## Objetivo

Unificar las etiquetas de datos técnicos de todas las fichas de proyecto completas.

## Alcance

- Mostrar el icono de calendario en lugar del título visible «Año» / «Year».
- Aplicar la misma convención a «Técnica» / «Technique» y «Herramientas» / «Tools» con los iconos existentes.
- Incluir Snapchat Frames y Donas 3D, las dos fichas completas que aún muestran títulos visibles, y usar el componente compartido para las futuras.

## Flujo de usuario

La persona abre una ficha completa, consulta año, técnica y herramientas en etiquetas con icono y cambia de idioma si lo desea.

## Criterios de aceptación

- Todas las fichas completas muestran los tres iconos y sus valores, sin títulos visibles repetidos.
- Cada título localizado permanece asociado a su valor en la lista de definiciones para tecnologías de asistencia; los iconos son decorativos.
- Las etiquetas conservan su borde, tamaño compacto y reflujo sin desplazamiento horizontal a 320 CSS px.

## Requisitos no funcionales

- Reutilizar el componente React y los estilos Sass existentes.
- Mantener el contenido localizado y la estructura semántica de la ficha.

## Exclusiones

- No cambiar los valores de los datos, el orden de los proyectos ni las galerías.

## Validación

- `npm run lint`, `npm run build`, `npm run test:content` y `git diff --check`: correctos.
- Navegador integrado de Codex (Chromium), a 320 CSS px: Snapchat Frames y Donas 3D muestran tres iconos decorativos y tres valores sin títulos visibles ni desplazamiento horizontal. La estructura `dl` conserva los términos `dt` localizados y sus definiciones `dd` en español e inglés.
- La comprobación se limitó a presentación, semántica y reflujo de estas dos fichas; no se hizo una auditoría WCAG global ni prueba con lector de pantalla.
