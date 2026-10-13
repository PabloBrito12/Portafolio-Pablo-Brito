import { techGroups } from '../data/content'
import { SectionHeading } from '../components/SectionHeading'

export function TechStack() {
  return (
    <section id="tech-stack" className="section-panel">
      <SectionHeading
        eyebrow="Tech stack"
        title="Tools and technologies relevant to front-end and web development."
        description="I focus on practical front-end work and keep expanding my skills across interface development, product usability, and modern web tooling."
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {techGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-[1.5rem] border border-slate-800 bg-slate-900/70 p-5 shadow-lg shadow-slate-950/20"
          >
            <h3 className="mb-4 text-lg font-bold text-slate-50">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-sky-400/20 bg-sky-500/5 px-3 py-1.5 text-xs font-medium text-sky-100"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
