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
  assert.deepEqual(projects.map(({ id }) => id), ['donas-3d', 'jardin-web', 'medusas', 'ventti', 'deep-sea', 'jungle', 'game-icons', 'snapchat-frames', 'reindeer', 'muchokids-nationalities', 'forest', 'muchomix-game', 'angels-sighs', 'naval-infographics'])
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
  const jungleAssets = getProjectDetails('jungle')
  const gameIconsAssets = getProjectDetails('game-icons')
  const neighbors = getProjectNeighbors('medusas')

  assert.equal(neighbors.previous.id, 'jardin-web')
  assert.equal(neighbors.next.id, 'ventti')
  assert.equal(assets.referenceImages.length, 2)
  assert.equal(assets.processImages.length, 4)
  assert.equal(assets.detailImages.length, 4)
  assert.equal(assets.palette.length, 6)
  assert.equal(assets.illustrationTreatment, true)
  assert.equal(assets.accentColor, '#004461')
  assert.equal(assets.organicMasks.hero.endsWith('/organic-shape-horiz.svg'), true)
  assert.equal(assets.organicMasks.details.length, assets.detailImages.length)
  assert.equal(assets.processArrows.length, assets.processImages.length - 1)
  assert.deepEqual(assets.processArrows.map(({ mobileRotation, desktopRotation }) => [mobileRotation, desktopRotation]), [[90, 0], [90, 0], [180, 90]])
  assert.equal(donutAssets.referenceImages, undefined)
  assert.deepEqual(donutAssets.palette, ['#F5C6D8', '#E96486', '#F4B35E', '#B6E2C4', '#8E5A3C', '#E8D6C2'])
  assert.equal(donutAssets.processImages.length, 4)
  assert.equal(donutAssets.processWideImages.length, 2)
  assert.equal(donutAssets.detailImages.length, 4)
  assert.deepEqual(deepSeaAssets.heroDimensions, { width: 1200, height: 891 })
  assert.deepEqual(deepSeaAssets.heroSecondaryDimensions, { width: 1200, height: 1618 })
  assert.ok(deepSeaAssets.heroSecondaryImage)
  assert.ok(deepSeaAssets.decorationImage)
  assert.equal(deepSeaAssets.illustrationTreatment, true)
  assert.equal(deepSeaAssets.accentColor, '#041A3D')
  assert.equal(deepSeaAssets.referenceImages, undefined)
  assert.equal(deepSeaAssets.heroReferenceImages.length, 2)
  assert.equal(deepSeaAssets.palettePlacement, 'hero')
  assert.deepEqual(deepSeaAssets.palette, ['#041A3D', '#0A2836', '#23384D', '#578288', '#94CCD1', '#593D58', '#C098C2'])
  assert.equal(deepSeaAssets.processImages.length, 4)
  assert.equal(deepSeaAssets.processImageDimensions.length, deepSeaAssets.processImages.length)
  assert.equal(deepSeaAssets.processImages.at(-1).endsWith('/sketch-deepsea-3.png'), true)
  assert.equal(deepSeaAssets.detailImages.length, 4)
    assert.equal(deepSeaAssets.organicMasks.hero.endsWith('/organic-shape-02.svg'), true)
    assert.equal(deepSeaAssets.organicMasks.heroSecondary.endsWith('/organic-shape-05.svg'), true)
    assert.equal(deepSeaAssets.organicMasks.details.length, deepSeaAssets.detailImages.length)
  assert.equal(deepSeaAssets.processArrows.length, deepSeaAssets.processImages.length - 1)
  assert.deepEqual(deepSeaAssets.processArrows.map(({ mobileRotation, desktopRotation }) => [mobileRotation, desktopRotation]), [[180, 90], [0, -90], [0, -90]])
  assert.equal(jungleAssets.referenceImages, undefined)
  assert.equal(jungleAssets.heroReferenceImages.length, 2)
  assert.deepEqual(jungleAssets.heroDimensions, { width: 1200, height: 1490 })
  assert.equal(jungleAssets.heroDecorations.length, 3)
  assert.equal(jungleAssets.palettePlacement, 'hero')
  assert.equal(jungleAssets.illustrationTreatment, true)
  assert.equal(jungleAssets.accentColor, '#6B8534')
  assert.deepEqual(jungleAssets.palette, ['#332B1D', '#51472D', '#B9AE92', '#A29D2A', '#EAE62B', '#C53F18', '#3F5B2B', '#6B8534'])
  assert.equal(jungleAssets.processImages.length, 4)
  assert.equal(jungleAssets.processImageDimensions.length, jungleAssets.processImages.length)
  assert.equal(jungleAssets.processArrows.length, jungleAssets.processImages.length - 1)
  assert.equal(new Set(jungleAssets.processArrows).size, jungleAssets.processArrows.length)
  assert.deepEqual(jungleAssets.processArrows.map(({ mobileRotation, desktopRotation }) => [mobileRotation, desktopRotation]), [[0, -90], [-45, -135], [0, -90]])
  assert.equal(jungleAssets.detailImages.length, 5)
  assert.equal(jungleAssets.detailImageDimensions.length, jungleAssets.detailImages.length)
  assert.equal(jungleAssets.organicMasks.details.length, jungleAssets.detailImages.length)
  assert.deepEqual(gameIconsAssets.heroDimensions, { width: 1200, height: 1192 })
  assert.deepEqual(gameIconsAssets.heroSecondaryDimensions, { width: 2048, height: 2732 })
  assert.equal(gameIconsAssets.heroSecondaryImage.endsWith('/icons-objects.jpg'), true)
  assert.equal(gameIconsAssets.organicMasks, undefined)
  assert.equal(gameIconsAssets.illustrationTreatment, true)
  assert.equal(gameIconsAssets.accentColor, '#E90051')
  assert.ok(gameIconsAssets.decorationImage)
  assert.equal(gameIconsAssets.palettePlacement, 'process')
  assert.equal(gameIconsAssets.palette.length, 6)
  assert.deepEqual(gameIconsAssets.processImages.map((image) => image.split('/').at(-1)), [
    'game-icons-process-1.jpg',
    'game-icons-process-3.jpg',
    'game-icons-process-2.jpg',
  ])
  assert.equal(gameIconsAssets.processImageDimensions.length, gameIconsAssets.processImages.length)
  assert.equal(gameIconsAssets.processArrows.length, gameIconsAssets.processImages.length - 1)
  assert.deepEqual(gameIconsAssets.detailImages.map((image) => image.split('/').at(-1)), [
    'icons-detail-2.png',
    'coins-02.svg',
    'coins-03.svg',
    'coins-04.svg',
    'coins-05.svg',
    'coins-06.svg',
    'coins-07.svg',
    'estrella-candado.png',
    'icons-detail-4.png',
  ])
  assert.equal(gameIconsAssets.detailImageDimensions.length, gameIconsAssets.detailImages.length)
  assert.equal(gameIconsAssets.detailImages.at(-1).endsWith('/icons-detail-4.png'), true)
  assert.deepEqual(gameIconsAssets.detailImageDimensions.at(-1), { width: 1136, height: 1816 })

  for (const text of Object.values(translations)) {
    const detail = text.projects.items.medusas.detail

    assert.equal(detail.number, '01')
    assert.equal(detail.facts.length, 3)
    assert.equal(detail.imageAlt.references.length, assets.referenceImages.length)
    assert.equal(detail.imageAlt.process.length, assets.processImages.length)
    assert.equal(detail.imageAlt.details.length, assets.detailImages.length)
    assert.ok(detail.introduction)
    assert.equal(detail.paletteDescription, undefined)

    const donutDetail = text.projects.items['donas-3d'].detail
    assert.equal(donutDetail.number, '01')
    assert.equal(donutDetail.facts.find(({ label }) => label === (text === translations.es ? 'Año' : 'Year')).value, '2024')
    assert.equal(donutDetail.facts.at(-1).value, 'Blender')
    assert.ok(donutDetail.paletteTitle)
    assert.equal(donutDetail.paletteDescription, undefined)
    assert.equal(donutDetail.imageAlt.process.length, donutAssets.processImages.length)
    assert.equal(donutDetail.imageAlt.processWide.length, donutAssets.processWideImages.length)
    assert.equal(donutDetail.imageAlt.details.length, donutAssets.detailImages.length)

    const deepSeaDetail = text.projects.items['deep-sea'].detail
    assert.equal(deepSeaDetail.number, '01')
    assert.equal(deepSeaDetail.facts.find(({ label }) => label === (text === translations.es ? 'Año' : 'Year')).value, '2017')
    assert.equal(deepSeaDetail.facts.at(-1).value, 'Photoshop, Illustrator, Wacom Tablet')
    assert.ok(deepSeaDetail.imageAlt.heroSecondary)
    assert.equal(deepSeaDetail.imageAlt.heroReferences.length, deepSeaAssets.heroReferenceImages.length)
    assert.equal(deepSeaDetail.imageAlt.process.length, deepSeaAssets.processImages.length)
    assert.equal(deepSeaDetail.imageAlt.details.length, deepSeaAssets.detailImages.length)

    const jungleDetail = text.projects.items.jungle.detail
    assert.equal(text.projects.items.jungle.title, text === translations.es ? 'Pantano' : 'Swamp')
    assert.equal(jungleDetail.number, '01')
    assert.equal(jungleDetail.facts.find(({ label }) => label === (text === translations.es ? 'Año' : 'Year')).value, '2017')
    assert.equal(jungleDetail.facts.at(-1).value, 'Photoshop, Illustrator, Wacom Tablet')
    assert.equal(jungleDetail.imageAlt.heroReferences.length, jungleAssets.heroReferenceImages.length)
    assert.equal(jungleDetail.imageAlt.process.length, jungleAssets.processImages.length)
    assert.equal(jungleDetail.imageAlt.details.length, jungleAssets.detailImages.length)

    const gameIconsDetail = text.projects.items['game-icons'].detail
    assert.equal(gameIconsDetail.number, '01')
    assert.equal(gameIconsDetail.facts.find(({ label }) => label === (text === translations.es ? 'Año' : 'Year')).value, '2017')
    assert.equal(gameIconsDetail.facts.at(-1).value, 'Photoshop, Illustrator')
    assert.equal(gameIconsDetail.imageAlt.process.length, gameIconsAssets.processImages.length)
    assert.ok(gameIconsDetail.paletteTitle)
    assert.equal(gameIconsDetail.paletteDescription, undefined)
    assert.ok(gameIconsDetail.imageAlt.heroSecondary)
    assert.equal(gameIconsDetail.imageAlt.details.length, gameIconsAssets.detailImages.length)
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
    'medusas', 'deep-sea', 'jungle', 'game-icons', 'snapchat-frames', 'reindeer', 'muchokids-nationalities', 'forest', 'muchomix-game', 'angels-sighs',
    'jardin-web', 'donas-3d', 'ventti', 'naval-infographics',
  ])
  assert.equal(getProjectNeighbors('muchomix-game', allProjects).next.id, 'angels-sighs')
  assert.equal(getProjectNeighbors('angels-sighs', allProjects).next.id, 'jardin-web')
  assert.equal(getProjectNeighbors('jardin-web', allProjects).next.id, 'donas-3d')
})

