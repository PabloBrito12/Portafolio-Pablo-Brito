import { education } from '../data/content'
import { SectionHeading } from '../components/SectionHeading'

export function Education() {
  return (
    <section id="education" className="section-panel">
      <SectionHeading
        eyebrow="Education"
        title="Academic background with a focus on technology and growth."
      />

      <div className="grid gap-5">
        {education.map((item) => (
          <article
            key={item.institution}
            className="rounded-[1.5rem] border border-slate-800 bg-slate-900/70 p-5 md:p-6"
          >
            <h3 className="m-0 text-xl font-bold text-slate-50 md:text-2xl">{item.institution}</h3>
            <p className="mt-3 mb-2 text-base font-semibold text-sky-300">{item.degree}</p>
            <p className="m-0 text-slate-300">{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
