# Proyecto

Aplicacion web de portafolio de Vanessa Dugarte, creada en React. Su objetivo es compartir trabajos, experiencia y curriculum con empleadores durante procesos de busqueda laboral.

## Alcance

- Pagina de inicio con hero visual y navegacion.
- Seccion de trabajos seleccionados.
- Landings por categoria, inicialmente vacias:
  - Ilustracion
  - Front-end + UX/UI
  - Diseno grafico
  - 3D
  - Animaciones
- Seccion de experiencia con curriculum en texto.

## Idioma

La interfaz se desarrolla primero en espanol. La arquitectura y el contenido deben permitir incorporar ingles posteriormente, sin duplicar componentes ni textos en linea.

## Desarrollo

- Mantener React y Vite como base del proyecto.
- Conservar la identidad visual definida: composiciones abstractas, figuras SVG y transiciones sutiles.
- Priorizar diseno responsive en escritorio, tablet y movil.
- Verificar cambios con `npm run build` y `npm run lint`.

## Desarrollo guiado por especificaciones (SDD)

- Antes de implementar una funcionalidad, documentar una especificacion breve y verificable en el issue, PR o documento asociado.
- La especificacion debe indicar objetivo, alcance, flujos de usuario, criterios de aceptacion, requisitos no funcionales y exclusiones.
- Separar la definicion de la especificacion de su implementacion: los criterios de aceptacion guian el desarrollo, la revision y las pruebas.
- Mantener las especificaciones actualizadas cuando cambie el alcance; no introducir comportamiento no acordado sin reflejarlo en ellas.
- Todo PR debe enlazar su especificacion o issue y explicar como se validaron los criterios de aceptacion.

## Accesibilidad

- Mantener WCAG 2.2 niveles A y AA como linea base obligatoria. Todo cambio debe conservar o mejorar la accesibilidad existente; un escaner automatico por si solo no demuestra conformidad.
- Preferir HTML semantico y controles nativos. Mantener la navegacion repetida fuera de `main`, un unico `main` y un unico `h1` por ruta, jerarquia de encabezados sin saltos y el enlace para saltar al contenido.
- Dar nombre, funcion y estado programaticos coherentes a enlaces y controles. Las imagenes informativas requieren alternativa util; las decorativas deben quedar ocultas para tecnologias de asistencia. No usar ARIA cuando un elemento nativo ya exponga la semantica necesaria.
- Garantizar operacion completa con teclado: orden de foco logico, foco visible y no oculto, ausencia de trampas, Tab/Shift+Tab, Enter/Espacio y Escape cuando corresponda. Los componentes emergentes deben permanecer disponibles mientras el puntero o el foco esten dentro y poder descartarse sin perder el contexto.
- En cada navegacion SPA, conservar titulos de documento localizados y orientar el foco sin desplazamientos inesperados. Mantener `html[lang]`, nombres accesibles y contenido sincronizados en espanol e ingles, incluidas rutas directas, historial, estados vacios y 404.
- Conservar texto base de al menos 16 px, reflujo sin desplazamiento bidimensional a 320 CSS px y zoom de 200 %, espaciado de texto ajustable, soporte de `prefers-reduced-motion` y estados que no dependan solo del color.
- Cumplir contraste WCAG: al menos 4.5:1 para texto normal, 3:1 para texto grande y 3:1 para componentes, bordes funcionales e indicadores de foco. Los objetivos de puntero deben medir al menos 24 x 24 CSS px o contar con el espaciado equivalente; priorizar 44 px de alto para controles principales.
- Aplicar una validacion de accesibilidad proporcional solo cuando un cambio afecte rutas, estructura semantica, controles o interacciones, foco, contenido informativo/multimedia, o estilos que puedan alterar contraste, legibilidad, reflujo o movimiento. La validacion se limita al alcance modificado y a los riesgos identificados; no requiere repetir una auditoria global.
- Para esos cambios, documentar unicamente las comprobaciones pertinentes, su herramienta, navegador, resultado y limitaciones. Probar teclado o foco cuando cambien controles o navegacion; usar axe u otro escaner y lector de pantalla solo cuando el cambio de semantica, navegacion, foco o estados dinamicos lo justifique.
- Los cambios sin impacto de accesibilidad no requieren evaluacion, evidencia ni actualizacion de la matriz de [auditoria WCAG del issue #30](docs/evidence/issue-30/audit.md). Una auditoria completa de WCAG o una actualizacion amplia de esa matriz se realiza solo en un issue dedicado o cuando el alcance del cambio lo requiera explicitamente.

## Enrutamiento

- Usar `react-router-dom` (React Router) como unica solucion de enrutamiento de la aplicacion.
- Declarar las rutas en una configuracion centralizada y usar componentes de ruta para las paginas; evitar condicionales manuales basados en `window.location`.
- Definir rutas semanticas, predecibles y en minusculas. Incluir una ruta de pagina no encontrada (`*`).
- Compartir navegacion, layout y protecciones de ruta mediante rutas anidadas cuando corresponda.
- Toda nueva landing de categoria debe contar con una ruta propia y estar incluida en la navegacion correspondiente.

## Estilos

- Usar Sass (`.scss`) para los estilos nuevos y las modificaciones de estilos existentes; evitar incorporar CSS plano nuevo.
- Organizar los estilos con parciales de Sass por responsabilidad y usar `@use` y `@forward` en lugar de `@import`.
- Centralizar tokens visuales (colores, tipografias, espaciados, puntos de quiebre y z-index) en variables o mapas de Sass reutilizables.
- Mantener los estilos de cada componente o seccion cerca de su codigo y evitar selectores globales o anidamientos profundos.
- Diseñar primero para móvil y añadir mejoras progresivas mediante media queries. No usar estilos en linea salvo cuando sean valores realmente dinámicos.

## Versionamiento

- Seguir las reglas de [VERSIONAMIENTO.md](VERSIONAMIENTO.md).
- Usar Git Flow para nombrar e integrar ramas.
- No realizar commits directos a `develop` ni a `main`: ambas ramas reciben cambios exclusivamente mediante PRs.
- Las ramas de issues o problemas nacen de `develop` y se integran nuevamente mediante un PR hacia `develop`.
- `main` solo recibe PRs cuya rama de origen sea `develop`.
