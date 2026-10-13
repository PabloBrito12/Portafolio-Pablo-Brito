import { profile } from '../data/content'
import { ParticleField } from '../components/ParticleField'

type HeroProps = {
  active: boolean
}

export function Hero({ active }: HeroProps) {
  return (
    <section id="top" className="section-panel hero-panel">
      <ParticleField active={active} />
      <div className="hero-layout">
        <div className="hero-copy">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-sky-400">
            Available for opportunities
          </p>

          <h1 aria-label={profile.name} className="m-0 text-5xl font-black tracking-[-0.08em] text-slate-50 md:text-6xl xl:text-7xl">
            {profile.name.split(' ').map((word, index) => (
              <span key={`${word}-${index}`} className="heading-word" aria-hidden="true">
                {word}
              </span>
            ))}
          </h1>

          <p className="mt-4 max-w-2xl text-lg font-medium text-sky-300 md:text-xl">
            {profile.role}
          </p>

          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
            I’m Pablo Brito, a Junior Front-End Developer and Information Technology Engineering student based in El Salvador. I build modern websites for real clients and enjoy turning ideas into useful digital experiences.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="inline-flex items-center justify-center rounded-full bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 no-underline shadow-[0_10px_30px_rgba(56,189,248,0.25)] transition hover:bg-sky-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
              Explore My Projects
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-slate-300/30 bg-slate-900/60 px-5 py-3 text-sm font-semibold text-slate-100 no-underline transition hover:border-sky-400/60 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
              Contact Me
            </a>
            <details className="relative">
              <summary className="list-none cursor-pointer rounded-full border border-sky-500/40 bg-sky-500/10 px-5 py-3 text-sm font-semibold text-sky-200 outline-none transition hover:border-sky-300 hover:bg-sky-500/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
                Download CV
              </summary>

              <div className="absolute left-0 top-full z-20 mt-2 w-52 overflow-hidden rounded-2xl border border-slate-700 bg-slate-900/95 text-slate-100 shadow-2xl shadow-slate-950/50">
                {profile.cvDownloads.map((option) =>
                  option.disabled ? (
                    <span
                      key={option.label}
                      aria-disabled="true"
                      className="block cursor-not-allowed px-4 py-3 text-sm text-slate-400"
                    >
                      {option.label}
                    </span>
                  ) : (
                    <a
                      key={option.label}
                      href={option.href}
                      download={option.fileName}
                      className="block px-4 py-3 text-sm text-sky-300 no-underline transition hover:bg-sky-500/10"
                    >
                      {option.label}
                    </a>
                  ),
                )}
              </div>
            </details>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-slate-200">
            <a href={profile.github} target="_blank" rel="noreferrer" className="no-underline text-slate-200 hover:text-sky-300">
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="no-underline text-slate-200 hover:text-sky-300">
              LinkedIn
            </a>
            <span className="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-emerald-300">
              Remote-friendly
            </span>
          </div>
        </div>

        <div className="hero-portrait">
          <div className="hero-art" role="img" aria-label="Pablo Brito monogram artwork">
            <span className="hero-art-orbit hero-art-orbit-one" aria-hidden="true" />
            <span className="hero-art-orbit hero-art-orbit-two" aria-hidden="true" />
            <span className="hero-art-glow" aria-hidden="true" />
            <span className="hero-art-monogram" aria-hidden="true">PB</span>
            <span className="hero-art-cross hero-art-cross-one" aria-hidden="true">+</span>
            <span className="hero-art-cross hero-art-cross-two" aria-hidden="true">+</span>
          </div>

          <div className="hero-availability">
            <p className="m-0 text-xs font-bold uppercase tracking-[0.18em] text-sky-300">Availability</p>
            <p className="mt-2 m-0 leading-7 text-slate-200">{profile.availability}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
