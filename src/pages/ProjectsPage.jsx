import { useOutletContext } from 'react-router-dom'
import ProjectPreviewCard from '../components/ProjectPreviewCard.jsx'
import { getProjectsInMenuOrder, localizeProjects } from '../content/projects.js'
import { projectCategories } from '../content/projectCategories.js'
import { usePageMetadata } from '../hooks/usePageMetadata.js'
import './ProjectsPage.scss'

function ProjectsPage() {
  const { text } = useOutletContext()
  const headingRef = usePageMetadata(text.allProjectsTitle)
  const localizedProjects = localizeProjects(getProjectsInMenuOrder(undefined, projectCategories), text.projects.items)

  return (
    <section className="projects-landing" aria-labelledby="projects-title">
      <h1 id="projects-title" ref={headingRef} tabIndex={-1}>{text.allProjectsTitle}</h1>
      <p className="projects-landing-intro">{text.allProjectsIntro}</p>
      <div className="projects-preview-grid">
        {localizedProjects.map((project) => <ProjectPreviewCard actionLabel={text.selected.link} categoryId="all" headingLevel={2} key={project.id} project={project} />)}
      </div>
    </section>
  )
}

export default ProjectsPage
