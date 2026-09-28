# Especificación: alineación de navegación móvil

## Objetivo

Hacer que los controles de navegación situados bajo la marca se alineen al borde derecho en móvil y cuenten con una separación horizontal claramente mayor.

## Alcance

- Ajustar la distribución móvil del componente de navegación compartido.
- Conservar la marca en su propia fila y alineada a la izquierda.
- Aplicar el cambio únicamente por debajo del punto de quiebre de tableta existente.

## Flujo de usuario

Al abrir cualquier ruta en un viewport móvil, la persona ve la marca en la primera fila y, debajo, Inicio, Proyectos, Experiencia y el selector de idioma agrupados hacia la derecha, con espacio legible entre los controles. Puede seguir activando cada control con toque o teclado.

## Criterios de aceptación

- Bajo `40.0625rem`, los controles posteriores a la marca se alinean a la derecha.
- El espacio horizontal entre dichos controles es mayor que el valor previo de `0.125rem`.
- A 320 CSS px no aparece desplazamiento horizontal.
- La marca, los destinos, el menú Proyectos, el selector de idioma y los indicadores de foco conservan su comportamiento actual.
- `npm run lint` y `npm run build` finalizan correctamente.

## Requisitos no funcionales

- Mantener Sass y los tokens visuales existentes.
- Conservar objetivos táctiles de al menos 44 CSS px de alto y foco visible.

## Exclusiones

- Cambiar textos, rutas, semántica o interacción del menú.
- Rediseñar la navegación de tableta o escritorio.

## Validación de accesibilidad

- Navegador: Chromium integrado de Codex, Inicio a 320 × 800 CSS px.
- Reflujo: no hubo desplazamiento horizontal; los controles se distribuyeron al borde derecho y sus objetivos conservaron 44 CSS px de alto.
- Teclado: desde Inicio, `Tab` llevó el foco a Proyectos y conservó su anillo visible de 3 px en turquesa.
- Limitación: la comprobación se limitó a Inicio y al cambio de distribución móvil; no se repitió una auditoría global ni una prueba con lector de pantalla porque no cambian semántica ni comportamiento de los controles.
