import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { projectCategories } from '../content/projectCategories.js'
import { paths } from '../routes/paths.js'
import './Navigation.scss'

const desktopMediaQuery = '(min-width: 40.0625rem)'

function ProjectMenu({ text }) {
  const menuRef = useRef(null)
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
    if (isDesktop || !isOpen) return undefined

    const closeWhenClickingOutside = (event) => {
      if (!menuRef.current?.contains(event.target)) setIsOpen(false)
    }

    document.addEventListener('pointerdown', closeWhenClickingOutside)

    return () => document.removeEventListener('pointerdown', closeWhenClickingOutside)
  }, [isDesktop, isOpen])

  const closeMenu = () => setIsOpen(false)

  return (
    <details
      className="project-menu"
      open={isOpen}
      ref={menuRef}
      onBlur={(event) => {
        if (isDesktop && !event.currentTarget.contains(event.relatedTarget)) closeMenu()
      }}
      onFocus={() => {
        if (isDesktop) setIsOpen(true)
      }}
      onMouseEnter={() => {
        if (isDesktop) setIsOpen(true)
      }}
      onMouseLeave={() => {
        if (isDesktop) closeMenu()
      }}
      onToggle={(event) => {
        if (!isDesktop) setIsOpen(event.currentTarget.open)
      }}
    >
      <summary
        onClick={(event) => {
          if (isDesktop) event.preventDefault()
        }}
      >
        <span>{text.nav.projects}</span>
        <svg aria-hidden="true" className="project-menu-chevron" viewBox="0 0 16 16">
          <path d="m3.5 6 4.5 4 4.5-4" />
        </svg>
      </summary>
      <div className="project-menu-list">
        {projectCategories.map(({ id, slug }) => (
          <Link to={paths.projectCategory(slug)} key={id} onClick={closeMenu}>{text.categories[id]}</Link>
        ))}
        <Link to={paths.projects} className="view-all-projects" onClick={closeMenu}>{text.viewAllProjects}</Link>
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
