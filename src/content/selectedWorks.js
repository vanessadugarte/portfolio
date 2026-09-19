export const selectedWorks = [
  { id: 'playful-web', number: '01', preview: 'playful' },
  { id: 'material-3d', number: '02', preview: 'material' },
  { id: 'editorial-digital', number: '03', preview: 'editorial' },
  { id: 'graphic-poster', number: '04', preview: 'poster' },
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
