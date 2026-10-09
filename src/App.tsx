import { Footer } from './components/Footer'
import { NavBar } from './components/NavBar'
import { useTheme } from './hooks/useTheme'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Education } from './sections/Education'
import { Experience } from './sections/Experience'
import { Gallery } from './sections/Gallery'
import { Hero } from './sections/Hero'
import { Projects } from './sections/Projects'
import { TechStack } from './sections/TechStack'

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div
      className={
        theme === 'dark'
          ? 'min-h-screen bg-slate-950 text-slate-100'
          : 'min-h-screen bg-slate-50 text-slate-900'
      }
    >
      <NavBar theme={theme} onToggleTheme={toggleTheme} />

      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Gallery />
        <TechStack />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