test('Snapchat Frames has a localized gallery of complete vertical frames', () => {
  const assets = getProjectDetails('snapchat-frames')
  const expectedIds = ['china', 'egypt', 'india', 'mexico', 'france', 'italy', 'england', 'ireland', 'spain', 'cuba', 'netherlands', 'russia', 'united-states', 'germany', 'sweden', 'south-korea', 'arab', 'muchokids']

  assert.equal(assets.layout, 'gallery')
  assert.equal(assets.accentColor, '#E90051')
  assert.equal(assets.secondaryAccentColor, '#008F87')
  assert.equal(assets.heroImage, undefined)
  assert.equal(assets.processImages, undefined)
  assert.equal(assets.isolatedAssets.length, 13)
  assert.equal(assets.isolatedAssets.length, new Set(assets.isolatedAssets.map(({ image }) => image)).size)
  assert.equal(assets.isolatedAssets.every(({ image, width, height }) => image.endsWith('.svg') && width > 0 && height > 0), true)
  assert.deepEqual(assets.frames.map(({ id }) => id), expectedIds)
  assert.equal(assets.frames.length, new Set(assets.frames.map(({ image }) => image)).size)
  assert.equal(assets.frames.find(({ id }) => id === 'england').image.endsWith('/england-verticalframe.jpg'), true)
  assert.equal(assets.frames.every(({ width, height }) => width < height), true)
  assert.equal(assets.frames.some(({ image }) => image.includes('horizontal')), false)

  for (const text of Object.values(translations)) {
    const detail = text.projects.items['snapchat-frames'].detail

    assert.equal(detail.number, '01')
    assert.ok(detail.introduction)
    assert.ok(detail.isolatedAssetsTitle)
    assert.ok(detail.isolatedAssetsDescription)
    assert.ok(detail.isolatedAssetsAlt)
    assert.equal(detail.titleParts.join(' '), text.projects.items['snapchat-frames'].title)
    assert.deepEqual(detail.facts, text === translations.es
      ? [
          { label: 'Año', value: '2017' },
          { label: 'Técnica', value: 'Ilustración digital' },
          { label: 'Herramientas', value: 'Photoshop, Illustrator, Wacom Bamboo' },
        ]
      : [
          { label: 'Year', value: '2017' },
          { label: 'Technique', value: 'Digital illustration' },
          { label: 'Tools', value: 'Photoshop, Illustrator, Wacom Bamboo' },
        ])
    assert.equal(detail.galleryTitle, undefined)
    assert.equal(detail.galleryDescription, undefined)
    assert.equal(detail.detailsTitle, undefined)
    assert.deepEqual(sortedKeys(detail.frames), [...expectedIds].sort())

    for (const frame of assets.frames) {
      assert.ok(frame.image.endsWith('.jpg'))
      assert.ok(detail.frames[frame.id].name)
      assert.ok(detail.frames[frame.id].alt)
      assert.equal(detail.frames[frame.id].detailAlt, undefined)
    }
  }
})

