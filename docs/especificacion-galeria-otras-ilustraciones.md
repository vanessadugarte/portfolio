# Galería de otras ilustraciones

## Objetivo

Publicar tres ilustraciones digitales independientes como un proyecto de la categoría Ilustración, sin atribuirles un proceso de trabajo que no se ha documentado.

## Alcance

La ficha usa la miniatura existente y muestra las tres obras completas en una galería adaptable. El contenido y los controles están disponibles en español e inglés. La tarjeta ocupa el último lugar de la categoría Ilustración.

## Flujo de usuario

Desde la categoría Ilustración, la persona abre «Otras ilustraciones», examina las obras y selecciona cualquiera para verla ampliada. Puede cerrar la vista con el botón, Escape o el fondo del diálogo y vuelve al control que la abrió.

## Criterios de aceptación

- El proyecto aparece en Ilustración y abre su propia ruta.
- «Otras ilustraciones» es el último proyecto en la categoría Ilustración, incluido el orden de navegación anterior/siguiente dentro de esa categoría.
- Las tres ilustraciones se muestran sin recortes, con sus proporciones originales.
- Cada obra se amplía mediante un botón accesible por teclado y puntero.
- La vista ampliada ofrece cierre y mantiene el foco dentro mientras está abierta.
- Título, descripción, nombres de controles y alternativas de imagen se localizan en español e inglés.
- La ficha no presenta proceso, paleta ni datos técnicos inventados.
- `npm run build`, `npm run lint` y `npm run test:content` terminan correctamente.

## Requisitos no funcionales

El diseño debe funcionar desde 320 CSS px, mantener foco visible y respetar la interacción nativa del diálogo.

## Exclusiones

No se añade carrusel, navegación automática ni nuevas imágenes.

## Validación

- Ajuste de orden: `npm run build`, `npm run lint` y `npm run test:content` correctos (23 pruebas de contenido). En el navegador integrado de Codex, «Otras ilustraciones» aparece al final de Ilustración; al abrirla desde la categoría, el foco llega al título, la navegación anterior apunta a «Velas Angel's Sighs» y no aparece un proyecto siguiente.
- `npm run build`, `npm run lint` y `npm run test:content`: correctos (23 pruebas de contenido).
- Navegador integrado de Codex: comprobación visual en escritorio y reflujo a 320 CSS px; ancho de documento igual al ancho de ventana (320 px), sin desplazamiento horizontal.
- Navegador integrado de Codex: el diálogo muestra nombre e imagen accesibles; Escape lo cierra y devuelve el foco al botón que lo abrió.
- Navegador integrado de Codex: al cambiar a inglés se actualizan título, nombres de controles, contenido y `html[lang]`.
- Límite: no se realizó una auditoría global ni una prueba con lector de pantalla; la validación se centró en la nueva ficha.
