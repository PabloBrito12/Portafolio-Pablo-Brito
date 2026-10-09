import { techGroups } from '../data/content'
import { SectionHeading } from '../components/SectionHeading'

export function TechStack() {
  return (
    <section id="tech-stack" style={{ padding: '4rem 1.25rem', maxWidth: '1180px', margin: '0 auto' }}>
      <SectionHeading
        eyebrow="Tech stack"
        title="Tools and technologies relevant to front-end and web development."
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
        {techGroups.map((group) => (
          <div
            key={group.title}
            style={{
              border: '1px solid rgba(148, 163, 184, 0.2)',
              borderRadius: '1.25rem',
              background: 'rgba(15, 23, 42, 0.7)',
              padding: '1.25rem',
            }}
          >
            <h3 style={{ margin: '0 0 1rem', color: '#f8fafc', fontSize: '1.1rem' }}>{group.title}</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {group.items.map((item) => (
                <span
                  key={item}
                  style={{
                    padding: '0.45rem 0.75rem',
                    borderRadius: '999px',
                    background: 'rgba(125, 211, 252, 0.08)',
                    border: '1px solid rgba(125, 211, 252, 0.25)',
                    color: '#dbeafe',
                    fontSize: '0.75rem',
                  }}
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
