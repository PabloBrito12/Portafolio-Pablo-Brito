import { profile } from '../data/content'
import { SectionHeading } from '../components/SectionHeading'

export function About() {
  return (
    <section id="about" style={{ padding: '4rem 1.25rem', maxWidth: '1180px', margin: '0 auto' }}>
      <SectionHeading
        eyebrow="About me"
        title="Building better interfaces with curiosity and discipline."
        description="I am a student of Computer Engineering at UCA, with professional experience in a technology company and a strong interest in front-end development, web interfaces, and learning by building."
      />

      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '2rem', alignItems: 'stretch' }}>
        <div
          style={{
            border: '1px solid rgba(148, 163, 184, 0.2)',
            background: 'rgba(15, 23, 42, 0.7)',
            borderRadius: '1.5rem',
            padding: '2rem',
          }}
        >
          <p style={{ margin: 0, color: '#cbd5e1', fontSize: '1.05rem', lineHeight: 1.8 }}>
            {profile.summary}
          </p>
        </div>

        <div
          style={{
            border: '1px solid rgba(148, 163, 184, 0.2)',
            background: 'linear-gradient(135deg, rgba(125, 211, 252, 0.1), rgba(139, 92, 246, 0.1))',
            borderRadius: '1.5rem',
            minHeight: '220px',
            display: 'grid',
            placeItems: 'center',
            color: '#f8fafc',
            fontSize: '1.2rem',
            fontWeight: 700,
          }}
        >
          Profile snapshot
        </div>
      </div>
    </section>
  )
}
