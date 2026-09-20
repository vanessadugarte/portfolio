const donasImage = new URL('../assets/images/selected-work/donas3d-760x500.jpg', import.meta.url).href
const jardinWebImage = new URL('../assets/images/selected-work/webjardin-760x500.jpg', import.meta.url).href
const medusasImage = new URL('../assets/images/projects/illustrations/medusas/medusas-760x500.jpg', import.meta.url).href
const venttiImage = new URL('../assets/images/selected-work/ventti-760x500.jpg', import.meta.url).href
const deepSeaImage = new URL('../assets/images/projects/illustrations/deep-sea/deep-sea-thumbnail.jpg', import.meta.url).href
const jungleImage = new URL('../assets/images/projects/illustrations/jungle/jungle-illustration-thumbnail.jpg', import.meta.url).href
const gameIconsImage = new URL('../assets/images/projects/illustrations/game-icons/iconos-760x500.jpg', import.meta.url).href
const snapchatFramesImage = new URL('../assets/images/projects/illustrations/snapchat-frames/snapchat-frames-thumbnail.jpg', import.meta.url).href
const reindeerImage = new URL('../assets/images/projects/illustrations/reindeer/reindeer-760x500.jpg', import.meta.url).href
const muchokidsNationalitiesImage = new URL('../assets/images/projects/illustrations/muchokids-nationalities/muchokids-nationalities-760x500.jpg', import.meta.url).href
const forestImage = new URL('../assets/images/projects/illustrations/forest/forest-760x500.jpg', import.meta.url).href
const muchomixGameImage = new URL('../assets/images/projects/illustrations/muchomix-game/muchomix-game.jpg', import.meta.url).href
const navalInfographicsImage = new URL('../assets/images/projects/other/ship-infographic-thumbnail.jpg', import.meta.url).href

// Project IDs also serve as the stable, category-independent URL slugs.
export const projects = [
  { id: 'donas-3d', categoryIds: ['three-d'], previewImage: donasImage, selectedOrder: 1 },
  { id: 'jardin-web', categoryIds: ['uxui'], previewImage: jardinWebImage, selectedOrder: 2 },
  { id: 'medusas', categoryIds: ['illustration'], previewImage: medusasImage, selectedOrder: 3 },
  { id: 'ventti', categoryIds: ['graphic-design'], previewImage: venttiImage, selectedOrder: 4 },
  { id: 'deep-sea', categoryIds: ['illustration'], previewImage: deepSeaImage },
  { id: 'jungle', categoryIds: ['illustration'], previewImage: jungleImage },
  { id: 'game-icons', categoryIds: ['illustration'], previewImage: gameIconsImage },
  { id: 'snapchat-frames', categoryIds: ['illustration'], previewImage: snapchatFramesImage },
  { id: 'reindeer', categoryIds: ['illustration'], previewImage: reindeerImage },
  { id: 'muchokids-nationalities', categoryIds: ['illustration'], previewImage: muchokidsNationalitiesImage },
  { id: 'forest', categoryIds: ['illustration'], previewImage: forestImage },
  { id: 'muchomix-game', categoryIds: ['illustration'], previewImage: muchomixGameImage },
  { id: 'naval-infographics', categoryIds: ['animations'], previewImage: navalInfographicsImage },
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

export function getProjectsInMenuOrder(catalog = projects, categories) {
  if (!categories) {
    throw new Error('Project categories are required to order all projects')
  }

  const seenProjectIds = new Set()

  return categories.flatMap(({ id: categoryId }) => getProjectsByCategory(categoryId, catalog)
    .filter((project) => {
      if (seenProjectIds.has(project.id)) return false

      seenProjectIds.add(project.id)
      return true
    }))
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
