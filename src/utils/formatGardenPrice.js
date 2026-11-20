export function formatGardenPrice(priceCLP, language) {
  return new Intl.NumberFormat(language === 'en' ? 'en-US' : 'es-CL', {
    style: 'currency',
    currency: 'CLP',
    maximumFractionDigits: 0,
  }).format(priceCLP)
}
