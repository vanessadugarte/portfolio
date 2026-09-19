export const selectedWorks = [
  { id: 'donas-3d', number: '01' },
  { id: 'jardin-web', number: '02' },
  { id: 'medusas', number: '03' },
  { id: 'ventti', number: '04' },
]

export function localizeSelectedWorks(works, translationsById) {
  return works.map((work) => {
    const translatedContent = translationsById[work.id]

    if (!translatedContent) {
      throw new Error(`Missing selected work translation: ${work.id}`)
    }

    return { ...work, ...translatedContent }
  })
}
