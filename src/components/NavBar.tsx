import { navItems, profile } from '../data/content'

export function NavBar() {
  return (
    <header className="portfolio-header">
      <a href="#top" className="brand-mark" aria-label={`${profile.name} — home`}>
        <span className="brand-symbol">PB</span>
        <span>{profile.name}</span>
      </a>

      <nav aria-label="Main navigation" className="header-links">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>{item.label}</a>
        ))}
      </nav>

      <details className="cv-menu">
        <summary>Download CV <span aria-hidden="true">↗</span></summary>
        <div className="cv-options">
          {profile.cvDownloads.map((option) => (
            option.disabled ? (
              <span key={option.label} aria-disabled="true">
                {option.label} <small>Soon</small>
              </span>
            ) : (
              <a key={option.label} href={option.href} download={option.fileName}>
                {option.label}
              </a>
            )
          ))}
        </div>
      </details>
    </header>
  )
}
