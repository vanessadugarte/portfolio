# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

## Enrutamiento

La aplicación usa React Router con `createHashRouter`. Las rutas públicas se expresan después del hash (`#/`, `#/proyectos`, `#/experiencia` y `#/proyectos/<categoria>`), por lo que una apertura directa o una recarga funciona en alojamientos estáticos sin configurar reescrituras del servidor.

Al iniciar, los hashes heredados sin barra se migran una sola vez a la sintaxis actual. Por ejemplo, `#inicio`, `#experiencia` y `#proyectos/ilustracion` se convierten en `#/`, `#/experiencia` y `#/proyectos/ilustracion`. A partir de ahí, React Router es la única fuente de navegación e historial.
