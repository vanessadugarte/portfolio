# Especificación: contenido y línea de tiempo de experiencia

## Objetivo

Actualizar la landing de experiencia con la trayectoria completa del CV y presentar cada cargo mediante la misma línea de tiempo visual con círculos utilizada en la sección de experiencia del inicio.

## Alcance

- Mostrar seis cargos, desde AFP Modelo hasta Muchokids App, en orden cronológico inverso.
- Incluir cargo, empresa, ubicación, periodo y todas las responsabilidades entregadas para cada experiencia.
- Representar cada cargo con un marcador circular conectado por una línea vertical.
- Mantener localizados el contenido y la estructura para español e inglés.
- Presentar Educación y Habilidades/Idiomas como contenido editorial continuo: sin tarjetas, con una línea divisoria superior por sección y una fila de texto por cada habilidad.

## Flujo de usuario

1. La persona abre la ruta de experiencia.
2. Recorre los cargos de más reciente a más antiguo en una única secuencia vertical.
3. Continúa hacia Educación y Habilidades/Idiomas, diferenciadas de la trayectoria mediante líneas horizontales y sin contenedores tipo tarjeta.

## Criterios de aceptación

- La trayectoria contiene exactamente seis cargos y cada uno tiene un único círculo visible.
- Los cargos aparecen uno debajo del otro y conservan una jerarquía semántica de encabezados.
- El contenido en español coincide con el CV proporcionado y existe una versión equivalente en inglés.
- Educación y las seis categorías de habilidades permanecen visibles; Idiomas sigue incluido.
- Educación y Habilidades se muestran sin fondos, bordes perimetrales ni cuadrícula; cada sección se inicia con una única línea horizontal superior.
- Cada habilidad se lee como una única fila, con su nombre destacado y el detalle en texto secundario; en pantallas estrechas el texto puede envolver sin provocar desplazamiento horizontal.
- Los rótulos de sección y metadatos de la trayectoria usan el token azul de experiencia.
- La página funciona sin desplazamiento horizontal a 320 CSS px y mantiene lectura clara en móvil, tablet y escritorio.
- `npm run test:content`, `npm run lint` y `npm run build` finalizan correctamente.

## Requisitos no funcionales

- Mantener React, contenido centralizado en traducciones y estilos Sass.
- Conservar contraste, reflujo, foco al navegar hacia la ruta y semántica compatible con tecnologías de asistencia.
- No depender del color ni del movimiento para comunicar el orden de la trayectoria.

## Exclusiones

- No se modifica la sección de experiencia resumida del inicio.
- No se cambian rutas, navegación ni el contenido localizado de Educación y Habilidades/Idiomas.
- No se incorporan descargas de CV ni nuevas interacciones.

## Validación realizada

- Navegador: Chromium del navegador integrado de Codex, en español.
- Responsive: revisión visual a 320 × 800 px y 1440 × 1000 px; sin desplazamiento horizontal y con seis marcadores circulares visibles.
- Teclado: activación de la ruta desde el enlace `Experiencia` con `Enter`; el foco se orientó al `h1` de la página.
- Semántica: árbol de accesibilidad revisado con un `h1`, un `main`, trayectoria como lista ordenada de seis artículos y jerarquía `h2`/`h3` sin saltos.
- Contenido preservado: Educación, seis filas de Habilidades e Idiomas visibles.
- Consola: sin errores ni advertencias.
- Automatización: `npm run test:content`, `npm run lint` y `npm run build` correctos.
- Limitación: no se ejecutó una sesión con lector de pantalla real ni un escáner axe; la comprobación semántica se realizó sobre el árbol accesible expuesto por el navegador.
