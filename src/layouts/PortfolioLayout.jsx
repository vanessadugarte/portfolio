import { useEffect, useRef, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navigation from '../components/Navigation.jsx'
import { translations } from '../content/translations.js'
import './PortfolioLayout.scss'

function PortfolioLayout() {
  const location = useLocation()
  const mainRef = useRef(null)
  const [language, setLanguage] = useState(() => (
    window.localStorage.getItem('portfolio-language') === 'en' ? 'en' : 'es'
  ))
  const text = translations[language]

  function toggleLanguage() {
    setLanguage((currentLanguage) => (currentLanguage === 'es' ? 'en' : 'es'))
  }

  function skipToContent(event) {
    event.preventDefault()
    mainRef.current?.focus()
  }

  useEffect(() => {
    window.localStorage.setItem('portfolio-language', language)
    document.documentElement.lang = language
  }, [language])

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [location.pathname])

  return (
    <>
      <a className="skip-link" href="#main-content" onClick={skipToContent}>{text.skipToContent}</a>
      <Navigation onLanguageChange={toggleLanguage} text={text} />
      <main className="page" id="main-content" ref={mainRef} tabIndex={-1}>
        <Outlet context={{ text }} />
      </main>
    </>
  )
}

export default PortfolioLayout
