import { useOutletContext } from 'react-router-dom'

function ProjectsPage() {
  const { text } = useOutletContext()

  return (
    <section className="projects-landing" aria-labelledby="projects-title">
      <h2 id="projects-title">{text.allProjectsTitle}</h2>
      <p className="projects-landing-intro">{text.allProjectsIntro}</p>
    </section>
  )
}

export default ProjectsPage
