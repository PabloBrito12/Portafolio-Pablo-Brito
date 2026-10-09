type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div style={{ marginBottom: '2rem' }}>
      {eyebrow ? (
        <p
          style={{
            margin: 0,
            marginBottom: '0.75rem',
            color: '#7dd3fc',
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
          }}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        style={{
          margin: 0,
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          lineHeight: 1.1,
          letterSpacing: '-0.06em',
          color: '#e2e8f0',
        }}
      >
        {title}
      </h2>
      {description ? (
        <p
          style={{
            margin: '1rem 0 0',
            maxWidth: '48rem',
            color: '#94a3b8',
            fontSize: '1.05rem',
            lineHeight: 1.7,
          }}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
