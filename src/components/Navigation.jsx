import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { projectCategories } from '../content/projectCategories.js'
import { paths } from '../routes/paths.js'
import './Navigation.scss'

const desktopMediaQuery = '(min-width: 40.0625rem)'

function ProjectMenu({ text }) {
  const menuRef = useRef(null)
  const summaryRef = useRef(null)
  const [isDesktop, setIsDesktop] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia(desktopMediaQuery)
    const updateMenuMode = () => {
      setIsDesktop(mediaQuery.matches)
      setIsOpen(false)
    }

    updateMenuMode()
    mediaQuery.addEventListener('change', updateMenuMode)

    return () => mediaQuery.removeEventListener('change', updateMenuMode)
  }, [])

  useEffect(() => {
    if (!isOpen) return undefined

    const closeWhenClickingOutside = (event) => {
      if (!menuRef.current?.contains(event.target)) setIsOpen(false)
    }

    document.addEventListener('click', closeWhenClickingOutside)

    return () => document.removeEventListener('click', closeWhenClickingOutside)
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)

  return (
    <details
      className="project-menu"
      open={isOpen}
      ref={menuRef}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) closeMenu()
      }}
      onMouseEnter={() => {
        if (isDesktop) setIsOpen(true)
      }}
      onMouseLeave={() => {
        if (isDesktop && !menuRef.current?.contains(document.activeElement)) closeMenu()
      }}
      onKeyDown={(event) => {
        if (event.key !== 'Escape' || !isOpen) return

        event.preventDefault()
        closeMenu()
        summaryRef.current?.focus()
      }}
      onToggle={(event) => {
        setIsOpen(event.currentTarget.open)
      }}
    >
      <summary ref={summaryRef}>
        <span>{text.nav.projects}</span>
        <svg aria-hidden="true" className="project-menu-chevron" viewBox="0 0 16 16">
          <path d="m3.5 6 4.5 4 4.5-4" />
        </svg>
      </summary>
      <div className="project-menu-list">
        {projectCategories.map(({ id, slug }) => (
          <NavLink to={paths.projectCategory(slug)} key={id} onClick={closeMenu}>{text.categories[id]}</NavLink>
        ))}
        <NavLink to={paths.projects} end className="view-all-projects" onClick={closeMenu}>{text.viewAllProjects}</NavLink>
      </div>
    </details>
  )
}

function Navigation({ onLanguageChange, text }) {
  return (
    <nav className="navigation" aria-label={text.navigationLabel}>
      <NavLink to={paths.home} end>{text.nav.home}</NavLink>
      <ProjectMenu text={text} />
      <NavLink to={paths.experience}>{text.nav.experience}</NavLink>
      <button className="language-switch" type="button" onClick={onLanguageChange} aria-label={text.languageLabel}>
        {text.language}
      </button>
    </nav>
  )
}

export default Navigation
