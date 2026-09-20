import assert from 'node:assert/strict'
import test from 'node:test'
import { heroCategoryFigures } from './heroFigures.js'
import { projectCategories } from './projectCategories.js'
import { getProjectDetails } from './projectDetails.js'
import { getProjectBySlug, getProjectNeighbors, getProjectsByCategory, getProjectsInMenuOrder, getSelectedProjects, localizeProjects, projects, validateProjectCatalog } from './projects.js'
import { paths } from '../routes/paths.js'
import { formatDocumentTitle } from '../hooks/usePageMetadata.js'
import { translations } from './translations.js'

const sortedKeys = (value) => Object.keys(value).sort()

test('category IDs connect routes, hero figures and every language', () => {
  const categoryIds = projectCategories.map(({ id }) => id)
  const categoryIdSet = new Set(categoryIds)

  assert.equal(categoryIdSet.size, projectCategories.length)
  assert.equal(new Set(projectCategories.map(({ slug }) => slug)).size, projectCategories.length)
  assert.deepEqual(heroCategoryFigures.map(({ categoryId }) => categoryId).sort(), [...categoryIds].sort())

  for (const text of Object.values(translations)) {
    assert.deepEqual(sortedKeys(text.categories), [...categoryIds].sort())
  }
})

test('one catalog supplies all projects and preserves selected order', () => {
  assert.deepEqual(projects.map(({ id }) => id), ['donas-3d', 'jardin-web', 'medusas', 'ventti', 'deep-sea', 'jungle', 'game-icons', 'snapchat-frames', 'reindeer', 'muchokids-nationalities', 'forest', 'muchomix-game', 'naval-infographics'])
  assert.deepEqual(
    getSelectedProjects([...projects].reverse()).map(({ id }) => id),
    ['donas-3d', 'jardin-web', 'medusas', 'ventti'],
  )

  const reorderedWorks = [...getSelectedProjects()].reverse()

  for (const text of Object.values(translations)) {
    const localizedWorks = localizeProjects(reorderedWorks, text.projects.items)

    assert.deepEqual(localizedWorks.map(({ id }) => id), reorderedWorks.map(({ id }) => id))

    for (const localizedWork of localizedWorks) {
      assert.equal(localizedWork.title, text.projects.items[localizedWork.id].title)
      assert.equal(localizedWork.description, text.projects.items[localizedWork.id].description)
      assert.equal(localizedWork.type, text.projects.items[localizedWork.id].type)
      assert.equal(localizedWork.previewImage, projects.find(({ id }) => id === localizedWork.id).previewImage)
    }
  }
})

test('project detail URLs are generated from the catalog without category collisions', () => {
  const categorySlugs = new Set(projectCategories.map(({ slug }) => slug))

  for (const project of projects) {
    assert.equal(getProjectBySlug(project.id), project)
    assert.equal(paths.projectDetail(project.id), `/proyectos/${project.id}`)
    assert.equal(paths.projectDetail(project.id, 'all'), `/proyectos/${project.id}?categoria=all`)
    assert.equal(categorySlugs.has(project.id), false)
  }

  assert.equal(getProjectBySlug('inexistente'), undefined)
})

