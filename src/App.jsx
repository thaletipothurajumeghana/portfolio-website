import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Contact from './components/Contact'
import MemoryGame from './components/MemoryGame'
import { useEffect, useState } from 'react'

function App() {
  const [dark, setDark] = useState(false)
  const [chillax, setChillax] = useState(false)
  const [gameKey, setGameKey] = useState(0)

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

  const handleChillax = () => {
    if (chillax) {
      setChillax(false)
    } else {
      setGameKey((prev) => prev + 1)
      setChillax(true)
    }
  }

  return (
    <>
      <Navbar dark={dark} onToggle={() => setDark((d) => !d)} onChillax={handleChillax} />
      {chillax ? <MemoryGame key={gameKey} /> : (
        <>
          <Hero />
          <About />
          <TechStack />
          <Projects />
          <Contact />
        </>
      )}
    </>
  )
}

export default App
