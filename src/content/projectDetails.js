const medusasAsset = (filename) => new URL(`../assets/images/projects/illustrations/medusas/${filename}`, import.meta.url).href
const donutsAsset = (filename) => new URL(`../assets/images/projects/3d/3d-donuts/${filename}`, import.meta.url).href
const deepSeaAsset = (filename) => new URL(`../assets/images/projects/illustrations/deep-sea/${filename}`, import.meta.url).href

export const projectDetails = {
  medusas: {
    heroImage: medusasAsset('finalwork-medusas.jpg'),
    decorationImage: medusasAsset('sample.png'),
    referenceImages: [medusasAsset('inspo-1.jpg'), medusasAsset('inspo-2.jpg')],
    processImages: [
      medusasAsset('sketch-1-medusas.jpg'),
      medusasAsset('sketch-2-medusas.jpg'),
      medusasAsset('sketch-3-medusas.jpg'),
      medusasAsset('sketch-4-medusas.jpg'),
    ],
    detailImages: [
      medusasAsset('detail-1-medusas.jpg'),
      medusasAsset('detail-2-medusas.jpg'),
      medusasAsset('detail-3-medusas.jpg'),
      medusasAsset('detail-4-medusas.jpg'),
    ],
    palette: ['#001b2a', '#004461', '#087fac', '#09c0e8', '#05a64e', '#4df024'],
  },
  'donas-3d': {
    heroImage: donutsAsset('final-donuts3d.jpg'),
    palette: ['#F5C6D8', '#E96486', '#F4B35E', '#B6E2C4', '#8E5A3C', '#E8D6C2'],
    processImages: [
      donutsAsset('sketch-1-donuts.jpg'),
      donutsAsset('sketch-2-donuts.jpg'),
      donutsAsset('sketch-3-donuts.jpg'),
      donutsAsset('sketch-4-donuts.jpg'),
    ],
    processWideImages: [
      donutsAsset('modelado-1.jpg'),
      donutsAsset('modelado-2.jpg'),
    ],
    detailImages: [
      donutsAsset('detail-donut-1.jpg'),
      donutsAsset('detail-donut-2.jpg'),
      donutsAsset('detail-donut-3.jpg'),
      donutsAsset('detail-donut-4.jpg'),
    ],
  },
  'deep-sea': {
    heroImage: deepSeaAsset('finalwork-deepsea.jpg'),
    heroDimensions: { width: 1200, height: 891 },
    heroSecondaryImage: deepSeaAsset('complete-work-deepsea.jpg'),
    heroSecondaryDimensions: { width: 1200, height: 1618 },
    decorationImage: deepSeaAsset('adorno-deepsea.png'),
    referenceImages: [deepSeaAsset('inspo-1.jpg'), deepSeaAsset('inspo-2.jpg')],
    palette: ['#041A3D', '#0A2836', '#23384D', '#578288', '#94CCD1', '#593D58', '#C098C2'],
    processImages: [
      deepSeaAsset('sketch-0-deep-sea.jpg'),
      deepSeaAsset('sketch-deepsea-1.jpg'),
      deepSeaAsset('sketch-deepsea-2.jpg'),
    ],
    detailImages: [
      deepSeaAsset('detail-deepsea-1.jpg'),
      deepSeaAsset('detail-deepsea-2.jpg'),
      deepSeaAsset('detail-deepsea-3.jpg'),
      deepSeaAsset('detail-deepsea-4.jpg'),
    ],
  },
}

export function getProjectDetails(projectId) {
  return projectDetails[projectId]
}