test('complete project details expose localized content, media and catalog navigation', () => {
  const assets = getProjectDetails('medusas')
  const donutAssets = getProjectDetails('donas-3d')
  const deepSeaAssets = getProjectDetails('deep-sea')
  const neighbors = getProjectNeighbors('medusas')

  assert.equal(neighbors.previous.id, 'jardin-web')
  assert.equal(neighbors.next.id, 'ventti')
  assert.equal(assets.referenceImages.length, 2)
  assert.equal(assets.processImages.length, 4)
  assert.equal(assets.detailImages.length, 4)
  assert.equal(assets.palette.length, 6)
  assert.equal(donutAssets.referenceImages, undefined)
  assert.deepEqual(donutAssets.palette, ['#F5C6D8', '#E96486', '#F4B35E', '#B6E2C4', '#8E5A3C', '#E8D6C2'])
  assert.equal(donutAssets.processImages.length, 4)
  assert.equal(donutAssets.processWideImages.length, 2)
  assert.equal(donutAssets.detailImages.length, 4)
  assert.deepEqual(deepSeaAssets.heroDimensions, { width: 1200, height: 891 })
  assert.deepEqual(deepSeaAssets.heroSecondaryDimensions, { width: 1200, height: 1618 })
  assert.ok(deepSeaAssets.heroSecondaryImage)
  assert.ok(deepSeaAssets.decorationImage)
  assert.equal(deepSeaAssets.referenceImages.length, 2)
  assert.deepEqual(deepSeaAssets.palette, ['#041A3D', '#0A2836', '#23384D', '#578288', '#94CCD1', '#593D58', '#C098C2'])
  assert.equal(deepSeaAssets.processImages.length, 3)
  assert.equal(deepSeaAssets.detailImages.length, 4)

  for (const text of Object.values(translations)) {
    const detail = text.projects.items.medusas.detail

    assert.equal(detail.number, '01')
    assert.equal(detail.facts.length, 3)
    assert.equal(detail.imageAlt.references.length, assets.referenceImages.length)
    assert.equal(detail.imageAlt.process.length, assets.processImages.length)
    assert.equal(detail.imageAlt.details.length, assets.detailImages.length)
    assert.ok(detail.introduction)
    assert.ok(detail.paletteDescription)

    const donutDetail = text.projects.items['donas-3d'].detail
    assert.equal(donutDetail.number, '01')
    assert.equal(donutDetail.facts.find(({ label }) => label === (text === translations.es ? 'Año' : 'Year')).value, '2024')
    assert.equal(donutDetail.facts.at(-1).value, 'Blender')
    assert.ok(donutDetail.paletteTitle)
    assert.ok(donutDetail.paletteDescription)
    assert.equal(donutDetail.imageAlt.process.length, donutAssets.processImages.length)
    assert.equal(donutDetail.imageAlt.processWide.length, donutAssets.processWideImages.length)
    assert.equal(donutDetail.imageAlt.details.length, donutAssets.detailImages.length)

    const deepSeaDetail = text.projects.items['deep-sea'].detail
    assert.equal(deepSeaDetail.number, '01')
    assert.equal(deepSeaDetail.facts.find(({ label }) => label === (text === translations.es ? 'Año' : 'Year')).value, '2017')
    assert.equal(deepSeaDetail.facts.at(-1).value, 'Photoshop, Illustrator, Wacom Tablet')
    assert.ok(deepSeaDetail.imageAlt.heroSecondary)
    assert.equal(deepSeaDetail.imageAlt.references.length, deepSeaAssets.referenceImages.length)
    assert.equal(deepSeaDetail.imageAlt.process.length, deepSeaAssets.processImages.length)
    assert.equal(deepSeaDetail.imageAlt.details.length, deepSeaAssets.detailImages.length)
  }

  assert.deepEqual(getProjectNeighbors('missing'), { previous: undefined, next: undefined })
})

test('project navigation follows its category or the menu category order', () => {
  const illustrationProjects = getProjectsByCategory('illustration')
  const illustrationNeighbors = getProjectNeighbors('deep-sea', illustrationProjects)
  const allProjects = getProjectsInMenuOrder(projects, projectCategories)

  assert.equal(illustrationNeighbors.previous.id, 'medusas')
  assert.equal(illustrationNeighbors.next.id, 'jungle')
  assert.deepEqual(allProjects.map(({ id }) => id), [
    'medusas', 'deep-sea', 'jungle', 'game-icons', 'snapchat-frames', 'reindeer', 'muchokids-nationalities', 'forest', 'muchomix-game',
    'jardin-web', 'donas-3d', 'ventti', 'naval-infographics',
  ])
  assert.equal(getProjectNeighbors('muchomix-game', allProjects).next.id, 'jardin-web')
  assert.equal(getProjectNeighbors('jardin-web', allProjects).next.id, 'donas-3d')
})

test('pending illustration projects have localized previews without detail landings', () => {
  for (const id of ['jungle', 'game-icons', 'snapchat-frames', 'reindeer', 'muchokids-nationalities', 'forest', 'muchomix-game']) {
    const project = getProjectBySlug(id)

    assert.deepEqual(project.categoryIds, ['illustration'])
    assert.equal(project.selectedOrder, undefined)
    assert.equal(getProjectDetails(id), undefined)

    for (const text of Object.values(translations)) {
      const content = text.projects.items[id]

      assert.ok(content.title)
      assert.ok(content.description)
      assert.ok(content.previewAlt)
      assert.equal(content.detail, undefined)
    }
  }

  assert.equal(getProjectNeighbors('deep-sea').next.id, 'jungle')
  assert.equal(getProjectNeighbors('jungle').next.id, 'game-icons')
  assert.equal(getProjectNeighbors('game-icons').next.id, 'snapchat-frames')
  assert.equal(getProjectNeighbors('snapchat-frames').next.id, 'reindeer')
  assert.equal(getProjectNeighbors('reindeer').next.id, 'muchokids-nationalities')
  assert.equal(getProjectNeighbors('muchokids-nationalities').next.id, 'forest')
  assert.equal(getProjectNeighbors('forest').next.id, 'muchomix-game')
})

test('naval infographics appear only in Other with localized pending detail', () => {
  const project = getProjectBySlug('naval-infographics')

  assert.deepEqual(project.categoryIds, ['animations'])
  assert.equal(project.selectedOrder, undefined)
  assert.equal(getProjectDetails(project.id), undefined)

  for (const text of Object.values(translations)) {
    const content = text.projects.items[project.id]

    assert.ok(content.title)
    assert.ok(content.description)
    assert.ok(content.previewAlt)
    assert.equal(content.detail, undefined)
  }
})

