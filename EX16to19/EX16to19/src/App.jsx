import { useEffect } from 'react'
import EX16 from './components/EX16'
import EX17 from './components/EX17'
import EX18 from './components/EX18'
import EX19 from './components/EX19'
import './App.css'

const App = () => {
  const sections = [
    { id: 'ex16', label: 'EX16: Event Handling' },
    { id: 'ex17', label: 'EX17: Render & Commit' },
    { id: 'ex18', label: 'EX18: State as Snapshot' },
    { id: 'ex19', label: 'EX19: PropTypes Validation' }
  ]

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      // Offset scrolling slightly for better visual alignment
      const yOffset = -20
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <div className="demo-wrapper">
      <header className="demo-header">
        <h1>React Core Lab</h1>
        <p className="demo-subtitle">
          Explore interactive demos for Exercises 16 to 19 covering events, rendering, snapshots, and prop types.
        </p>
      </header>

      {/* Anchor Navigation Links */}
      <nav className="anchor-nav">
        {sections.map((sec) => (
          <button
            key={sec.id}
            className="anchor-btn"
            onClick={() => scrollToSection(sec.id)}
          >
            {sec.label}
          </button>
        ))}
      </nav>

      {/* Scrollable Layout Panel */}
      <div className="scroll-content-panel">
        <section id="ex16" className="scroll-section">
          <EX16 />
        </section>

        <div className="section-divider"></div>

        <section id="ex17" className="scroll-section">
          <EX17 />
        </section>

        <div className="section-divider"></div>

        <section id="ex18" className="scroll-section">
          <EX18 />
        </section>

        <div className="section-divider"></div>

        <section id="ex19" className="scroll-section">
          <EX19 />
        </section>
      </div>
    </div>
  )
}

export default App
