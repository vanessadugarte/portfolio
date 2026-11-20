export const paths = {
  home: '/',
  projects: '/proyectos',
  experience: '/experiencia',
  projectCategory: (slug) => `/proyectos/${slug}`,
  navalSeries: (series) => `/proyectos/naval-infographics/${series}`,
  donutShopPage: (section) => `/proyectos/donut-shop/${section}`,
  gardenHome: '/proyectos/jardin-web',
  gardenPlants: '/proyectos/jardin-web/plantas',
  gardenPots: '/proyectos/jardin-web/maceteros',
  gardenContact: '/proyectos/jardin-web/contacto',
  gardenProduct: (kind, slug) => `/proyectos/jardin-web/${kind}/${slug}`,
  projectDetail: (slug, categoryId) => {
    const path = `/proyectos/${slug}`

    return categoryId ? `${path}?categoria=${encodeURIComponent(categoryId)}` : path
  },
}
