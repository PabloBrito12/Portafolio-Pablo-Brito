import { profile } from '../data/content'
import { Button } from '../components/Button'
import { SectionHeading } from '../components/SectionHeading'

export function Contact() {
  return (
    <section id="contact" style={{ padding: '4rem 1.25rem 5rem', maxWidth: '1180px', margin: '0 auto' }}>
      <div
        style={{
          border: '1px solid rgba(148, 163, 184, 0.2)',
          borderRadius: '1.5rem',
          background: 'linear-gradient(135deg, rgba(125, 211, 252, 0.08), rgba(139, 92, 246, 0.12))',
          padding: '2rem',
        }}
      >
        <SectionHeading
          eyebrow="Contact"
          title="Have a project or opportunity in mind? Let’s connect."
          description="I am open to junior front-end, web development, and remote opportunities."
        />

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <a href={`mailto:${profile.email}`} style={{ textDecoration: 'none' }}>
            <Button variant="primary">Email me</Button>
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
            <Button variant="secondary">GitHub</Button>
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
            <Button variant="secondary">LinkedIn</Button>
          </a>
        </div>
      </div>
    </section>
  )
}
