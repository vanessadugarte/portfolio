import { useOutletContext } from 'react-router-dom'
import ProjectPreviewCard from '../components/ProjectPreviewCard.jsx'
import { localizeProjects, projects } from '../content/projects.js'
import './ProjectsPage.scss'

function ProjectsPage() {
  const { text } = useOutletContext()
  const localizedProjects = localizeProjects(projects, text.projects.items)

  return (
    <section className="projects-landing" aria-labelledby="projects-title">
      <h2 id="projects-title">{text.allProjectsTitle}</h2>
      <p className="projects-landing-intro">{text.allProjectsIntro}</p>
      <div className="projects-preview-grid">
        {localizedProjects.map((project) => <ProjectPreviewCard actionLabel={text.selected.link} key={project.id} project={project} />)}
      </div>
    </section>
  )
}

export default ProjectsPage
