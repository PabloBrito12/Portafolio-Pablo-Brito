import { useRef } from 'react'
import { useSectionNavigation } from './animations/useSectionNavigation'
import { Contact } from './sections/Contact'
import { About } from './sections/About'
import { Education } from './sections/Education'
import { Experience } from './sections/Experience'
import { Gallery } from './sections/Gallery'
import { Hero } from './sections/Hero'
import { Projects } from './sections/Projects'
import { TechStack } from './sections/TechStack'
import { CursorEffects } from './components/CursorEffects'
import { NavBar } from './components/NavBar'

const sectionLabels = [
  'Home',
  'About',
  'Experience',
  'Projects',
  'Gallery',
  'Skills',
  'Education',
  'Contact',
]

function App() {
  const stageRef = useRef<HTMLElement>(null)
  const { activeIndex, navigateTo } = useSectionNavigation(stageRef, sectionLabels.length)

  return (
    <div className="portfolio-shell">
      <NavBar />
      <main ref={stageRef} className="section-stage" aria-label="Portfolio sections">
        <Hero active={activeIndex === 0} />
        <About />
        <Experience />
        <Projects />
        <Gallery />
        <TechStack />
        <Education />
        <Contact />
      </main>

      <nav className="section-rail" aria-label="Section navigation">
        <div className="section-progress" aria-live="polite">
          <span>{String(activeIndex + 1).padStart(2, '0')}</span>
          <span className="section-progress-divider">/</span>
          <span>{String(sectionLabels.length).padStart(2, '0')}</span>
        </div>
        <div className="section-dots">
          {sectionLabels.map((label, index) => (
            <button
              key={label}
              type="button"
              className={`section-dot${index === activeIndex ? ' is-active' : ''}`}
              aria-label={`Go to ${label} section`}
              aria-current={index === activeIndex ? 'page' : undefined}
              onClick={() => navigateTo(index)}
            >
              <span>{label}</span>
            </button>
          ))}
        </div>
      </nav>
      <CursorEffects />
    </div>
  )
}

export default App
