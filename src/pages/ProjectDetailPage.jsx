import { useOutletContext, useParams } from 'react-router-dom'
import { getProjectBySlug } from '../content/projects.js'
import { getProjectCategory } from '../content/projectCategories.js'
import { usePageMetadata } from '../hooks/usePageMetadata.js'
import NotFoundPage from './NotFoundPage.jsx'
import './ProjectDetailPage.scss'

function ProjectDetailContent({ content, project, text }) {
  const headingRef = usePageMetadata(content.title)

  return (
    <section className="project-detail" aria-labelledby="project-detail-title">
      <p className="project-detail-categories">
        {project.categoryIds.map((categoryId) => text.categories[getProjectCategory(categoryId).id]).join(' · ')}
      </p>
      <h1 id="project-detail-title" ref={headingRef} tabIndex={-1}>{content.title}</h1>
      <p className="project-detail-pending">{text.comingSoon}</p>
    </section>
  )
}

function ProjectDetailPage() {
  const { text } = useOutletContext()
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  if (!project) {
    return <NotFoundPage />
  }

  return <ProjectDetailContent content={text.projects.items[project.id]} project={project} text={text} />
}

export default ProjectDetailPage
