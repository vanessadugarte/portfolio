const donasImage = new URL('../assets/images/selected-work/donas3d-760x500.jpg', import.meta.url).href
const jardinWebImage = new URL('../assets/images/selected-work/webjardin-760x500.jpg', import.meta.url).href
const medusasImage = new URL('../assets/images/selected-work/medusas-760x500.jpg', import.meta.url).href
const venttiImage = new URL('../assets/images/selected-work/ventti-760x500.jpg', import.meta.url).href

// Project IDs also serve as the stable, category-independent URL slugs.
export const projects = [
  { id: 'donas-3d', categoryIds: ['three-d'], previewImage: donasImage, selectedOrder: 1 },
  { id: 'jardin-web', categoryIds: ['uxui'], previewImage: jardinWebImage, selectedOrder: 2 },
  { id: 'medusas', categoryIds: ['illustration'], previewImage: medusasImage, selectedOrder: 3 },
  { id: 'ventti', categoryIds: ['graphic-design'], previewImage: venttiImage, selectedOrder: 4 },
]

export function getSelectedProjects(catalog = projects) {
  return catalog
    .filter(({ selectedOrder }) => selectedOrder != null)
    .sort((a, b) => a.selectedOrder - b.selectedOrder)
}

export function getProjectsByCategory(categoryId, catalog = projects) {
  return catalog.filter(({ categoryIds }) => categoryIds.includes(categoryId))
}

export function getProjectBySlug(slug, catalog = projects) {
  return catalog.find(({ id }) => id === slug)
}

export function getProjectNeighbors(projectId, catalog = projects) {
  const projectIndex = catalog.findIndex(({ id }) => id === projectId)

  if (projectIndex === -1) {
    return { previous: undefined, next: undefined }
  }

  return {
    previous: catalog[projectIndex - 1],
    next: catalog[projectIndex + 1],
  }
}

export function localizeProjects(projectList, translationsById) {
  return projectList.map((project) => {
    const content = translationsById[project.id]

    if (!content) {
      throw new Error(`Missing project translation: ${project.id}`)
    }

    return { ...project, ...content }
  })
}

export function validateProjectCatalog(catalog, categories, translationsByLanguage) {
  const categoryIds = new Set(categories.map(({ id }) => id))
  const categorySlugs = new Set(categories.map(({ slug }) => slug))
  const projectIds = new Set()
  const selectedOrders = new Set()

  for (const project of catalog) {
    if (typeof project.id !== 'string' || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(project.id)) {
      throw new Error(`Invalid project ID/slug: ${project.id}`)
    }
    if (projectIds.has(project.id) || categorySlugs.has(project.id)) {
      throw new Error(`Duplicate or reserved project ID/slug: ${project.id}`)
    }
    projectIds.add(project.id)

    if (!Array.isArray(project.categoryIds) || project.categoryIds.length === 0) {
      throw new Error(`Project has no categories: ${project.id}`)
    }
    for (const categoryId of project.categoryIds) {
      if (!categoryIds.has(categoryId)) {
        throw new Error(`Unknown category ${categoryId} for project ${project.id}`)
      }
    }
    if (new Set(project.categoryIds).size !== project.categoryIds.length) {
      throw new Error(`Duplicate category for project ${project.id}`)
    }
    if (!project.previewImage) {
      throw new Error(`Missing preview image for project ${project.id}`)
    }

    if (project.selectedOrder != null) {
      if (!Number.isInteger(project.selectedOrder) || project.selectedOrder < 1 || selectedOrders.has(project.selectedOrder)) {
        throw new Error(`Invalid or duplicate selected order for project ${project.id}`)
      }
      selectedOrders.add(project.selectedOrder)
    }
  }

  for (const [language, text] of Object.entries(translationsByLanguage)) {
    const items = text.projects?.items ?? {}
    for (const id of projectIds) {
      const item = items[id]
      if (!item) {
        throw new Error(`Missing ${language} project translation: ${id}`)
      }
      for (const field of ['title', 'type', 'description']) {
        if (typeof item[field] !== 'string' || !item[field].trim()) {
          throw new Error(`Missing ${language} ${field} for project ${id}`)
        }
      }
      if (typeof item.previewAlt !== 'string') {
        throw new Error(`Missing ${language} previewAlt for project ${id}`)
      }
    }
    for (const id of Object.keys(items)) {
      if (!projectIds.has(id)) {
        throw new Error(`Unknown ${language} project translation: ${id}`)
      }
    }
  }
}
