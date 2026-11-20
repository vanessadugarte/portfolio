# Especificación: ficha de Angel's Sighs

## Objetivo

Completar la ficha bilingüe de Angel's Sighs para presentar las aplicaciones en velas y la colección de ilustraciones vectoriales creadas para imprimir en tapas de madera según cada fragancia.

## Alcance

- Mantener el proyecto dentro de la categoría Ilustración y conservar su slug `angels-sighs`.
- Sustituir el estado «Próximamente» por una ficha completa en español e inglés.
- Presentar la foto principal, las diez ilustraciones finales y dos aplicaciones en velas disponibles en `src/assets/images/projects/illustrations/candles/`.
- Incorporar los dos videos de proceso de Lavender y Sacred Fire mediante versiones web H.264, con controles nativos, sin reproducción automática y con el primer fotograma de cada video como portada.
- Comunicar el año 2025, el trabajo de ilustración vectorial y el uso de Adobe Illustrator y Wacom Tablet.

## Flujos de usuario

1. La persona abre Angel's Sighs desde Ilustración y encuentra el contexto del encargo, el año, la técnica y las herramientas.
2. Tras la foto 01, recorre la colección de ilustraciones como sección 02.
3. Consulta las aplicaciones en velas (03) y el proceso de ilustración (04).
4. Reproduce, pausa o recorre con los controles nativos cualquiera de los dos videos de proceso.
5. Puede volver a Ilustración o navegar al proyecto anterior conservando el contexto de categoría.
6. Al cambiar el idioma, se actualizan el título del documento, los textos, los rótulos y las alternativas de las imágenes.

## Criterios de aceptación

- La ruta `/proyectos/angels-sighs` deja de mostrar «Próximamente» / «Coming soon» y contiene un único `h1` localizado.
- La ficha muestra `velas.png`, las dos aplicaciones `vela-dragon.png` y `vela-enchanted.png` y las diez ilustraciones cuadradas sin deformación y con alternativas útiles localizadas.
- No se muestran el bloque de identidad, logos, etiqueta aislada ni referencias al diseño del logo en español o inglés. Se conservan las fotografías originales del producto.
- El bloque de aplicaciones excluye la fotografía Sweet Vanilla (perritos) y presenta Sacred Fire y Enchanted Blossom en dos columnas desde tablet y una en móvil; se conserva la ilustración Ten Dogs en la colección.
- La colección aparece inmediatamente después de la foto principal, numerada 02, en una columna móvil y dos desde tablet; en escritorio ocupa todo el ancho de la sección.
- En escritorio, la foto principal mantiene su proporción completa y una altura máxima del 65 % del viewport, con límite de 40rem.
- Los videos de Lavender y Sacred Fire se muestran con controles nativos, `preload="metadata"`, portada extraída del primer fotograma con fondo blanco e interfaz de Illustrator, reproducción iniciada por la persona y una fuente H.264 compatible con navegadores actuales.
- La ficha técnica muestra año 2025, ilustración vectorial, Adobe Illustrator y Wacom Tablet, con etiquetas localizadas.
- En escritorio, el `h1` mide `5rem`, la introducción no supera `44rem` y la ficha técnica no supera `23rem`, con separación visual entre ambas.
- En móvil, todo el contenido refluye a 320 CSS px sin desplazamiento horizontal; las galerías y videos conservan su proporción.
- No se crea una paleta explicativa: cualquier representación cromática propia del material de marca se presenta únicamente como parte de la imagen original.
- La navegación por teclado, el foco de entrada, los controles nativos de video, `html[lang]` y la navegación SPA existentes se conservan.

## Requisitos no funcionales

- Reutilizar el catálogo centralizado, React Router, Sass y la arquitectura bilingüe, sin textos de interfaz dentro del componente.
- Cargar de forma prioritaria solo la imagen principal; el resto de las imágenes usa carga diferida y dimensiones intrínsecas.
- Mantener WCAG 2.2 A/AA como línea base, con estructura semántica, alternativas localizadas, foco visible y videos que no se reproducen automáticamente.
- Evitar dependencias nuevas y preservar las demás fichas y cambios en curso del catálogo.

## Exclusiones

- No se modifica el orden del catálogo ni se incorpora Angel's Sighs a Trabajos seleccionados.
- No se crean nuevas ilustraciones, fotografías, animaciones ni una identidad diferente a los recursos proporcionados.
- No se añaden fragancias o nombres comerciales que no estén identificados por los archivos existentes.

## Validación anterior a este ajuste