test('Superdeer shows the available poses, process and technical details in both languages', () => {
  const assets = getProjectDetails('reindeer')

  assert.ok(assets.heroImage.endsWith('/complete-illustration.jpg'))
  assert.equal(assets.processImages.length, 3)
  assert.equal(assets.processArrows.length, 2)
  assert.equal(assets.detailImages.length, 1)
  assert.ok(assets.detailImages[0].endsWith('/complete-illustration-2.png'))
  assert.deepEqual(assets.detailImageDimensions, [{ width: 1536, height: 1024 }])
  assert.deepEqual(assets.closeupImages.map((image) => image.split('/').at(-1)), [
    'reindeer-detail1.jpg',
    'reindeer-detail2.jpg',
    'reindeer-detail3.jpg',
    'reindeer-detail4.jpg',
  ])
  assert.equal(assets.palette.length, 6)
  assert.equal(new Set([assets.heroImage, ...assets.processImages, ...assets.detailImages, ...assets.closeupImages]).size, 9)

  for (const [language, text] of Object.entries(translations)) {
    const content = text.projects.items.reindeer
    const detail = content.detail

    assert.equal(content.title, language === 'es' ? 'Super reno' : 'Superdeer')
    assert.deepEqual(detail.facts.map(({ value }) => value), language === 'es'
      ? ['2018', 'Ilustración digital', 'Photoshop, Illustrator y tableta Wacom']
      : ['2018', 'Digital illustration', 'Photoshop, Illustrator and Wacom tablet'])
    assert.ok(detail.paletteTitle)
    assert.equal(detail.paletteDescription, undefined)
    assert.ok(detail.imageAlt.hero)
    assert.equal(detail.imageAlt.process.length, assets.processImages.length)
    assert.equal(detail.imageAlt.details.length, assets.detailImages.length)
    assert.equal(detail.closeupsTitle, language === 'es' ? 'Detalles' : 'Details')
    assert.ok(detail.closeupsDescription)
    assert.equal(detail.imageAlt.closeups.length, assets.closeupImages.length)
  }
})

