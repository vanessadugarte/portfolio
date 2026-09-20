export const paths = {
  home: '/',
  projects: '/proyectos',
  experience: '/experiencia',
  projectCategory: (slug) => `/proyectos/${slug}`,
  projectDetail: (slug, categoryId) => {
    const path = `/proyectos/${slug}`

    return categoryId ? `${path}?categoria=${encodeURIComponent(categoryId)}` : path
  },
}
