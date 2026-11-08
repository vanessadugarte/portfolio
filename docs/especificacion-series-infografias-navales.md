# Series de infografías navales

## Objetivo

Presentar las cuatro publicaciones navales como series independientes, con una ilustración de embarcación en cada portada y sus páginas WebP en orden.

## Alcance y flujo

- La ficha «Infografías navales» muestra cuatro portadas: Submarinos, Portaaviones, Cruceros y Primeras embarcaciones.
- Cada portada enlaza a una ruta propia dentro del proyecto.
- Cada ruta muestra el nombre de la serie, un enlace de regreso a la ficha y todas sus páginas seguidas, en orden numérico, sin títulos ni enlaces individuales entre imágenes.
- Las portadas usan ilustraciones ya presentes en las series: páginas 9, 11, 7 y 9, respectivamente.

## Criterios de aceptación

- Las cuatro portadas cargan y abren su serie mediante teclado y puntero.
- Se muestran 14, 12, 10 y 14 páginas, respectivamente, sin omisiones ni repeticiones.
- Las rutas directas funcionan en español e inglés; una serie desconocida muestra la página 404.
- El título del documento y el foco se actualizan al navegar.
- Las imágenes informativas tienen texto alternativo útil; las imágenes de portada son decorativas dentro de enlaces con nombre visible.
- En escritorio, cada página cabe verticalmente en el viewport, sin desbordamiento horizontal; en móvil se adapta al ancho disponible.

## Requisitos no funcionales

- Mantener React Router, Sass, carga diferida de páginas posteriores y los formatos WebP entregados.
- Conservar WCAG 2.2 A y AA en las rutas y controles modificados.

## Exclusiones

- No se agregan visores a tamaño completo, descargas, PDF ni títulos por página.

## Validación

- `npm run test:content`: 21 pruebas aprobadas; comprueba las cuatro series, sus cantidades, orden y textos alternativos en ambos idiomas.
- `npm run lint` y `npm run build`: aprobados.
- Navegador local: rutas directas de las cuatro series, 404, cambio de idioma, foco visible en las portadas y foco en el título al navegar; comprobados en el navegador integrado de Codex.
- Reflujo: en viewport de 320 px no hubo desbordamiento horizontal; en escritorio una página de 504 px de alto cupo en un viewport de 720 px.
- Límite: la revisión visual y de teclado se hizo en el navegador integrado; no se probó con lector de pantalla.
