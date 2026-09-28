const medusasAsset = (filename) => new URL(`../assets/images/projects/illustrations/medusas/${filename}`, import.meta.url).href
const donutsAsset = (filename) => new URL(`../assets/images/projects/3d/3d-donuts/${filename}`, import.meta.url).href
const deepSeaAsset = (filename) => new URL(`../assets/images/projects/illustrations/deep-sea/${filename}`, import.meta.url).href
const jungleAsset = (filename) => new URL(`../assets/images/projects/illustrations/jungle/${filename}`, import.meta.url).href
const gameIconsAsset = (filename) => new URL(`../assets/images/projects/illustrations/game-icons/${filename}`, import.meta.url).href
const organicShapeAsset = (filename) => new URL(`../assets/images/shapes/organic/${filename}`, import.meta.url).href
const arrowShapeAsset = (filename) => new URL(`../assets/images/shapes/flechas/${filename}`, import.meta.url).href
const processArrowAsset = (filename, mobileRotation, desktopRotation) => ({
  src: arrowShapeAsset(filename),
  mobileRotation,
  desktopRotation,
})

export const projectDetails = {
  medusas: {
    heroImage: medusasAsset('finalwork-medusas.jpg'),
    illustrationTreatment: true,
    accentColor: '#004461',
    organicMasks: {
      hero: organicShapeAsset('organic-shape-horiz.svg'),
      details: [
        organicShapeAsset('organic-shape-05.svg'),
        organicShapeAsset('organic-shape-02.svg'),
        organicShapeAsset('organic-shape-03.svg'),
        organicShapeAsset('organic-shape-04.svg'),
      ],
    },
    decorationImage: medusasAsset('sample.png'),
    referenceImages: [medusasAsset('inspo-1.jpg'), medusasAsset('inspo-2.jpg')],
    processImages: [
      medusasAsset('sketch-1-medusas.jpg'),
      medusasAsset('sketch-2-medusas.jpg'),
      medusasAsset('sketch-3-medusas.jpg'),
      medusasAsset('sketch-4-medusas.jpg'),
    ],
    processArrows: [
      processArrowAsset('flecha-01.svg', 90, 0),
      processArrowAsset('flecha-06.svg', 90, 0),
      processArrowAsset('flecha-09.svg', 180, 90),
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
    illustrationTreatment: true,
    accentColor: '#041A3D',
    heroSecondaryImage: deepSeaAsset('complete-work-deepsea.jpg'),
    heroSecondaryDimensions: { width: 1200, height: 1618 },
    decorationImage: deepSeaAsset('adorno-deepsea.png'),
    referenceImages: [deepSeaAsset('inspo-1.jpg'), deepSeaAsset('inspo-2.jpg')],
    organicMasks: {
      hero: organicShapeAsset('organic-shape-02.svg'),
      heroSecondary: organicShapeAsset('organic-shape-05.svg'),
      details: [
        organicShapeAsset('organic-shape-01.svg'),
        organicShapeAsset('organic-shape-05.svg'),
        organicShapeAsset('organic-shape-04.svg'),
        organicShapeAsset('organic-shape-03.svg'),
      ],
    },
    palette: ['#041A3D', '#0A2836', '#23384D', '#578288', '#94CCD1', '#593D58', '#C098C2'],
    processImages: [
      deepSeaAsset('sketch-0-deep-sea.jpg'),
      deepSeaAsset('sketch-deepsea-1.jpg'),
      deepSeaAsset('sketch-deepsea-2.jpg'),
      deepSeaAsset('sketch-deepsea-3.png'),
    ],
    processImageDimensions: [
      { width: 760, height: 500 },
      { width: 760, height: 500 },
      { width: 760, height: 500 },
      { width: 760, height: 500 },
    ],
    processArrows: [
      processArrowAsset('flecha-02.svg', 180, 90),
      processArrowAsset('flecha-07.svg', 0, -90),
      processArrowAsset('flecha-04.svg', 0, -90),
    ],
    detailImages: [
      deepSeaAsset('detail-deepsea-1.jpg'),
      deepSeaAsset('detail-deepsea-2.jpg'),
      deepSeaAsset('detail-deepsea-3.jpg'),
      deepSeaAsset('detail-deepsea-4.jpg'),
    ],
  },
  jungle: {
    heroImage: jungleAsset('jungle-illustration-complete.jpg'),
    heroDimensions: { width: 1200, height: 1490 },
    illustrationTreatment: true,
    accentColor: '#6B8534',
    heroDecorations: [
      jungleAsset('adorno-jungle-01.svg'),
      jungleAsset('adorno-jungle-02.svg'),
      jungleAsset('adorno-jungle-03.svg'),
    ],
    heroReferenceImages: [
      jungleAsset('swamp-reference.jpg'),
      jungleAsset('swamp-reference-2.jpg'),
    ],
    heroReferenceImageDimensions: Array.from({ length: 2 }, () => ({ width: 576, height: 842 })),
    organicMasks: {
      hero: organicShapeAsset('organic-shape-02.svg'),
      details: [
        organicShapeAsset('organic-shape-05.svg'),
        organicShapeAsset('organic-shape-02.svg'),
        organicShapeAsset('organic-shape-03.svg'),
        organicShapeAsset('organic-shape-04.svg'),
        organicShapeAsset('organic-shape-01.svg'),
      ],
    },
    processArrows: [
      processArrowAsset('flecha-05.svg', 0, -90),
      processArrowAsset('flecha-08.svg', -45, -135),
      processArrowAsset('flecha-04.svg', 0, -90),
    ],
    palette: ['#332B1D', '#51472D', '#B9AE92', '#A29D2A', '#EAE62B', '#C53F18', '#3F5B2B', '#6B8534'],
    palettePlacement: 'hero',
    processImages: [
      jungleAsset('jungle-sketch12026.jpg'),
      jungleAsset('jungle-sketch22026.jpg'),
      jungleAsset('jungle-sketch32026.jpg'),
      jungleAsset('swamp process.jpg'),
    ],
    processImageDimensions: [
      { width: 655, height: 842 },
      { width: 655, height: 842 },
      { width: 655, height: 842 },
      { width: 2048, height: 2732 },
    ],
    detailImages: [
      jungleAsset('jungle-detail1.jpg'),
      jungleAsset('jungle-detail2.jpg'),
      jungleAsset('jungle-detail3.jpg'),
      jungleAsset('jungle-detail4.jpg'),
      jungleAsset('jungle-detail5.jpg'),
    ],
    detailImageDimensions: Array.from({ length: 5 }, () => ({ width: 706, height: 500 })),
  },
  'game-icons': {
    heroImage: gameIconsAsset('game-icons-complete.jpg'),
    heroDimensions: { width: 1200, height: 1192 },
    illustrationTreatment: true,
    accentColor: '#E90051',
    decorationImage: gameIconsAsset('adorno-icons.svg'),
    organicMasks: {
      hero: organicShapeAsset('organic-shape-horiz.svg'),
      details: [
        organicShapeAsset('organic-shape-05.svg'),
        organicShapeAsset('organic-shape-02.svg'),
      ],
    },
    processImages: [
      gameIconsAsset('game-icons-process-1.jpg'),
      gameIconsAsset('game-icons-process-2.jpg'),
    ],
    processImageDimensions: Array.from({ length: 2 }, () => ({ width: 673, height: 542 })),
    processArrows: [
      processArrowAsset('flecha-01.svg', 90, 0),
    ],
    detailImages: [
      gameIconsAsset('icons-detail-1.jpg'),
      gameIconsAsset('icons-detail-2.png'),
    ],
    detailImageDimensions: [
      { width: 535, height: 543 },
      { width: 617, height: 500 },
    ],
  },
}

export function getProjectDetails(projectId) {
  return projectDetails[projectId]
}
