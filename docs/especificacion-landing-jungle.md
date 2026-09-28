# Especificación: landing del proyecto Pantano / Swamp

## Objetivo

Completar la landing bilingüe de Pantano / Swamp con la misma estructura editorial y navegación de los proyectos Medusas y Donas, usando únicamente los recursos visuales del proyecto.

## Alcance

- Reemplazar el estado pendiente del proyecto identificado internamente como `jungle` por una ficha de proyecto completa titulada «Pantano» en español y «Swamp» en inglés.
- Mostrar la ilustración final, la paleta de color, dos referencias visuales, el proceso y cinco detalles.
- Presentar la ilustración final y los detalles con máscaras de recorte orgánicas tomadas de `shapes/organic`.
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
- Las cuatro imágenes de proceso forman una secuencia conectada por tres flechas decorativas.
- Las cuatro imágenes de proceso se muestran en marcos cuadrados sin máscaras orgánicas, con recorte `cover` cuando sea necesario y sin deformar la imagen fuente.
- La secuencia del proceso es vertical en pantallas pequeñas y horizontal en escritorio, sin provocar desplazamiento horizontal.
- En escritorio, la introducción de detalles ocupa una fila completa y las cinco figuras se distribuyen en una fila de ancho completo.
- Las máscaras de la fila de detalles se presentan completas, con una proporción visual más horizontal y poco espacio vacío entre figuras, sin girar, recortar ni deformar las ilustraciones.
- La descripción que acompaña a la paleta no se muestra en Pantano / Swamp.
- La ilustración final con sus adornos y la paleta se centran horizontalmente en su composición, conservando un ancho máximo de 34 rem para la obra.
- En escritorio, la paleta se alinea verticalmente al centro de la ilustración final.
- La paleta de Pantano / Swamp presenta ocho muestras; en escritorio se distribuyen en dos filas de cuatro, mientras tablet y móvil conservan su distribución responsive actual.
- Los títulos «Paleta de color» y «Referencias» se alinean a la izquierda; en escritorio, las referencias tienen una separación vertical ampliada respecto de las muestras de color.
- En escritorio, la introducción de Pantano / Swamp limita su ancho de lectura a 26 rem.
- En escritorio, la ficha técnica se sitúa inmediatamente después de la introducción, con una separación de 1.5 rem.
- La navegación anterior y siguiente continúa funcionando en español e inglés.
- En escritorio, la fila de navegación «Anterior» y «Siguiente» ocupa todo el ancho disponible del resumen, igual que en Medusas.

## Requisitos no funcionales

- Reutilizar el componente de detalle existente y su arquitectura de contenido.
- Mantener HTML semántico, jerarquía de encabezados, foco de entrada y textos alternativos útiles.
- Ocultar las máscaras, flechas y adornos decorativos a las tecnologías de asistencia, conservando el orden de lectura de las imágenes.
- Conservar el comportamiento responsive y el soporte de movimiento reducido existente.

## Exclusiones

- No modificar el orden general del catálogo ni el diseño de otros proyectos.
- No añadir animaciones a las máscaras ni a las flechas.
