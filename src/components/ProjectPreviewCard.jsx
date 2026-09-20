import { Link } from 'react-router-dom'
import { paths } from '../routes/paths.js'
import './ProjectPreviewCard.scss'

function ProjectPreviewCard({ project, actionLabel, categoryId, index, headingLevel = 3 }) {
  const projectLabel = `${actionLabel}: ${project.title}`
  const Heading = headingLevel === 2 ? 'h2' : 'h3'
  const projectPath = paths.projectDetail(project.id, categoryId)

  return (
    <article className="project-card">
      <Link className="project-preview" to={projectPath} aria-label={projectLabel}>
        <img src={project.previewImage} alt={project.previewAlt} />
        {index != null && <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>}
      </Link>
      <p className="project-type">{project.type}</p>
      <Heading>{project.title}</Heading>
      <p className="project-description">{project.description}</p>
      <Link className="project-link" to={projectPath}>{actionLabel} <span aria-hidden="true">-&gt;</span></Link>
    </article>
  )
}

export default ProjectPreviewCard
