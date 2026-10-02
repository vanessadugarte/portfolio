# Especificación: eliminación de categoría redundante en fichas de proyecto

## Objetivo

Eliminar el rótulo de categoría o tipo que se muestra inmediatamente antes del título principal en las fichas individuales de proyecto, porque repite información de la navegación y no aporta al contenido de la ficha.

## Alcance

- Retirar el rótulo de categorías de las fichas aún pendientes.
- Retirar el rótulo de tipo de las fichas completas que lo muestran.
- Aplicar el cambio a todas las rutas de detalle, en español e inglés.

## Flujo de usuario

Al abrir cualquier proyecto, la persona encuentra la navegación de retorno y, a continuación, el título principal del proyecto sin una etiqueta de categoría redundante encima.

## Criterios de aceptación

- Ninguna ficha de proyecto renderiza un texto de categoría o tipo inmediatamente antes de su `h1`.
- El título principal, la navegación y el resto del contenido permanecen disponibles y localizados.
- `npm run lint` y `npm run build` finalizan correctamente.

## Requisitos no funcionales

- Conservar un único `h1` por ficha y la navegación mediante teclado existente.
- No modificar el catálogo ni los rótulos de categoría usados en tarjetas o navegación.

## Exclusiones

- No cambiar títulos, descripciones, metadatos, rutas ni estilos de las páginas de categoría.
