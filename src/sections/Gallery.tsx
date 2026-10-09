import { SectionHeading } from '../components/SectionHeading'

const galleryItems = [
  'Dental Clinic',
  'E-commerce UI',
  'Portfolio Concept',
  'Landing Page',
  'Business Website',
  'UI Case Study',
]

export function Gallery() {
  return (
    <section id="gallery" style={{ padding: '4rem 1.25rem', maxWidth: '1180px', margin: '0 auto' }}>
      <SectionHeading
        eyebrow="Website gallery"
        title="A quick look at the web work behind the portfolio."
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
        {galleryItems.map((item, index) => (
          <div
            key={item}
            style={{
              minHeight: '180px',
              borderRadius: '1.25rem',
              border: '1px solid rgba(148, 163, 184, 0.2)',
              background: `linear-gradient(135deg, rgba(125,211,252,${0.08 + index * 0.02}), rgba(139,92,246,${0.11 + index * 0.02}))`,
              display: 'grid',
              placeItems: 'center',
              color: '#f8fafc',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  )
}
