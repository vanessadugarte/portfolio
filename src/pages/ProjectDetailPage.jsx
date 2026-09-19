import { useOutletContext, useParams } from 'react-router-dom'
import { getProjectBySlug } from '../content/projects.js'
import { getProjectCategory } from '../content/projectCategories.js'
import NotFoundPage from './NotFoundPage.jsx'
import './ProjectDetailPage.scss'

function ProjectDetailPage() {
  const { text } = useOutletContext()
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  if (!project) {
    return <NotFoundPage />
  }

  const content = text.projects.items[project.id]

  return (
    <section className="project-detail" aria-labelledby="project-detail-title">
      <p className="project-detail-categories">
        {project.categoryIds.map((categoryId) => text.categories[getProjectCategory(categoryId).id]).join(' · ')}
      </p>
      <h1 id="project-detail-title">{content.title}</h1>
      <p className="project-detail-pending">{text.comingSoon}</p>
    </section>
  )
}

export default ProjectDetailPage
