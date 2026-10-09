import { education } from '../data/content'
import { SectionHeading } from '../components/SectionHeading'

export function Education() {
  return (
    <section id="education" style={{ padding: '4rem 1.25rem', maxWidth: '1180px', margin: '0 auto' }}>
      <SectionHeading
        eyebrow="Education"
        title="Academic background and language training."
      />

      <div style={{ display: 'grid', gap: '1rem' }}>
        {education.map((item) => (
          <article
            key={item.institution}
            style={{
              border: '1px solid rgba(148, 163, 184, 0.2)',
              borderRadius: '1.25rem',
              background: 'rgba(15, 23, 42, 0.7)',
              padding: '1.25rem 1.5rem',
            }}
          >
            <h3 style={{ margin: 0, color: '#f8fafc', fontSize: '1.3rem' }}>{item.institution}</h3>
            <p style={{ margin: '0.7rem 0 0.2rem', color: '#7dd3fc', fontWeight: 700 }}>{item.degree}</p>
            <p style={{ margin: 0, color: '#cbd5e1' }}>{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
