# Series de infografías navales

## Objetivo

Presentar las cuatro publicaciones navales como series independientes, con una ilustración de embarcación en cada portada y sus páginas WebP en orden.

## Alcance y flujo

- La ficha «Infografías navales» muestra cuatro portadas: Submarinos, Portaaviones, Cruceros y Primeras embarcaciones.
- La ficha presenta año 2016, técnica Infografía y herramienta Illustrator junto a su descripción.
- Cada portada enlaza a una ruta propia dentro del proyecto.
- Cada ruta muestra el nombre de la serie, un enlace de regreso a la ficha y todas sus páginas seguidas, en orden numérico, sin títulos ni enlaces individuales entre imágenes.
- Las páginas WebP de cada serie se separan verticalmente por un espacio pequeño de `1rem`.
- Las portadas usan ilustraciones ya presentes en las series: páginas 9, 9, 7 y 11, respectivamente.

## Criterios de aceptación

- Las cuatro portadas cargan y abren su serie mediante teclado y puntero.
- Los tres datos técnicos aparecen en español e inglés con la misma estructura semántica que las otras fichas de proyecto.
- Se muestran 14, 12, 10 y 14 páginas, respectivamente, sin omisiones ni repeticiones.
- Cada par de páginas consecutivas tiene una separación vertical uniforme, sin agregar texto entre ellas.
- Las rutas directas funcionan en español e inglés; una serie desconocida muestra la página 404.
- El título del documento y el foco se actualizan al navegar.
- Las imágenes informativas tienen texto alternativo útil; las imágenes de portada son decorativas dentro de enlaces con nombre visible.
- En escritorio, cada página cabe verticalmente en el viewport, sin desbordamiento horizontal; en móvil se adapta al ancho disponible.

## Requisitos no funcionales

- Mantener React Router, Sass, carga diferida de páginas posteriores y los formatos WebP entregados.
- El texto de cuerpo de la ficha conserva la fuente base Inter del portafolio.
- «Publicaciones» usa la fuente de encabezados del portafolio y los nombres de las portadas usan la fuente de cuerpo; no se utiliza Georgia en esta ficha.
- Conservar WCAG 2.2 A y AA en las rutas y controles modificados.

## Exclusiones

- No se agregan visores a tamaño completo, descargas, PDF ni títulos por página.

## Validación

- `npm run test:content`: 21 pruebas aprobadas; comprueba las cuatro series, sus cantidades, orden y textos alternativos en ambos idiomas.
- `npm run lint` y `npm run build`: aprobados.
- Navegador local: rutas directas de las cuatro series, 404, cambio de idioma, foco visible en las portadas y foco en el título al navegar; comprobados en el navegador integrado de Codex.
- Reflujo: en viewport de 320 px no hubo desbordamiento horizontal; en escritorio una página de 504 px de alto cupo en un viewport de 720 px.
- Límite: la revisión visual y de teclado se hizo en el navegador integrado; no se probó con lector de pantalla.
- Actualización de la ficha técnica: `npm run test:content`, `npm run lint` y `npm run build` aprobados; en el navegador integrado se comprobó la lista de definición, la fuente Inter y la ausencia de desbordamiento a 320 y 1280 px.
- Homologación tipográfica: `npm run lint` y `npm run build` aprobados; el navegador integrado confirmó Google Sans en «Publicaciones», Inter en los nombres de las portadas y ausencia de desbordamiento a 320 y 1280 px.
- Separación de páginas: `npm run lint` y `npm run build` aprobados; el navegador integrado midió `16px` entre dos WebP consecutivos, sin desbordamiento a 320 y 1280 px.
