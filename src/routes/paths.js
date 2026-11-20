export const paths = {
  home: '/',
  projects: '/proyectos',
  experience: '/experiencia',
  projectCategory: (slug) => `/proyectos/${slug}`,
  navalSeries: (series) => `/proyectos/naval-infographics/${series}`,
  donutShopPage: (section) => `/proyectos/donut-shop/${section}`,
  projectDetail: (slug, categoryId) => {
    const path = `/proyectos/${slug}`

    return categoryId ? `${path}?categoria=${encodeURIComponent(categoryId)}` : path
  },
}
