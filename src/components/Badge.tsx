type BadgeProps = {
  children: string
}

export function Badge({ children }: BadgeProps) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        borderRadius: '999px',
        border: '1px solid rgba(148, 163, 184, 0.3)',
        background: 'rgba(15, 23, 42, 0.7)',
        color: '#cbd5e1',
        padding: '0.45rem 0.75rem',
        fontSize: '0.72rem',
        fontWeight: 600,
        letterSpacing: '0.02em',
      }}
    >
      {children}
    </span>
  )
}
