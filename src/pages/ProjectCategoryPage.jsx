import { useOutletContext } from 'react-router-dom'
import './ProjectCategoryPage.scss'

function ProjectCategoryPage({ categoryId }) {
  const { text } = useOutletContext()
  const categoryName = text.categories[categoryId]

  return (
    <section className="project-landing" aria-label={categoryName}>
      <p>{text.projectLabel}</p>
      <h2>{categoryName}</h2>
      <span>{text.comingSoon}</span>
    </section>
  )
}

export default ProjectCategoryPage
