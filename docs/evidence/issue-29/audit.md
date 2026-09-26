# Auditoría visual y táctil — issue #29

Fecha: 19-09-2026
Especificación: [issue #29](https://github.com/vanessadugarte/portfolio/issues/29)

## Alcance y método

Se revisaron Inicio, Proyectos, las cinco categorías, un detalle de proyecto, Experiencia y 404 en español e inglés. La validación automatizada en navegador cubrió 320, 375, 640, 768 y 1280 CSS px, además de 667 × 375 px para orientación horizontal.

- 100 combinaciones de ruta, idioma y ancho para reflujo, recortes y objetivos interactivos.
- 20 combinaciones adicionales en orientación horizontal.
- 640 CSS px se utilizó como equivalente de reflujo de un viewport físico de 1280 px con zoom al 200 %.
- Los ratios se calcularon con luminancia relativa sRGB según WCAG 2.2.
- Se recorrió con teclado el menú, sus enlaces, las figuras del hero, tarjetas, enlaces de proyecto, selector de idioma y llamadas a la acción.

## Contraste de texto

| Uso | Primer plano | Fondo | Ratio | Umbral | Resultado |
| --- | --- | --- | ---: | ---: | --- |
| Texto principal sobre hero | `#fffdf8` | `#152449` | 14.96:1 | 4.5:1 | Cumple |
| Texto secundario al 62 % sobre hero | efectivo `#a6acba` | `#152449` | 6.69:1 | 4.5:1 | Cumple |
| Texto secundario al 70 % sobre hero | efectivo `#b9bdc8` | `#152449` | 8.10:1 | 4.5:1 | Cumple |
| Descripción de tarjeta al 72 % sobre hero | efectivo `#bdc2cc` | `#152449` | 8.51:1 | 4.5:1 | Cumple |
| Cian sobre hero | `#22f2f2` | `#152449` | 10.90:1 | 4.5:1 | Cumple |
| Texto de navegación | `#fffdf8` | `#0d0d1e` | 18.89:1 | 4.5:1 | Cumple |
| Verde de experiencia | `#667747` | `#fffdf8` | 4.81:1 | 4.5:1 | Cumple |
| Tipo de proyecto | `#586c41` | `#fffdf8` | 5.68:1 | 4.5:1 | Cumple |
| Texto secundario claro | `#4c4c4a` | `#fffdf8` | 8.47:1 | 4.5:1 | Cumple |
| Enlace azul | `#344a91` | `#f4f6ff` | 7.68:1 | 4.5:1 | Cumple |
| Número sobre scrim, peor caso blanco | `#fffdf8` | efectivo `#2a2a39` | 13.88:1 | 4.5:1 | Cumple |

## Contraste no textual y estados

| Elemento | Combinación | Ratio | Umbral | Resultado |
| --- | --- | ---: | ---: | --- |
| Bordes de cronología, educación y habilidades | `#908f89` / `#fffdf8` | 3.19:1 | 3:1 | Cumple |
| Bordes de selector y menú | blanco al 48 % / `#0d0d1e` | 4.98:1 | 3:1 | Cumple |
| Foco en superficies oscuras | `#22f2f2` / hero o navegación | 10.90:1–13.76:1 | 3:1 | Cumple |
| Foco en superficies claras | `#344a91` / `#fffdf8` | 8.15:1 | 3:1 | Cumple |
| Foco de imagen de dos tonos | `#fffdf8` + `#344a91` | visible en fondo claro u oscuro | 3:1 | Cumple |

Los enlaces activos también se subrayan y los enlaces de proyecto adquieren subrayado, por lo que los estados no dependen únicamente del color.

## Objetivos de puntero y reflujo

| Escenario | Casos | Objetivo mínimo observado | Scroll horizontal | Controles fuera del viewport | Texto recortado |
| --- | ---: | ---: | --- | --- | --- |
| 320 px, ES/EN | 20 | 40.1 × 44 px | No | No | No |
| 375 px, ES/EN | 20 | 40.1 × 44 px | No | No | No |
| 640 px, ES/EN, equivalente a zoom 200 % | 20 | 40.1 × 44 px | No | No | No |
| 768 px, ES/EN | 20 | 40.1 × 44 px | No | No | No |
| 1280 px, ES/EN | 20 | 40.1 × 44 px | No | No | No |
| 667 × 375 px, orientación horizontal | 20 | >= 24 × 44 px | No | No | No |

El menú abierto se midió adicionalmente: sus seis enlaces tienen 44 px de alto y el panel permanece dentro del viewport tanto a 320 como a 1280 px.

## Foco y movimiento

- El foco de navegación, menú, selector de idioma, figuras, tarjetas, enlaces y 404 es visible mediante un anillo de 3 px o un anillo de dos tonos.
- Los centros de los controles focalizados no quedan cubiertos por contenido de la aplicación.
- `prefers-reduced-motion: reduce` desactiva el desplazamiento suave y las transiciones de chevron, figuras, imágenes y llamadas a la acción; también elimina las transformaciones decorativas de tarjetas y del enlace de experiencia.

## Evidencia visual

- `home-320-es.jpg`: Inicio en español a 320 px.
- `navigation-focus-320-es.jpg`: menú móvil abierto con foco visible.
- `experience-768-en.jpg`: Experiencia en inglés a 768 px.
- `home-1280-en.jpg`: Inicio en inglés a 1280 px.

## Validaciones de repositorio

- `npm run lint`
- `npm run build`
