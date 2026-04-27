import { useEffect, useState } from 'react'
import './MemoryGame.css'

const languages = [
  {
    name: 'JavaScript',
    spec: 'High-level, interpreted programming language. Used for web development.',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    color: '#f7df1e'
  },
  {
    name: 'Python',
    spec: 'Interpreted, high-level, general-purpose programming language. Known for simplicity.',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    color: '#306998'
  },
  {
    name: 'Java',
    spec: 'Class-based, object-oriented programming language. Platform-independent.',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    color: '#f89820'
  },
  {
    name: 'C++',
    spec: 'General-purpose programming language. Supports procedural, object-oriented, and generic programming.',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
    color: '#00599c'
  },
  {
    name: 'Ruby',
    spec: 'Dynamic, open-source programming language. Focuses on simplicity and productivity.',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg',
    color: '#cc342d'
  },
  {
    name: 'Go',
    spec: 'Statically typed, compiled programming language. Designed for efficiency.',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg',
    color: '#00add8'
  },
  {
    name: 'Rust',
    spec: 'Systems programming language. Emphasizes safety and performance.',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg',
    color: '#dea584'
  },
  {
    name: 'PHP',
    spec: 'Server-side scripting language. Designed for web development.',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
    color: '#8892bf'
  },
  {
    name: 'Swift',
    spec: 'Powerful and intuitive programming language for iOS, macOS, etc.',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg',
    color: '#fa7343'
  },
  {
    name: 'Kotlin',
    spec: 'Statically typed programming language for JVM, Android, etc.',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg',
    color: '#0095d5'
  },
  {
    name: 'TypeScript',
    spec: 'Superset of JavaScript. Adds static typing.',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    color: '#3178c6'
  },
  {
    name: 'C#',
    spec: 'Multi-paradigm programming language. Part of .NET framework.',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
    color: '#239120'
  }
]

function MemoryGame() {
  const [cards] = useState(() => {
    return [...languages, ...languages]
      .sort(() => Math.random() - 0.5)
      .map((lang, index) => ({ id: index, lang }))
  })
  const [flipped, setFlipped] = useState([])
  const [matched, setMatched] = useState(new Set())
  const [time, setTime] = useState(0)
  const [record, setRecord] = useState(() => {
    if (typeof window === 'undefined') return null
    const saved = window.localStorage.getItem('memoryMatchRecord')
    return saved ? Number(saved) : null
  })

  const completed = matched.size === cards.length && cards.length > 0

  useEffect(() => {
    if (completed) return
    const timer = setInterval(() => setTime((prev) => prev + 1), 1000)
    return () => clearInterval(timer)
  }, [completed])

  const handleClick = (id) => {
    if (flipped.length === 2 || matched.has(id) || flipped.includes(id) || completed) return

    const newFlipped = [...flipped, id]
    setFlipped(newFlipped)

    if (newFlipped.length === 2) {
      const [first, second] = newFlipped
      if (cards[first].lang.name === cards[second].lang.name) {
        const newMatched = new Set([...matched, first, second])
        setMatched(newMatched)
        setFlipped([])

        if (newMatched.size === cards.length) {
          const best = record === null || time < record ? time : record
          if (best !== record) {
            setRecord(best)
            window.localStorage.setItem('memoryMatchRecord', String(best))
          }
        }
      } else {
        setTimeout(() => setFlipped([]), 1000)
      }
    }
  }

  const handleRightClick = (e, lang) => {
    e.preventDefault()
    alert(`${lang.name}: ${lang.spec}`)
  }

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="memory-game">
      <div className="memory-header">
        <h1>Memory Match</h1>
        <div className="memory-stats">
          <span>Time: {formatTime(time)}</span>
          <span>Record: {record !== null ? formatTime(record) : '--:--'}</span>
        </div>
      </div>
      <div className="grid">
        {cards.map((card) => {
          const isFlipped = flipped.includes(card.id) || matched.has(card.id)
          return (
            <div
              key={card.id}
              className={`card ${isFlipped ? 'flipped' : ''}`}
              onClick={() => handleClick(card.id)}
              onContextMenu={(e) => handleRightClick(e, card.lang)}
            >
              <div className="card-inner">
                <div className="card-front">?</div>
                <div className="card-back" style={{ backgroundColor: card.lang.color }}>
                  <img src={card.lang.logo} alt={`${card.lang.name} logo`} className="lang-logo" />
                  <div className="lang-name">{card.lang.name}</div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      {completed && (
        <div className="completion-message">
          <strong>Completed!</strong> Your time is {formatTime(time)}.
        </div>
      )}
      <div className="memory-note">Right-click a tile to see its language details.</div>
    </div>
  )
}

export default MemoryGame