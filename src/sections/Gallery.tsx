import { SectionHeading } from '../components/SectionHeading'

const galleryItems = [
  { label: 'Dental Clinic', accent: 'from-sky-500/20 to-sky-400/5' },
  { label: 'Professional CV', accent: 'from-violet-500/20 to-violet-400/5' },
  { label: 'E-commerce UI', accent: 'from-cyan-500/20 to-cyan-400/5' },
  { label: 'Client Website', accent: 'from-emerald-500/20 to-emerald-400/5' },
  { label: 'Landing Page', accent: 'from-indigo-500/20 to-indigo-400/5' },
  { label: 'Responsive Design', accent: 'from-fuchsia-500/20 to-fuchsia-400/5' },
]

export function Gallery() {
  return (
    <section id="gallery" className="section-panel">
      <SectionHeading
        eyebrow="Work snapshots"
        title="A quick look at the type of digital work I help create."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {galleryItems.map((item, index) => (
          <div
            key={item.label}
            className={`flex min-h-[180px] items-center justify-center rounded-[1.5rem] border border-slate-800 bg-gradient-to-br ${item.accent} px-6 text-center text-sm font-bold uppercase tracking-[0.14em] text-slate-100`}
          >
            {index + 1}. {item.label}
          </div>
        ))}
      </div>
    </section>
  )
}
