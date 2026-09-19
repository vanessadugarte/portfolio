import { useOutletContext } from 'react-router-dom'
import ProjectPreviewCard from '../components/ProjectPreviewCard.jsx'
import { getProjectsByCategory, localizeProjects } from '../content/projects.js'
import { usePageMetadata } from '../hooks/usePageMetadata.js'
import './ProjectCategoryPage.scss'

function ProjectCategoryPage({ categoryId }) {
  const { text } = useOutletContext()
  const categoryName = text.categories[categoryId]
  const headingRef = usePageMetadata(categoryName)
  const localizedProjects = localizeProjects(getProjectsByCategory(categoryId), text.projects.items)

  return (
    <section className="project-landing" aria-labelledby="project-category-title">
      <h1 id="project-category-title" ref={headingRef} tabIndex={-1}>{categoryName}</h1>
      {localizedProjects.length > 0 ? (
        <div className="projects-preview-grid">
          {localizedProjects.map((project) => <ProjectPreviewCard actionLabel={text.selected.link} headingLevel={2} key={project.id} project={project} />)}
        </div>
      ) : <p className="project-category-empty">{text.comingSoon}</p>}
    </section>
  )
}

export default ProjectCategoryPage