test('every language defines the complete catalog and its metadata', () => {
  const projectIds = projects.map(({ id }) => id).sort()
  assert.deepEqual(sortedKeys(translations), ['en', 'es'])

  for (const text of Object.values(translations)) {
    assert.deepEqual(sortedKeys(text.projects.items), projectIds)
  }

  assert.doesNotThrow(() => validateProjectCatalog(projects, projectCategories, translations))
})

test('a project can be listed in multiple categories without duplicate records', () => {
  const multiCategoryProject = { ...projects[0], categoryIds: ['three-d', 'illustration'] }
  const animationProject = { id: 'new-animation', categoryIds: ['animations'], previewImage: projects[0].previewImage }
  const catalog = [multiCategoryProject, ...projects.slice(1), animationProject]

  assert.deepEqual(getProjectsByCategory('three-d', catalog), [multiCategoryProject])
  assert.deepEqual(getProjectsByCategory('illustration', catalog).map(({ id }) => id), ['donas-3d', 'medusas', 'deep-sea', 'jungle', 'game-icons', 'snapchat-frames', 'reindeer', 'muchokids-nationalities', 'forest', 'muchomix-game'])
  assert.deepEqual(getProjectsByCategory('animations', catalog).map(({ id }) => id), ['naval-infographics', 'new-animation'])
  assert.deepEqual(getSelectedProjects(catalog).map(({ id }) => id), ['donas-3d', 'jardin-web', 'medusas', 'ventti'])
  assert.equal(catalog.filter(({ id }) => id === multiCategoryProject.id).length, 1)
  assert.doesNotThrow(() => validateProjectCatalog(catalog.slice(0, -1), projectCategories, translations))
})

test('project category listings derive from the catalog and preserve expected project IDs', () => {
  assert.deepEqual(projects.map(({ id }) => id), ['donas-3d', 'jardin-web', 'medusas', 'ventti', 'deep-sea', 'jungle', 'game-icons', 'snapchat-frames', 'reindeer', 'muchokids-nationalities', 'forest', 'muchomix-game', 'naval-infographics'])
  assert.deepEqual(getProjectsByCategory('three-d').map(({ id }) => id), ['donas-3d'])
  assert.deepEqual(getProjectsByCategory('uxui').map(({ id }) => id), ['jardin-web'])
  assert.deepEqual(getProjectsByCategory('illustration').map(({ id }) => id), ['medusas', 'deep-sea', 'jungle', 'game-icons', 'snapchat-frames', 'reindeer', 'muchokids-nationalities', 'forest', 'muchomix-game'])
  assert.deepEqual(getProjectsByCategory('graphic-design').map(({ id }) => id), ['ventti'])
  assert.deepEqual(getProjectsByCategory('animations').map(({ id }) => id), ['naval-infographics'])
})

test('every language exposes two complete experience preview jobs', () => {
  for (const text of Object.values(translations)) {
    assert.equal(text.experience.previewJobs.length, 2)

    for (const job of text.experience.previewJobs) {
      assert.ok(job.meta)
      assert.ok(job.company)
      assert.ok(job.role)
      assert.ok(job.highlights.length)
    }
  }
})

test('every language exposes the complete experience landing content', () => {
  for (const text of Object.values(translations)) {
    assert.equal(text.experience.jobs.length, 6)
    assert.equal(text.experience.skills.length, 6)
    assert.ok(text.experience.education.degree)
    assert.ok(text.experience.education.school)

    for (const job of text.experience.jobs) {
      assert.ok(job.meta)
      assert.ok(job.company)
      assert.ok(job.role)
      assert.ok(job.highlights.length)
    }

    assert.match(text.experience.skills.at(-1).title, /Idiomas|Languages/)
  }
})

test('every language exposes localized navigation metadata', () => {
  for (const text of Object.values(translations)) {
    assert.ok(text.skipToContent)
    assert.ok(text.documentTitle)
    assert.equal(formatDocumentTitle(text.documentTitle), `${text.documentTitle} | Vanessa Dugarte`)
  }
})

test('invalid catalog references fail with a useful project ID', () => {
  assert.throws(
    () => localizeProjects(projects, {}),
    /Missing project translation: donas-3d/,
  )
  assert.throws(
    () => validateProjectCatalog([...projects, projects[0]], projectCategories, translations),
    /Duplicate or reserved project ID\/slug: donas-3d/,
  )
  assert.throws(
    () => validateProjectCatalog([{ ...projects[0], categoryIds: ['missing'] }, ...projects.slice(1)], projectCategories, translations),
    /Unknown category missing for project donas-3d/,
  )
  assert.throws(
    () => validateProjectCatalog(projects, projectCategories, { es: { projects: { items: {} } } }),
    /Missing es project translation: donas-3d/,
  )
})
