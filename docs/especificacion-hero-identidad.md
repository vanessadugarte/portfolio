# Especificación: identidad del hero en escritorio

## Objetivo

Presentar el nombre de Vanessa Dugarte en una única línea en el hero de escritorio y mostrar debajo su especialidad profesional.

## Alcance

- El título del hero en anchos de escritorio muestra «Vanessa Dugarte» en una sola línea.
- Debajo se presenta «Diseñadora Web & Front-end» en español y su equivalente en inglés, con menor tamaño tipográfico.
- La composición existente para móvil y tablet se conserva.

## Flujo de usuario

Al entrar a Inicio en escritorio, la persona identifica primero el nombre y, justo debajo, el rol profesional. Al cambiar el idioma, el rol se traduce.

## Criterios de aceptación

- A partir del punto de quiebre de escritorio, los dos fragmentos del nombre se muestran horizontalmente en una misma línea.
- El rol aparece debajo del nombre y usa un tamaño menor que el `h1`.
- Móvil y tablet no muestran el nuevo rol ni modifican su disposición actual del nombre.
- La aplicación compila y supera la comprobación de lint.

## Requisitos no funcionales

- El nombre conserva el único `h1` de la ruta y el rol se expone como texto semántico.
- El contenido del rol se obtiene de las traducciones, sin textos de interfaz en línea.

## Exclusiones

- No se rediseñan las figuras ni la grilla decorativa del hero.
- No se alteran otras rutas o secciones de Inicio.
