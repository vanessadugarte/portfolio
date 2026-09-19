import assert from 'node:assert/strict'
import test from 'node:test'
import { heroCategoryFigures } from './heroFigures.js'
import { projectCategories } from './projectCategories.js'
import { localizeSelectedWorks, selectedWorks } from './selectedWorks.js'
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

test('selected works preserve their translated content when reordered', () => {
  const reorderedWorks = [...selectedWorks].reverse()

  for (const text of Object.values(translations)) {
    const localizedWorks = localizeSelectedWorks(reorderedWorks, text.selected.items)

    assert.deepEqual(localizedWorks.map(({ id }) => id), reorderedWorks.map(({ id }) => id))

    for (const localizedWork of localizedWorks) {
      assert.equal(localizedWork.title, text.selected.items[localizedWork.id].title)
      assert.equal(localizedWork.description, text.selected.items[localizedWork.id].description)
      assert.equal(localizedWork.type, text.selected.items[localizedWork.id].type)
    }
  }
})

test('every language defines the same selected work IDs', () => {
  const selectedWorkIds = selectedWorks.map(({ id }) => id).sort()

  for (const text of Object.values(translations)) {
    assert.deepEqual(sortedKeys(text.selected.items), selectedWorkIds)
  }
})

test('a missing selected work translation fails with its stable ID', () => {
  assert.throws(
    () => localizeSelectedWorks(selectedWorks, {}),
    /Missing selected work translation: playful-web/,
  )
})
