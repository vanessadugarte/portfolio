import { createHashRouter } from 'react-router-dom'
import { projectCategories } from './content/projectCategories.js'
import PortfolioLayout from './layouts/PortfolioLayout.jsx'
import ExperiencePage from './pages/ExperiencePage.jsx'
import HomePage from './pages/HomePage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import ProjectCategoryPage from './pages/ProjectCategoryPage.jsx'
import ProjectDetailPage from './pages/ProjectDetailPage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import { paths } from './routes/paths.js'

function migrateLegacyHash() {
  const { hash, pathname, search } = window.location

  if (!hash || hash === '#' || hash.startsWith('#/')) {
    return
  }

  const legacyPath = hash.slice(1)
  const migratedPath = legacyPath === 'inicio' ? paths.home : `/${legacyPath}`

  window.history.replaceState(null, '', `${pathname}${search}#${migratedPath}`)
}

migrateLegacyHash()

export const routeConfig = [
  {
    path: paths.home,
    element: <PortfolioLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: paths.projects.slice(1), element: <ProjectsPage /> },
      ...projectCategories.map(({ id, slug }) => ({
        path: paths.projectCategory(slug).slice(1),
        element: <ProjectCategoryPage categoryId={id} />,
      })),
      { path: `${paths.projects.slice(1)}/:slug`, element: <ProjectDetailPage /> },
      { path: paths.experience.slice(1), element: <ExperiencePage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]

export const router = createHashRouter(routeConfig)
