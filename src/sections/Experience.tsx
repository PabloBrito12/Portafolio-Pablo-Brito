import { experience } from '../data/content'
import { SectionHeading } from '../components/SectionHeading'

export function Experience() {
  return (
    <section id="experience" style={{ padding: '4rem 1.25rem', maxWidth: '1180px', margin: '0 auto' }}>
      <SectionHeading
        eyebrow="Experience"
        title="Professional growth in a real technology environment."
      />

      <div style={{ display: 'grid', gap: '1.2rem' }}>
        {experience.map((item, index) => (
          <article
            key={`${item.role}-${item.company}`}
            style={{
              display: 'grid',
              gridTemplateColumns: '160px 1fr',
              gap: '1.5rem',
              padding: '1.5rem 1.25rem',
              border: '1px solid rgba(148, 163, 184, 0.2)',
              borderRadius: '1.25rem',
              background: 'rgba(15, 23, 42, 0.7)',
            }}
          >
            <div
              style={{
                color: '#7dd3fc',
                fontWeight: 700,
                fontSize: '0.8rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              {index === 0 ? '2025' : '2026'}
              <div style={{ marginTop: '0.5rem', color: '#cbd5e1' }}>{item.period}</div>
            </div>

            <div>
              <h3 style={{ margin: 0, color: '#f8fafc', fontSize: '1.5rem' }}>{item.role}</h3>
              <p style={{ margin: '0.5rem 0 1rem', color: '#7dd3fc', fontWeight: 600 }}>{item.company}</p>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#cbd5e1', lineHeight: 1.8 }}>
                {item.description.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
