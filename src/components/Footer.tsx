import { navItems, profile } from '../data/content'

const currentYear = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/90">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-6">
        <div>
          <p className="m-0 text-base font-bold text-slate-50">{profile.name}</p>
          <p className="mt-1 text-sm text-slate-400">© {currentYear}</p>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="no-underline hover:text-sky-300">
              {item.label}
            </a>
          ))}
          <a href={profile.github} target="_blank" rel="noreferrer" className="no-underline hover:text-sky-300">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="no-underline hover:text-sky-300">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
