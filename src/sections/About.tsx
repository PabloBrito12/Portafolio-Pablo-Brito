import { profile } from '../data/content'
import { SectionHeading } from '../components/SectionHeading'

export function About() {
  return (
    <section id="about" className="section-panel">
      <SectionHeading
        eyebrow="About me"
        title="Building better interfaces with curiosity and discipline."
        description="I develop front-end experiences that are useful, responsive, and easy for real users to trust and navigate."
      />

      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[1.75rem] border border-slate-800 bg-slate-900/70 p-7 shadow-lg shadow-slate-950/20">
          <p className="m-0 text-base leading-8 text-slate-300 md:text-lg">
            {profile.summary}
          </p>
        </div>

        <div className="rounded-[1.75rem] border border-sky-500/20 bg-gradient-to-br from-sky-500/10 via-slate-900 to-violet-500/10 p-6">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-sky-300">Profile snapshot</p>
          <ul className="m-0 list-none space-y-3 p-0 text-sm text-slate-200 md:text-base">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-400" />
              <span>Based in San Salvador, El Salvador.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-400" />
              <span>Focused on responsive, modern front-end development.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-400" />
              <span>Studying Information Technology Engineering at UCA.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-400" />
              <span>Open to remote, hybrid, and international collaboration.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