- `npm run test:content` (19 pruebas), `npm run lint`, `npm run build` y `git diff --check`: correctos.
- Navegador integrado (Chromium), a 1280 CSS px: un único `h1` de 80 px, introducción de 704 px (`44rem`), ficha técnica de 368 px (`23rem`) con separador, 17 imágenes, dos videos y ningún desbordamiento horizontal.
- Navegador integrado (Chromium), a 320 CSS px: un único `h1`, `scrollWidth` y `clientWidth` de 320 px, galerías reordenadas sin recorte y ambos videos visibles con controles nativos.
- Los dos videos H.264 cargaron completamente (`readyState` 4) con dimensiones de 1280 × 712 px, portada, controles y sin reproducción automática. No se realizó una auditoría del contenido de la pista de audio; si contiene voz relevante, requerirá subtítulos sincronizados.
- Al abrir la ficha mediante navegación SPA desde Ilustración, el foco llegó al `h1` con `scrollY` 0. El cambio a español actualizó el título del documento, el contenido, las alternativas y `html[lang]` sin recargar la página.
- La revisión de accesibilidad se limitó a semántica, jerarquía de encabezados, contenido informativo, idioma, foco, reflujo y controles de video de esta ruta; no se modificaron los controles compartidos ni se ejecutó una auditoría global con lector de pantalla.

## Validación del ajuste de composición

- `npm run lint`, `npm run test:content` (22 pruebas), `npm run build` y `git diff --check`: correctos. Build conserva la advertencia de tamaño de bundle superior a 500 kB.
- Navegador integrado de Codex (Chromium), ruta `/#/proyectos/angels-sighs`: revisión visual y mediciones del DOM a 1280 × 900. Foto principal de 585 px de alto (65 % del viewport), sin recorte; ilustraciones de 560 px en dos columnas, después de la foto, como sección 02. Aplicaciones 03 y proceso 04.
- Reflujo mediante viewport: a 768 px, dos columnas de 352 px; a 320 px, una columna de 280 px. Sin desbordamiento horizontal en los tres anchos.
- Árbol de accesibilidad y DOM: un h1, tres h2 en orden, 14 imágenes con alternativas. Cambio de idioma comprobado con título, contenido y `html[lang]` sincronizados; no quedan referencias al logo en el texto de la ficha.
- Alcance: presentación, orden de lectura y contenido bilingüe modificados. No se modificaron controles ni gestión de foco; no se repitió una auditoría global ni se ejecutaron axe o lector de pantalla.

## Ajuste: dos aplicaciones en velas

Se retira Sweet Vanilla del bloque de fotografías y de su contenido localizado. Las dos fotografías restantes ocupan una fila desde tablet.

- `npm run lint`, las 22 pruebas de `npm run test:content`, `npm run build` y `git diff --check`: correctos. Se mantiene la advertencia de tamaño del bundle.
- Navegador integrado (Chromium), mediciones DOM: a 1280 × 900, dos columnas de aproximadamente 391 px con Sacred Fire y Enchanted Blossom; a 320 × 740, una columna de 280 px. Sin desbordamiento horizontal.
- Ambas fotos conservan sus alternativas; la colección mantiene sus diez ilustraciones. Validación limitada al contenido y reflujo modificados, sin auditoría global ni lector de pantalla.

## Ajuste: portadas de los videos

Al llegar a la sección 04, cada video muestra su primer fotograma real, con fondo blanco e interfaz de Illustrator. Se conserva la proporción del fotograma, los controles nativos, las etiquetas accesibles y el inicio manual de reproducción. No se modifica el video ni se generan ilustraciones nuevas.

- Portadas JPEG extraídas con AVFoundation en t=0, a 1280 × 712 px: Lavender (192265 bytes) y Sacred Fire (157012 bytes). Revisión visual de ambas: fondo blanco y herramientas de Illustrator; Sacred Fire comienza con un acercamiento al dragón.
- Navegador integrado (Chromium), 1280 × 900: ambas portadas nuevas visibles en la sección 04 y proporción 160:89, sin recorte añadido. Controles nativos presentes, reproducción pausada y autoplay desactivado. A 320 × 740: videos de 280 × 155,75 px sin desbordamiento horizontal.
- `npm run lint`, `npm run test:content` (22 pruebas), `npm run build` y `git diff --check`: correctos. Persiste la advertencia de tamaño del bundle superior a 500 kB.
- Validación limitada a portadas, proporción y estados iniciales de los videos; no se cambiaron controles, nombres accesibles ni pistas multimedia y no se repitió una auditoría global.

## Ajuste: decoración de fondo en escritorio

- Objetivo y alcance: distinguir los adornos de las ilustraciones circulares al recorrer la ficha desde 1024 CSS px.
- Criterios: sustituir los dos círculos de 320/416 px de diámetro por doce círculos de 48/80 px, distribuidos a ambos lados de la página. Mantener los tonos suaves de la ficha y la legibilidad del contenido.
- Requisitos: decoración estática mediante fondos Sass, sin nodos accesibles ni interacción; sin desbordamiento horizontal. Tamaños y colores centralizados en tokens.
- Exclusiones: no modificar ilustraciones, fotografías, videos, controles ni la decoración de móvil y tablet.

Validación del ajuste:

