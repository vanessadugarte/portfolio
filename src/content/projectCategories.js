export const projectCategories = [
  { id: 'illustration', slug: 'ilustracion' },
  { id: 'uxui', slug: 'frontend-uxui' },
  { id: 'three-d', slug: '3d' },
  { id: 'graphic-design', slug: 'diseno-grafico' },
  { id: 'animations', slug: 'animaciones' },
]

const projectCategoriesById = Object.fromEntries(
  projectCategories.map((category) => [category.id, category]),
)

export function getProjectCategory(categoryId) {
  const category = projectCategoriesById[categoryId]

  if (!category) {
    throw new Error(`Unknown project category: ${categoryId}`)
  }

  return category
}
