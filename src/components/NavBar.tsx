import { navItems, profile } from '../data/content'
import { Button } from './Button'
import { ThemeToggle } from './ThemeToggle'

type NavBarProps = {
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}

export function NavBar({ theme, onToggleTheme }: NavBarProps) {
  return (
    <header
      className={
        theme === 'dark'
          ? 'sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur'
          : 'sticky top-0 z-50 border-b border-slate-200 bg-slate-50/80 backdrop-blur'
      }
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <a href="#top" className="text-sm font-bold uppercase tracking-[0.18em] text-slate-100 no-underline">
          {profile.name}
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-slate-300 no-underline hover:text-sky-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <a href={profile.cvPath} download className="hidden sm:inline-block no-underline">
            <Button variant="primary">Download CV</Button>
          </a>
        </div>
      </div>
    </header>
  )
}
