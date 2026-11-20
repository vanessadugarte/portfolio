import { Link } from 'react-router-dom'
import { paths } from '../routes/paths.js'

function formatTemplate(template, replacements) {
  return Object.entries(replacements).reduce(
    (result, [key, value]) => result.replace(`{${key}}`, value),
    template,
  )
}

function ProjectPager({ categoryId, neighbors, text }) {
  const previousContent = neighbors.previous && text.projects.items[neighbors.previous.id]
  const nextContent = neighbors.next && text.projects.items[neighbors.next.id]

  return (
    <nav className="project-detail-pager" aria-label={text.nav.projects}>
      {neighbors.previous && (
        <Link
          className="project-detail-pager-previous"
          to={paths.projectDetail(neighbors.previous.id, categoryId)}
          aria-label={formatTemplate(text.projectDetail.previousProjectLabel, { title: previousContent.title })}
        >
          <span aria-hidden="true">←</span>
          <span>{text.projectDetail.previousProject}</span>
        </Link>
      )}
      {neighbors.next && (
        <Link
          className="project-detail-pager-next"
          to={paths.projectDetail(neighbors.next.id, categoryId)}
          aria-label={formatTemplate(text.projectDetail.nextProjectLabel, { title: nextContent.title })}
        >
          <span>{text.projectDetail.nextProject}</span>
          <span aria-hidden="true">→</span>
        </Link>
      )}
      {!neighbors.next && <span className="project-detail-pager-next-placeholder" aria-hidden="true" />}
    </nav>
  )
}

function ProjectNavigation({ categoryName, navigation, neighbors, text }) {
  return (
    <div className="project-detail-navigation">
      <Link className="project-detail-back" to={navigation.backPath}>
        <span aria-hidden="true">←</span>{' '}
        {formatTemplate(text.projectDetail.backToCategory, { category: categoryName.toLocaleLowerCase() })}
      </Link>
      <ProjectPager categoryId={navigation.contextId} neighbors={neighbors} text={text} />
    </div>
  )
}

export default ProjectNavigation
