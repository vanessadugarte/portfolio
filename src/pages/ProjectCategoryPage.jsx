import { useOutletContext } from 'react-router-dom'
import './ProjectCategoryPage.scss'

function ProjectCategoryPage({ slug }) {
  const { text } = useOutletContext()

  return (
    <section className="project-landing" aria-label={text.categories[slug]}>
      <p>{text.projectLabel}</p>
      <h2>{text.categories[slug]}</h2>
      <span>{text.comingSoon}</span>
    </section>
  )
}

export default ProjectCategoryPage
