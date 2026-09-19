import { useOutletContext } from 'react-router-dom'
import ProjectPreviewCard from '../components/ProjectPreviewCard.jsx'
import { getProjectsByCategory, localizeProjects } from '../content/projects.js'
import './ProjectCategoryPage.scss'

function ProjectCategoryPage({ categoryId }) {
  const { text } = useOutletContext()
  const categoryName = text.categories[categoryId]
  const localizedProjects = localizeProjects(getProjectsByCategory(categoryId), text.projects.items)

  return (
    <section className="project-landing" aria-labelledby="project-category-title">
      <h2 id="project-category-title">{categoryName}</h2>
      {localizedProjects.length > 0 ? (
        <div className="projects-preview-grid">
          {localizedProjects.map((project) => <ProjectPreviewCard actionLabel={text.selected.link} key={project.id} project={project} />)}
        </div>
      ) : <p className="project-category-empty">{text.comingSoon}</p>}
    </section>
  )
}

export default ProjectCategoryPage
