# Portafolio web de Vanessa Dugarte

Aplicación web personal para presentar el trabajo, la experiencia y el currículum de Vanessa Dugarte durante procesos de búsqueda laboral. Está construida con React y Vite y conserva una identidad visual basada en composiciones abstractas, figuras SVG y transiciones sutiles.

## Estado actual

La aplicación incluye:

- una página de inicio con hero visual, accesos a categorías, trabajos seleccionados y un resumen de experiencia;
- una página de experiencia con trayectoria, educación y habilidades;
- un índice provisional de proyectos;
- landings provisionales para Ilustración, Front-end + UX/UI, 3D, Diseño gráfico y Animaciones;
- interfaz en español e inglés, con español como idioma inicial y persistencia de la preferencia en el navegador;
- una página de error para rutas no reconocidas.

Las tarjetas de trabajos seleccionados, el índice general y las categorías todavía no contienen casos de estudio. Sus destinos y mensajes actuales son deliberadamente provisionales. El detalle auditable de este alcance está en [Estado y alcance vigente](docs/alcance-vigente.md).

## Requisitos

- Node.js compatible con Vite 8 (`^20.19.0` o `>=22.12.0`).
- npm.

La configuración actual se verificó con Node.js 22.20.0 y npm 10.9.3.

## Instalación y ejecución

Desde la raíz del repositorio:

```bash
npm ci
npm run dev
```

Vite mostrará en la terminal la dirección local de desarrollo. Para comprobar una compilación de producción:

```bash
npm run build
npm run preview
```

## Comandos disponibles

| Comando | Propósito |
| --- | --- |
| `npm run dev` | Inicia el servidor local con recarga en caliente. |
| `npm run build` | Valida el presupuesto de recursos y genera la compilación de producción en `dist/`. |
| `npm run check:assets` | Comprueba los límites de peso sin compresión y gzip de los recursos auditados. |
| `npm run lint` | Analiza el código con Oxlint. |
| `npm run preview` | Sirve localmente la compilación generada. |

El SVG `abstract-vector-03.svg` tiene un presupuesto de 100 KiB sin compresión y 40 KiB con gzip. Estos límites dejan margen para ajustes menores sobre el recurso optimizado, pero evitan que una exportación completa de varios megabytes vuelva a incorporarse sin que el build falle.

## Navegación

La aplicación usa React Router con `createHashRouter`, por lo que las rutas aparecen después de `#` y funcionan en alojamientos estáticos sin reglas de reescritura del servidor.

| Vista | Ruta |
| --- | --- |
| Inicio | `#/` |
| Todos los proyectos | `#/proyectos` |
| Ilustración | `#/proyectos/ilustracion` |
| Front-end + UX/UI | `#/proyectos/frontend-uxui` |
| 3D | `#/proyectos/3d` |
| Diseño gráfico | `#/proyectos/diseno-grafico` |
| Animaciones | `#/proyectos/animaciones` |
| Experiencia | `#/experiencia` |

Los hashes heredados, como `#inicio` o `#proyectos/ilustracion`, se migran automáticamente al formato vigente.

## Idiomas

Los textos de interfaz viven en `src/content/translations.js`, separados de los componentes. El español es el idioma predeterminado y el control `EN`/`ES` cambia toda la interfaz sin duplicar páginas ni componentes. La elección se guarda en `localStorage` bajo la clave `portfolio-language`.

## Estructura principal

```text
src/
├── assets/       # Imágenes y figuras SVG
├── components/   # Navegación y componentes compartidos
├── content/      # Categorías y textos por idioma
├── layouts/      # Layout común y estado de idioma
├── pages/        # Componentes asociados a rutas
├── routes/       # Constructores de rutas
├── styles/       # Tokens y estilos base de Sass
└── router.jsx    # Configuración central de React Router
```

Los estilos específicos permanecen junto a sus componentes y los tokens compartidos se centralizan en `src/styles/abstracts`.

## Colaboración y especificaciones

Cada cambio debe partir de una especificación breve y verificable en un issue o documento enlazado. Las plantillas del repositorio solicitan objetivo, alcance, flujos, criterios de aceptación, requisitos no funcionales, exclusiones y validación.

- [Reglas del proyecto y desarrollo guiado por especificaciones](agents.md)
- [Flujo de ramas y versionamiento](VERSIONAMIENTO.md)
- [Inicialización del repositorio y controles de Git Flow](docs/inicializacion-git-flow.md)
- [Estado y alcance vigente documentado retrospectivamente](docs/alcance-vigente.md)

Las decisiones nuevas o los cambios de alcance se actualizan en la especificación enlazada desde el PR; no se copian las mismas reglas en varios documentos.
