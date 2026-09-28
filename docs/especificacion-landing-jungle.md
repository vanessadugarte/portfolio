# Especificación: landing del proyecto Pantano / Swamp

## Objetivo

Completar la landing bilingüe de Pantano / Swamp con la misma estructura editorial y navegación de los proyectos Medusas y Donas, usando únicamente los recursos visuales del proyecto.

## Alcance

- Reemplazar el estado pendiente del proyecto identificado internamente como `jungle` por una ficha de proyecto completa titulada «Pantano» en español y «Swamp» en inglés.
- Mostrar la ilustración final, la paleta de color, dos referencias visuales, el proceso y cinco detalles.
- Presentar la ilustración final y los detalles con máscaras de recorte orgánicas tomadas de `shapes/organic`.
- Dar al título principal de Pantano / Swamp un tratamiento propio: mayor escala, verde de la paleta y una tipografía redondeada y expresiva.
- Enmarcar cada detalle con un contorno verde de 5 px que siga su misma silueta SVG orgánica.
- Rodear la ilustración final con dos o tres adornos vegetales propios de Jungle, pegados irregularmente a su contorno.
- Conectar visualmente las cuatro etapas del proceso con flechas tomadas de `shapes/flechas`.
- Mostrar dos referencias visuales junto a la paleta dentro de la composición hero, sin crear una sección independiente.
- Incorporar el año, la técnica, las herramientas y la descripción entregados para el proyecto.
- Mantener contenido equivalente en español e inglés.
- Preservar la proporción vertical de la obra y los bocetos.

## Flujo de usuario

1. La persona abre Pantano / Swamp desde la categoría Ilustración o desde la navegación entre proyectos.
2. Consulta la descripción y los datos principales del trabajo.
3. Recorre la obra final, las referencias, la paleta, el proceso y los detalles.
4. Continúa al proyecto anterior o siguiente sin perder el contexto de categoría.

## Criterios de aceptación

- `/proyectos/jungle` deja de mostrar el estado «próximamente» y conserva ese slug estable para no romper enlaces existentes.
- El nombre visible es «Pantano» en español y «Swamp» en inglés, tanto en tarjetas como en la ficha del proyecto.
- La landing muestra el título «Referencias» y dos imágenes de referencia localizadas, lado a lado junto a la paleta, sin una sección de referencias independiente.
- La ficha indica 2017, Ilustración digital y Photoshop, Illustrator, Wacom Tablet.
- La paleta presenta sus códigos hexadecimales junto a muestras visibles.
- Se muestran cuatro imágenes de proceso y cinco imágenes de detalle con alternativas localizadas.
- La ilustración final y los detalles usan distintas máscaras orgánicas sin deformar la imagen fuente.
- La ilustración final usa una máscara orgánica vertical que acompaña la proporción completa de la obra.
- Tres adornos vegetales se distribuyen de forma irregular sobre el contorno de la ilustración final sin ocultar su contenido principal.
- Las cuatro imágenes de proceso forman una secuencia conectada por tres flechas decorativas de siluetas distintas; en escritorio, todas mantienen una dirección hacia el siguiente paso.
- Las cuatro imágenes de proceso se muestran en marcos cuadrados sin máscaras orgánicas, con recorte `cover` cuando sea necesario y sin deformar la imagen fuente.
- La secuencia del proceso es vertical en pantallas pequeñas y horizontal en escritorio, sin provocar desplazamiento horizontal.
- El título principal conserva «Pantano» / «Swamp» en caja natural, usa el verde `#6b8534`, una familia tipográfica de aspecto orgánico y un tamaño fluido mayor que el resto de títulos de proyecto, sin provocar desbordamiento a 320 CSS px.
- En todos los tamaños de pantalla, el número `01` comparte la primera fila con el título principal y se alinea con su borde superior para compactar el hero y adelantar la aparición de la ilustración, sin provocar desbordamiento horizontal a 320 CSS px.
- En todos los tamaños de pantalla, la separación vertical entre el resumen del hero y la ilustración final se reduce a 0.5 rem, sin alterar la composición de los demás proyectos.
- En escritorio, la introducción de detalles ocupa una fila completa y las cinco figuras se distribuyen en una fila de ancho completo.
- Las máscaras de la fila de detalles se presentan completas, con una proporción visual más horizontal y poco espacio vacío entre figuras, sin girar, recortar ni deformar las ilustraciones.
- Cada detalle se presenta con un contorno de 5 px en el verde `#6b8534` de la paleta de Pantano; el contorno sigue la misma máscara SVG orgánica de la imagen, sin rotación ni una silueta ampliada visible.
- La descripción que acompaña a la paleta no se muestra en Pantano / Swamp.
- La ilustración final con sus adornos y la paleta se centran horizontalmente en su composición, conservando un ancho máximo de 34 rem para la obra.
- En escritorio, la paleta se alinea verticalmente al centro de la ilustración final.
- La paleta de Pantano / Swamp presenta ocho muestras; en tablet se concentra en una sola fila compacta y, tanto en escritorio como en móvil, se distribuye en dos filas de cuatro.
- En tablet y móvil, los bloques «Paleta de color» y «Referencias» comparten el mismo borde izquierdo; en escritorio, las referencias tienen una separación vertical ampliada respecto de las muestras de color.
- En escritorio, la introducción de Pantano / Swamp limita su ancho de lectura a 26 rem.
- En escritorio, la ficha técnica se sitúa inmediatamente después de la introducción, con una separación de 1.5 rem.
- En todos los tamaños, los rótulos visuales de año, técnica y herramientas se sustituyen por iconos outlined de calendario, pincel y llave, mientras sus nombres localizados permanecen disponibles para tecnologías de asistencia; cada dato se muestra dentro de una etiqueta con borde y los tres comparten fila siempre que haya espacio, pasando a la siguiente línea sólo cuando sea necesario.
- En todos los tamaños, Pantano / Swamp conserva el fondo general amarillo suave del resto de fichas de proyecto y las líneas divisorias entre sus secciones.
- La navegación anterior y siguiente continúa funcionando en español e inglés.
- En escritorio, la fila de navegación «Anterior» y «Siguiente» ocupa todo el ancho disponible del resumen, igual que en Medusas.

## Requisitos no funcionales

- Reutilizar el componente de detalle existente y su arquitectura de contenido.
- Mantener HTML semántico, jerarquía de encabezados, foco de entrada y textos alternativos útiles.
- Ocultar las máscaras, flechas y adornos decorativos a las tecnologías de asistencia, conservando el orden de lectura de las imágenes.
- Conservar el comportamiento responsive y el soporte de movimiento reducido existente.
- Reutilizar tokens Sass para los fondos y espaciados de la composición.

## Exclusiones

- No modificar el orden general del catálogo ni el diseño de otros proyectos.
- No añadir animaciones a las máscaras ni a las flechas.
- No modificar el contenido, el orden de lectura ni la estructura semántica de los pasos.

## Validación

- `npm run lint` y `npm run build`: correctos.
- Limitación: se verificó la compilación y el alcance del selector; no se realizó una auditoría WCAG global porque no cambian controles, semántica ni contenido.
