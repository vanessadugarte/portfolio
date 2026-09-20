const asset = (filename) => new URL(`../assets/images/projects/medusas/${filename}`, import.meta.url).href

export const projectDetails = {
  medusas: {
    heroImage: asset('finalwork-medusas.jpg'),
    decorationImage: asset('sample.png'),
    referenceImages: [asset('inspo-1.jpg'), asset('inspo-2.jpg')],
    processImages: [
      asset('sketch-1-medusas.jpg'),
      asset('sketch-2-medusas.jpg'),
      asset('sketch-3-medusas.jpg'),
      asset('sketch-4-medusas.jpg'),
    ],
    detailImages: [
      asset('detail-1-medusas.jpg'),
      asset('detail-2-medusas.jpg'),
      asset('detail-3-medusas.jpg'),
      asset('detail-4-medusas.jpg'),
    ],
    palette: ['#001b2a', '#004461', '#087fac', '#09c0e8', '#05a64e', '#4df024'],
  },
}

export function getProjectDetails(projectId) {
  return projectDetails[projectId]
}
