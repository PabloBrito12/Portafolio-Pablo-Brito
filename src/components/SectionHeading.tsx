type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-10">
      {eyebrow ? (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-sky-400">
          {eyebrow}
        </p>
      ) : null}

      <h2
        aria-label={title}
        className="m-0 text-3xl font-black tracking-[-0.06em] text-slate-50 md:text-4xl lg:text-5xl"
      >
        {title.split(' ').map((word, index) => (
          <span key={`${word}-${index}`} className="heading-word" aria-hidden="true">
            {word}
          </span>
        ))}
      </h2>

      {description ? (
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300 md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  )
}
