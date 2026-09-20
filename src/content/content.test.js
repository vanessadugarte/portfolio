import assert from 'node:assert/strict'
import test from 'node:test'
import { heroCategoryFigures } from './heroFigures.js'
import { projectCategories } from './projectCategories.js'
import { getProjectBySlug, getProjectsByCategory, getSelectedProjects, localizeProjects, projects, validateProjectCatalog } from './projects.js'
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
  assert.deepEqual(projects.map(({ id }) => id), ['donas-3d', 'jardin-web', 'medusas', 'ventti'])
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
    assert.equal(categorySlugs.has(project.id), false)
  }

  assert.equal(getProjectBySlug('inexistente'), undefined)
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
  assert.deepEqual(getProjectsByCategory('illustration', catalog).map(({ id }) => id), ['donas-3d', 'medusas'])
  assert.deepEqual(getProjectsByCategory('animations', catalog), [animationProject])
  assert.deepEqual(getSelectedProjects(catalog).map(({ id }) => id), projects.map(({ id }) => id))
  assert.equal(catalog.filter(({ id }) => id === multiCategoryProject.id).length, 1)
  assert.doesNotThrow(() => validateProjectCatalog(catalog.slice(0, -1), projectCategories, translations))
})

test('project category listings derive from the catalog and preserve expected project IDs', () => {
  assert.deepEqual(projects.map(({ id }) => id), ['donas-3d', 'jardin-web', 'medusas', 'ventti'])
  assert.deepEqual(getProjectsByCategory('three-d').map(({ id }) => id), ['donas-3d'])
  assert.deepEqual(getProjectsByCategory('uxui').map(({ id }) => id), ['jardin-web'])
  assert.deepEqual(getProjectsByCategory('illustration').map(({ id }) => id), ['medusas'])
  assert.deepEqual(getProjectsByCategory('graphic-design').map(({ id }) => id), ['ventti'])
  assert.deepEqual(getProjectsByCategory('animations'), [])
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