- `npm run lint`, `npm run build` y `git diff --check`: correctos; build mantiene la advertencia existente del bundle de más de 500 kB.
- Navegador integrado (Chromium): revisión visual a 1280 × 900 de círculos pequeños en los márgenes junto a la colección, diferenciados de las ilustraciones y fuera del texto en esa vista.
- Estilos calculados: doce gradientes con radios de 24/40 px en escritorio (1280 y 1024 px); los dos originales se conservan a 768 y 320 px. Sin desbordamiento horizontal en los cuatro anchos.
- Validación de accesibilidad limitada a presentación y reflujo: decoración CSS estática sin cambios en semántica, foco o interacción; no se ejecutó una auditoría global ni lector de pantalla.

## Ajuste: separación bajo la foto principal

- Objetivo: acercar la sección de ilustraciones a la foto principal para reducir el espacio vertical vacío.
- Alcance y flujo: en Angel's Sighs, al avanzar desde la foto principal hacia la colección, se elimina la línea divisora y se usa una separación más corta en móvil, tablet y escritorio.
- Criterios de aceptación: no aparece un borde entre la foto y la sección 02; la distancia entre ambas disminuye; la imagen conserva su proporción y la colección sigue siendo la sección 02. Los separadores de las secciones posteriores permanecen visibles.
- Requisitos no funcionales: usar Sass y mantener el reflujo desde 320 CSS px sin cambiar semántica, contenido ni comportamiento.
- Exclusiones: no cambiar otras fichas, fotografías, ilustraciones o videos.

Validación del ajuste:

- `npm run build`, `npm run lint` y `git diff --check`: correctos. El build mantiene la advertencia existente del bundle superior a 500 kB.
- Navegador integrado de Codex (Chromium): revisión visual a 1280 × 900; entre la foto y el título 02 hay 48 px de relleno superior, sin margen inferior en la foto ni borde. El separador de la sección siguiente conserva 1 px.
- A 320 × 740, el relleno superior es de 32 px y `scrollWidth` coincide con `clientWidth` (320 px); la foto mide 280 px de ancho. No se observaron cambios semánticos ni de interacción, por lo que la validación de accesibilidad se limitó al reflujo y la presentación modificados.

## Ajuste: tamaño de las ilustraciones circulares en escritorio

- Objetivo: reducir ligeramente la presencia visual de las diez ilustraciones circulares de la colección.
- Alcance y flujo: en la sección 02 de Angel's Sighs, cada círculo se centra dentro de su columna y ocupa el 90 % del ancho disponible desde el breakpoint de escritorio.
- Criterios de aceptación: los diez círculos son algo menores en escritorio, mantienen proporción 1:1 y dos columnas, y sus leyendas continúan centradas. En móvil y tablet conservan el tamaño actual.
- Requisitos no funcionales: usar Sass, sin introducir desbordamiento horizontal ni alterar las imágenes o alternativas.
- Exclusiones: no cambiar los círculos decorativos del fondo ni las demás secciones o fichas.

Validación del ajuste:

- `npm run build`, `npm run lint` y `git diff --check`: correctos; permanece la advertencia existente de tamaño del bundle.
- Navegador integrado de Codex (Chromium): revisión visual y medidas a 1280 × 900 y 1024 × 900. Los círculos miden 504 px dentro de columnas de 560 px y 400 px dentro de columnas de 445 px, respectivamente; conservan proporción cuadrada y quedan centrados.
- A 768 px y 320 px miden 352 px y 280 px, el ancho completo de su columna. En los cuatro anchos `scrollWidth` coincide con `clientWidth`; no se modificaron semántica ni interacción.

## Ajuste: pares de ilustraciones y títulos

- Objetivo: dar más aire a las ilustraciones principales en escritorio y facilitar la lectura de sus nombres.
- Alcance y flujo: en la colección 02, reducir ligeramente los círculos y acercar cada par al centro desde el breakpoint de escritorio; colocar el nombre localizado encima de cada ilustración en todos los tamaños.
- Criterios de aceptación: la colección conserva diez ilustraciones en dos columnas desde tablet y una en móvil; en escritorio los círculos son menores que antes y los centros de las dos columnas están más próximos; cada nombre aparece inmediatamente encima de su círculo y conserva su asociación semántica con la imagen.
- Requisitos no funcionales: usar Sass, mantener las proporciones 1:1, las alternativas localizadas y el reflujo a 320 CSS px sin desbordamiento horizontal.
- Exclusiones: no cambiar los círculos decorativos, los recursos gráficos ni las demás secciones o fichas.

Validación del ajuste:

- `npm run build`, `npm run lint` y `git diff --check`: correctos; el build mantiene la advertencia existente de bundle superior a 500 kB.
- Navegador integrado (Chromium), a 1280 × 900: revisión visual de la colección; los dos primeros círculos miden 452 px, quedan centrados en una cuadrícula de 1037 px y sus nombres aparecen arriba. No hay desbordamiento horizontal.
- A 320 × 740: una columna de 280 px, diez figuras, nombres encima de los círculos y `scrollWidth` igual a 320 px. La validación de accesibilidad se limitó al orden semántico del nombre y al reflujo; no se modificaron controles ni gestión de foco.
