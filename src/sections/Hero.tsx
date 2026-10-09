import { profile } from '../data/content'
import { Button } from '../components/Button'

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-5 pb-14 pt-16 md:pt-20">
      <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-sky-400">
            Available for opportunities
          </p>
          <h1 className="m-0 text-5xl font-black tracking-[-0.08em] text-slate-50 md:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-4 text-xl font-semibold text-sky-400 md:text-2xl">{profile.role}</p>
          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">{profile.intro}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="no-underline">
              <Button variant="primary">View Projects</Button>
            </a>
            <a href={profile.cvPath} download className="no-underline">
              <Button variant="secondary">Download CV</Button>
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-5 text-sm text-slate-200">
            <a href={profile.github} target="_blank" rel="noreferrer" className="text-slate-200 no-underline hover:text-sky-300">
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-slate-200 no-underline hover:text-sky-300">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-8 shadow-2xl shadow-sky-950/30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(125,211,252,0.2),_transparent_35%)]" />
          <div className="relative z-10 flex min-h-[260px] flex-col items-center justify-center text-center">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-violet-500 text-2xl font-bold text-slate-950 shadow-[0_0_40px_rgba(125,211,252,0.35)]">
              P
            </div>
            <p className="m-0 max-w-sm text-base leading-7 text-slate-200">{profile.availability}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
