# Especificación: imágenes de trabajos seleccionados

## Objetivo

Mostrar las imágenes reales de los cuatro trabajos seleccionados en la página de inicio.

## Alcance y flujo

La cuadrícula de trabajos seleccionados debe cargar las imágenes locales en este orden: Donas, Jardín web, Medusas y Ventti. Las previews de Donas, Jardín web y Ventti permanecen en `src/assets/images/selected-work`; la preview de Medusas se carga desde `src/assets/images/projects/illustrations/medusas`. Cada tarjeta mantiene su número, contenido localizado y diseño responsive existente.

## Criterios de aceptación

- El home muestra Donas, Jardín web, Medusas y Ventti en los puestos 01 a 04, respectivamente.
- Las imágenes de Donas, Jardín web y Ventti se importan desde `src/assets/images/selected-work`.
- La imagen `medusas-760x500.jpg` se importa desde `src/assets/images/projects/illustrations/medusas`.
- `iconos-380x300.jpg` no se muestra ni se importa.
- Cada preview se muestra a 380 px de ancho máximo, con proporción 760 × 500, y conserva un recorte responsive en pantallas más estrechas.

## Requisitos no funcionales

- Se mantiene la estructura de contenido localizada para español e inglés.
- Las imágenes decorativas de las tarjetas no añaden contenido redundante para lectores de pantalla.

## Exclusiones

- No se crean landings ni enlaces individuales para estos proyectos.
- No se usa la imagen de iconos.
