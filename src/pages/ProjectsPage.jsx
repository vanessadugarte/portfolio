import { useOutletContext } from 'react-router-dom'
import ProjectPreviewCard from '../components/ProjectPreviewCard.jsx'
import { localizeProjects, projects } from '../content/projects.js'
import { usePageMetadata } from '../hooks/usePageMetadata.js'
import './ProjectsPage.scss'

function ProjectsPage() {
  const { text } = useOutletContext()
  const headingRef = usePageMetadata(text.allProjectsTitle)
  const localizedProjects = localizeProjects(projects, text.projects.items)

  return (
    <section className="projects-landing" aria-labelledby="projects-title">
      <h1 id="projects-title" ref={headingRef} tabIndex={-1}>{text.allProjectsTitle}</h1>
      <p className="projects-landing-intro">{text.allProjectsIntro}</p>
      <div className="projects-preview-grid">
        {localizedProjects.map((project) => <ProjectPreviewCard actionLabel={text.selected.link} headingLevel={2} key={project.id} project={project} />)}
      </div>
    </section>
  )
}

export default ProjectsPage
