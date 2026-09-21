# Especificación: ajuste de espaciado tras Educación

## Objetivo

Disminuir el espacio vertical previo a Trayectoria, Educación y Habilidades técnicas en la landing de experiencia.

## Alcance

- Ajustar el margen superior del bloque Habilidades técnicas cuando sigue al bloque Educación.
- Reducir el margen entre la introducción y el título Trayectoria.
- Reducir el relleno vertical previo a los títulos Educación y Habilidades técnicas.
- Conservar los separadores, la tipografía y el contenido de los bloques.

## Flujo de usuario

La persona recorre la experiencia con separaciones visuales más compactas entre la introducción, Trayectoria, Educación y Habilidades técnicas.

## Criterios de aceptación

- En español, el espacio que sigue a `Maracaibo, Zulia, Venezuela | Septiembre 2011 - Mayo 2016` es menor que antes.
- El título Trayectoria queda más cerca de la introducción.
- El ajuste de Trayectoria se mantiene tanto en móvil como desde el punto de quiebre de tablet.
- Los títulos Educación y Habilidades técnicas quedan más cerca de sus respectivos separadores superiores.
- El ajuste se aplica también al contenido equivalente en inglés por compartir la misma estructura.
- La separación entre los elementos internos de cada bloque no cambia.
- `npm run lint` y `npm run build` finalizan correctamente.

## Requisitos no funcionales

- Mantener Sass y los tokens visuales existentes.
- Conservar reflujo responsive y contraste del separador.

## Exclusiones

- Cambios de contenido, navegación, tipografía o estructura semántica.
