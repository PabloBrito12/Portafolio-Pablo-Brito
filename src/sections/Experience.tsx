import { experience } from '../data/content'
import { SectionHeading } from '../components/SectionHeading'

export function Experience() {
  return (
    <section id="experience" className="section-panel">
      <SectionHeading
        eyebrow="Experience"
        title="Professional growth in a real technology environment."
        description="My experience at Tecnologías Trust Me reflects a clear progression from support and digital communication work to front-end development responsibilities."
      />

      <div className="grid gap-5">
        {experience.map((item, index) => (
          <article
            key={`${item.role}-${item.company}`}
            className="grid gap-5 rounded-[1.75rem] border border-slate-800 bg-slate-900/70 p-5 md:grid-cols-[180px_1fr] md:p-7"
          >
            <div className="pt-1">
              <p className="m-0 text-xs font-bold uppercase tracking-[0.2em] text-sky-400">
                {index === 0 ? '2026' : '2025'}
              </p>
              <p className="mt-3 text-sm text-slate-300">{item.period}</p>
            </div>

            <div>
              <h3 className="m-0 text-2xl font-bold text-slate-50">{item.role}</h3>
              <p className="mt-2 mb-4 text-base font-semibold text-sky-300">{item.company}</p>
              <ul className="m-0 space-y-2 pl-5 text-base leading-7 text-slate-300">
                {item.description.map((point) => (
                  <li key={point} className="marker:text-sky-400">{point}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
