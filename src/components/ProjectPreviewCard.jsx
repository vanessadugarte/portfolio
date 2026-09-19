import { Link } from 'react-router-dom'
import { paths } from '../routes/paths.js'
import './ProjectPreviewCard.scss'

function ProjectPreviewCard({ project, actionLabel, index }) {
  const projectLabel = project.title

  return (
    <article className="project-card">
      <Link className="project-preview" to={paths.projectDetail(project.id)} aria-label={projectLabel}>
        <img src={project.previewImage} alt={project.previewAlt} />
        {index != null && <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>}
      </Link>
      <p className="project-type">{project.type}</p>
      <h3>{project.title}</h3>
      <p className="project-description">{project.description}</p>
      <Link className="project-link" to={paths.projectDetail(project.id)}>{actionLabel} <span aria-hidden="true">-&gt;</span></Link>
    </article>
  )
}

export default ProjectPreviewCard