test('Muchokids Nationalities shows Brazil, an editorial gallery introduction and fifteen localized gallery characters without process sections', () => {
  const assets = getProjectDetails('muchokids-nationalities')
  const expectedIds = ['spain', 'united-states', 'netherlands', 'norway', 'mexico', 'kenya', 'cuba', 'australia', 'japan', 'france', 'india', 'united-arab-emirates', 'netherlands-cap', 'united-kingdom', 'canada']

  assert.equal(assets.layout, 'nationalities')
  assert.ok(assets.heroImage.endsWith('/nacionalidadesmapa-12.svg'))
  assert.ok(assets.backgroundImage.endsWith('/fondo-brasil.png'))
  assert.deepEqual(assets.backgroundDimensions, { width: 1200, height: 536 })
  assert.ok(assets.flagImage.endsWith('/brazil-10.svg'))
  assert.deepEqual(assets.characters.map(({ id }) => id), expectedIds)
  assert.equal(assets.characters.every(({ image }) => image.endsWith('.svg')), true)
  assert.equal(assets.processImages, undefined)
  assert.equal(assets.detailImages, undefined)

  for (const text of Object.values(translations)) {
    const detail = text.projects.items['muchokids-nationalities'].detail

    assert.ok(detail.introduction)
    assert.deepEqual(detail.facts, text === translations.es
      ? [
          { label: 'Año', value: '2017' },
          { label: 'Técnica', value: 'Ilustración digital' },
          { label: 'Herramientas', value: 'Illustrator, Photoshop, Wacom Tablet' },
        ]
      : [
          { label: 'Year', value: '2017' },
          { label: 'Technique', value: 'Digital illustration' },
          { label: 'Tools', value: 'Illustrator, Photoshop, Wacom Tablet' },
        ])
    assert.ok(detail.galleryTitle)
    assert.equal(detail.galleryTitle, text === translations.es ? 'Personajes' : 'Characters')
    assert.ok(detail.heroAlt)
    assert.deepEqual(sortedKeys(detail.characters), [...expectedIds].sort())
    for (const character of assets.characters) {
      assert.ok(detail.characters[character.id].name)
      assert.ok(detail.characters[character.id].alt)
    }
  }
})

