import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'

function App() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    document.body.classList.toggle('dark', dark)
  }, [dark])

  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible')
      })
    }, { threshold: 0.1 })

    reveals.forEach(r => observer.observe(r))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar dark={dark} onToggle={() => setDark(d => !d)} />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
