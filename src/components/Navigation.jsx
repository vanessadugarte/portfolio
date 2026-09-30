import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
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
        if (event.relatedTarget && !event.currentTarget.contains(event.relatedTarget)) closeMenu()
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
  const dialogRef = useRef(null)
  const menuButtonRef = useRef(null)
  const brandRef = useRef(null)
  const restoreMenuFocusRef = useRef(true)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const dialog = dialogRef.current
    const mediaQuery = window.matchMedia(desktopMediaQuery)
    const closeOnDesktop = () => {
      if (mediaQuery.matches && dialog?.open) {
        restoreMenuFocusRef.current = false
        dialog.close()
        brandRef.current?.focus({ preventScroll: true })
      }
    }

    mediaQuery.addEventListener('change', closeOnDesktop)
    return () => mediaQuery.removeEventListener('change', closeOnDesktop)
  }, [])

  useEffect(() => {
    dialogRef.current?.close()
  }, [location.pathname])

  const openDrawer = () => {
    restoreMenuFocusRef.current = true
    dialogRef.current?.showModal()
    setIsDrawerOpen(true)
  }

  const closeDrawer = () => dialogRef.current?.close()

  const navigateFromDrawer = () => {
    restoreMenuFocusRef.current = false
    closeDrawer()
    window.requestAnimationFrame(() => {
      document.getElementById('main-content')?.focus({ preventScroll: true })
    })
  }

  return (
    <nav className="navigation" aria-label={text.navigationLabel}>
      <NavLink className="navigation-brand" to={paths.home} end ref={brandRef}>Vanessa Dugarte</NavLink>
      <button
        className="mobile-menu-button"
        type="button"
        ref={menuButtonRef}
        onClick={openDrawer}
        aria-label={text.openMenu}
        aria-expanded={isDrawerOpen}
        aria-controls="mobile-navigation-drawer"
      >
        <span aria-hidden="true" className="hamburger-icon"><span /><span /><span /></span>
      </button>
      <div className="desktop-navigation">
        <NavLink to={paths.home} end>{text.nav.home}</NavLink>
        <ProjectMenu text={text} />
        <NavLink to={paths.experience}>{text.nav.experience}</NavLink>
        <button className="language-switch" type="button" onClick={onLanguageChange} aria-label={text.languageLabel}>
          {text.language}
        </button>
      </div>
      <dialog
        className="mobile-drawer"
        id="mobile-navigation-drawer"
        ref={dialogRef}
        aria-label={text.navigationLabel}
        onClose={() => {
          setIsDrawerOpen(false)
          if (restoreMenuFocusRef.current) menuButtonRef.current?.focus({ preventScroll: true })
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeDrawer()
        }}
        onKeyDown={(event) => {
          if (event.key !== 'Tab') return

          const controls = Array.from(event.currentTarget.querySelectorAll('a[href], button:not([disabled])'))
          const first = controls[0]
          const last = controls.at(-1)

          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault()
            last?.focus()
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault()
            first?.focus()
          }
        }}
      >
        <div className="mobile-drawer-panel">
          <div className="mobile-drawer-heading">
            <span>Vanessa Dugarte</span>
            <button className="mobile-drawer-close" type="button" onClick={closeDrawer} aria-label={text.closeMenu}>
              <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5 5 19 19M19 5 5 19" /></svg>
            </button>
          </div>
          <div className="mobile-drawer-links">
            <NavLink to={paths.home} end onClick={navigateFromDrawer}>{text.nav.home}</NavLink>
            <NavLink to={paths.projects} end onClick={navigateFromDrawer}>{text.nav.projects}</NavLink>
            <div className="mobile-drawer-categories">
              {projectCategories.map(({ id, slug }) => (
                <NavLink to={paths.projectCategory(slug)} key={id} onClick={navigateFromDrawer}>{text.categories[id]}</NavLink>
              ))}
            </div>
            <NavLink to={paths.experience} onClick={navigateFromDrawer}>{text.nav.experience}</NavLink>
            <button className="language-switch" type="button" onClick={onLanguageChange} aria-label={text.languageLabel}>
              {text.language}
            </button>
          </div>
        </div>
      </dialog>
    </nav>
  )
}

export default Navigation