test('Forest exposes its localized final illustration, palette and process', () => {
  const assets = getProjectDetails('forest')

  assert.equal(assets.heroImage.endsWith('/forest-finalwork.jpg'), true)
  assert.deepEqual(assets.heroDimensions, { width: 1920, height: 2561 })
  assert.deepEqual(assets.processImages.map((image) => image.split('/').at(-1)), [
    'forest-process-1.png',
    'forest-process-2.jpg',
    'forest-process-3.jpg',
  ])
  assert.equal(assets.processArrows.length, assets.processImages.length - 1)
  assert.equal(assets.palette.length, 6)
  assert.equal(assets.referenceImages, undefined)
  assert.equal(assets.detailImages, undefined)

  for (const text of Object.values(translations)) {
    const detail = text.projects.items.forest.detail

    assert.ok(detail.introduction)
    assert.equal(detail.facts.find(({ label }) => label === (text === translations.es ? 'Año' : 'Year')).value, '2017')
    assert.equal(detail.facts.at(-1).value, 'Illustrator, Photoshop, Wacom Tablet')
    assert.ok(detail.paletteTitle)
    assert.equal(detail.imageAlt.process.length, assets.processImages.length)
  }
})

test('pending illustration projects have localized previews without detail landings', () => {
  for (const id of ['muchomix-game', 'angels-sighs']) {
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
  assert.equal(getProjectNeighbors('muchomix-game').next.id, 'angels-sighs')
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
  assert.deepEqual(getProjectsByCategory('illustration', catalog).map(({ id }) => id), ['donas-3d', 'medusas', 'deep-sea', 'jungle', 'game-icons', 'snapchat-frames', 'reindeer', 'muchokids-nationalities', 'forest', 'muchomix-game', 'angels-sighs'])
  assert.deepEqual(getProjectsByCategory('animations', catalog).map(({ id }) => id), ['naval-infographics', 'new-animation'])
  assert.deepEqual(getSelectedProjects(catalog).map(({ id }) => id), ['donas-3d', 'jardin-web', 'medusas', 'ventti'])
  assert.equal(catalog.filter(({ id }) => id === multiCategoryProject.id).length, 1)
  assert.doesNotThrow(() => validateProjectCatalog(catalog.slice(0, -1), projectCategories, translations))
})

test('project category listings derive from the catalog and preserve expected project IDs', () => {
  assert.deepEqual(projects.map(({ id }) => id), ['donas-3d', 'jardin-web', 'medusas', 'ventti', 'deep-sea', 'jungle', 'game-icons', 'snapchat-frames', 'reindeer', 'muchokids-nationalities', 'forest', 'muchomix-game', 'angels-sighs', 'naval-infographics'])
  assert.deepEqual(getProjectsByCategory('three-d').map(({ id }) => id), ['donas-3d'])
  assert.deepEqual(getProjectsByCategory('uxui').map(({ id }) => id), ['jardin-web'])
  assert.deepEqual(getProjectsByCategory('illustration').map(({ id }) => id), ['medusas', 'deep-sea', 'jungle', 'game-icons', 'snapchat-frames', 'reindeer', 'muchokids-nationalities', 'forest', 'muchomix-game', 'angels-sighs'])
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
