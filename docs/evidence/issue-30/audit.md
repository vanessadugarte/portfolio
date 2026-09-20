# Auditoría WCAG 2.2 A/AA — issue #30

Fecha: 19-09-2026. Especificación: [issue #30](https://github.com/vanessadugarte/portfolio/issues/30). Norma: [WCAG 2.2](https://www.w3.org/TR/WCAG22/). La matriz cubre los 55 criterios A/AA de WCAG 2.2; 4.1.1 no aparece porque fue eliminado en esta versión. «V» significa aplicable y verificado en el alcance descrito; «NA» significa que no existe el contenido o flujo que activa el criterio. Una auditoría de este repositorio no constituye una certificación de conformidad de futuras versiones o contenidos.

## Método y trazabilidad

| Clave | Evidencia |
| --- | --- |
| D | Inspección automatizada del DOM en Chrome, 14 rutas × `es`/`en` = 28 combinaciones: exactamente un `main` y un `h1`, navegación fuera de `main`, jerarquía sin saltos, títulos localizados, `lang` efectivo, nombres no vacíos en enlaces/botones, `alt` presente en imágenes, IDs únicos y sin desbordamiento horizontal a 1280 CSS px. Incluye los cinco listados de categoría, cuatro detalles, estado vacío, detalle inexistente y 404. Cero fallos. |
| A | `axe-core 4.13.0` mediante `@axe-core/cli` y Chrome headless en Inicio, Proyectos, Ilustración, detalle Medusas, Experiencia, detalle inexistente y 404: cero violaciones en las siete URL en español. Comando reproducible abajo. El escáner no sustituye las pruebas manuales ni cubre todos los criterios. |
| K | Prueba manual en Chrome con Tab/Shift+Tab, Enter, Escape, ratón y viewport móvil de 390 × 844: enlace de salto enfoca `main` sin cambiar la ruta; menú nativo abre con Enter, Tab llega a sus seis enlaces, Escape cierra y devuelve foco al `summary`, salir con Tab y hacer clic fuera lo cierran; hover permite entrar en el panel y salir lo descarta. Navegación a Experiencia, atrás/adelante y cambio de idioma conservan una secuencia de foco lógica; los cambios de ruta enfocan `h1` sin desplazamiento adicional y el selector conserva su foco al cambiar idioma. |
| T28 | [Issue #28](https://github.com/vanessadugarte/portfolio/issues/28) cerrado mediante [PR #31](https://github.com/vanessadugarte/portfolio/pull/31): 104 combinaciones para tamaño de texto/reflujo, 26 para texto al 200 % y 52 para espaciado; mínimo 16 px sin recortes ni desbordes. |
| T29 | [Issue #29](https://github.com/vanessadugarte/portfolio/issues/29) cerrado mediante [PR #32](https://github.com/vanessadugarte/portfolio/pull/32) y su [auditoría visual y táctil](../issue-29/audit.md): ratios de contraste, foco visible/no oculto, objetivos de puntero y reflujo en ES/EN y móvil/escritorio. |
| L | Prueba manual con VoiceOver de macOS y Google Chrome (interfaz del sistema en español, sitio en ES/EN). En Inicio anunció el enlace «Saltar al contenido principal» y la navegación; el menú «Proyectos» se anunció como desplegable contraído, después expandido, y sus enlaces se leyeron por nombre. Escape lo cerró y devolvió el foco al control. El botón de idioma se anunció como «Cambiar idioma a inglés» y, al activarlo, como «Switch language to Spanish»; el título de ventana cambió a inglés. Al navegar por teclado a Experiencia, VoiceOver anunció «Professional experience» como encabezado de nivel 1 y Chrome mostró el título correspondiente. En 404 directo, la jerarquía accesible expuso «Page not found» como encabezado de nivel 1, el enlace «Back to Home» y el título localizado; el enlace de salto llevó al contenido principal. Sin bloqueos observados en estos flujos. VoiceOver se desactivó al terminar. |

Para repetir A con el servidor Vite local en `127.0.0.1:4173`:

```bash
npm exec --yes --package @axe-core/cli -- axe \
  'http://127.0.0.1:4173/#/' \
  'http://127.0.0.1:4173/#/proyectos' \
  'http://127.0.0.1:4173/#/proyectos/ilustracion' \
  'http://127.0.0.1:4173/#/proyectos/medusas' \
  'http://127.0.0.1:4173/#/experiencia' \
  'http://127.0.0.1:4173/#/proyectos/inexistente' \
  'http://127.0.0.1:4173/#/ruta-inexistente' --exit
```

## Matriz completa

### 1. Perceptible

| Criterio | Nivel | Estado | Evidencia o motivo |
| --- | --- | --- | --- |
| 1.1.1 Contenido no textual | A | V | D, A: imágenes de tarjetas con alternativa vacía por ser redundantes al enlace y título; SVG decorativos ocultos, controles nombrados. |
| 1.2.1 Solo audio/vídeo pregrabado | A | NA | No hay medios temporales. |
| 1.2.2 Subtítulos pregrabados | A | NA | No hay vídeo con audio. |
| 1.2.3 Audiodescripción o alternativa | A | NA | No hay vídeo pregrabado. |
| 1.2.4 Subtítulos en directo | AA | NA | No hay transmisiones en directo. |
| 1.2.5 Audiodescripción pregrabada | AA | NA | No hay vídeo pregrabado. |
| 1.3.1 Información y relaciones | A | V | D, A, L: landmarks, secciones, listas y jerarquía de encabezados. |
| 1.3.2 Secuencia significativa | A | V | D, K, L: lectura y Tab siguen el orden visual; navegación precede a `main`. |
| 1.3.3 Características sensoriales | A | NA | No hay instrucciones que dependan solo de posición, forma o sonido. |
| 1.3.4 Orientación | AA | V | T29: 667 × 375 CSS px sin pérdida funcional. |
| 1.3.5 Propósito de campos de entrada | AA | NA | No hay formularios ni campos de datos personales. |
| 1.4.1 Uso del color | A | V | T29: estados activos también subrayados. |
| 1.4.2 Control del audio | A | NA | No se reproduce audio automáticamente. |
| 1.4.3 Contraste mínimo | AA | V | T29: ratios de texto medidos entre 4.81:1 y 18.89:1 según fondo/uso. |
| 1.4.4 Cambio de tamaño del texto | AA | V | T28, T29: texto al 200 % sin pérdida. |
| 1.4.5 Imágenes de texto | AA | V | D: el texto funcional es HTML, no imagen; las imágenes de proyecto son ilustrativas. |
| 1.4.10 Reajuste/reflujo | AA | V | T28, T29: 320 CSS px y equivalente a zoom 200 % sin scroll bidimensional. |
| 1.4.11 Contraste no textual | AA | V | T29: bordes y foco ≥ 3:1. |
| 1.4.12 Espaciado del texto | AA | V | T28: 52 combinaciones ES/EN sin recortes. |
| 1.4.13 Contenido en hover o foco | AA | V | K: panel permanece mientras puntero/foco está dentro; Escape o salida lo descarta. |

### 2. Operable

| Criterio | Nivel | Estado | Evidencia o motivo |
| --- | --- | --- | --- |
| 2.1.1 Teclado | A | V | K: rutas, menú, figuras, tarjetas, selector y salto operables sin ratón. |
| 2.1.2 Sin trampa de teclado | A | V | K: Tab/Shift+Tab salen del menú; Escape devuelve el foco. |
| 2.1.4 Atajos de teclas de carácter | A | NA | No hay atajos de una sola tecla. |
| 2.2.1 Tiempo ajustable | A | NA | No hay límites de tiempo. |
| 2.2.2 Pausar, detener, ocultar | A | NA | No hay movimiento, parpadeo o actualización automática de información de más de cinco segundos. |
| 2.3.1 Tres destellos o menos | A | NA | No hay contenido que destelle. |
| 2.4.1 Evitar bloques | A | V | K: primer enlace visible al enfocarlo salta al `main` sin modificar el hash de React Router. |
| 2.4.2 Titulado de páginas | A | V | D: títulos específicos y localizados en 28 combinaciones, incluidos 404 y detalle inexistente. |
| 2.4.3 Orden del foco | A | V | K, L: orden lógico; destino de navegación SPA en `h1`; atrás/adelante también. |
| 2.4.4 Propósito de enlaces en contexto | A | V | D, A: imágenes enlazadas tienen nombre «Ver proyecto: [título]»; otros enlaces se entienden por texto o tarjeta. |
| 2.4.5 Múltiples vías | AA | V | D: navegación global, listado total y categorías ofrecen rutas alternativas a proyectos. |
| 2.4.6 Encabezados y etiquetas | AA | V | D: un `h1` por ruta, niveles sin saltos, etiquetas descriptivas. |
| 2.4.7 Foco visible | AA | V | T29, K: anillos de foco en teclado. |
| 2.4.11 Foco no oculto (mínimo) | AA | V | T29, K: foco no queda totalmente cubierto. |
| 2.5.1 Gestos de puntero | A | NA | No hay gestos multipunto o dependientes de trayectoria. |
| 2.5.2 Cancelación de puntero | A | V | K: enlaces/controles nativos se activan en clic; descarte exterior del menú usa `click`, no `pointerdown`. |
| 2.5.3 Etiqueta incluida en nombre | A | V | D, A: nombres accesibles contienen la etiqueta visible. |
| 2.5.4 Activación por movimiento | A | NA | No hay sensores de movimiento. |
| 2.5.7 Movimientos de arrastre | AA | NA | No hay acciones de arrastrar. |
| 2.5.8 Tamaño de objetivo (mínimo) | AA | V | T29: objetivos medidos ≥ 24 × 44 CSS px, menú 44 px de alto. |

### 3. Comprensible

| Criterio | Nivel | Estado | Evidencia o motivo |
| --- | --- | --- | --- |
| 3.1.1 Idioma de la página | A | V | D, L: `html[lang]` es `es`/`en` desde carga y al alternar. |
| 3.1.2 Idioma de las partes | AA | NA | El contenido visible sigue el idioma elegido; nombres propios y términos técnicos aislados no constituyen pasajes en otra lengua. |
| 3.2.1 Al recibir el foco | A | V | K: Tab no cambia ruta/idioma; el menú se abre solo por activación o hover. |
| 3.2.2 Al recibir entradas | A | V | K: el cambio de idioma ocurre solo al activar explícitamente el botón. |
| 3.2.3 Navegación consistente | AA | V | D: misma navegación y orden en todas las rutas y ambos idiomas. |
| 3.2.4 Identificación consistente | AA | V | D: controles y categorías conservan función/nombre traducido. |
| 3.2.6 Ayuda consistente | A | NA | No existe mecanismo de ayuda repetido. |
| 3.3.1 Identificación de errores | A | NA | No hay entrada de datos ni errores de formulario. |
| 3.3.2 Etiquetas o instrucciones | A | NA | No hay campos de entrada. |
| 3.3.3 Sugerencias ante errores | AA | NA | No hay validación de entradas. |
| 3.3.4 Prevención de errores legales/financieros/datos | AA | NA | No hay transacciones ni envío de datos. |
| 3.3.7 Entrada redundante | A | NA | No hay procesos de captura de datos. |
| 3.3.8 Autenticación accesible (mínimo) | AA | NA | No hay autenticación. |

### 4. Robusto

| Criterio | Nivel | Estado | Evidencia o motivo |
| --- | --- | --- | --- |
| 4.1.2 Nombre, función, valor | A | V | D, A, K, L: enlaces, botón de idioma y `summary` nativo con estado abierto/cerrado. |
| 4.1.3 Mensajes de estado | AA | NA | No hay avisos dinámicos independientes del cambio de página; la navegación cambia título y foco. |

## Resultados, límites y verificaciones pendientes

- No se detectaron violaciones automáticas confirmadas en las siete rutas examinadas por axe. Sus reglas no verifican todas las WCAG ni el funcionamiento con tecnología de asistencia.
- El barrido DOM cubrió las 14 rutas en ambos idiomas a 1280 CSS px; los casos de zoom, otros anchos y contrastes se apoyan en las evidencias de #28/#29. Las capturas de esos issues muestran estados visuales previos a esta corrección semántica, aunque su CSS continúa en la base de esta rama.
- La prueba con VoiceOver cubrió Inicio, menú, transición SPA, cambio de idioma y 404 en Chrome, pero no constituye una prueba exhaustiva de cada ruta, navegador, lector de pantalla o dispositivo móvil. El 404 se inspeccionó mediante carga directa; la transición SPA se comprobó en Experiencia.
- `npm run test:content`: 9/9 pruebas correctas. `npm run lint`: sin errores. `npm run build`: compilación correcta. `npm run test:branch-policy`: 4/4 pruebas correctas.
