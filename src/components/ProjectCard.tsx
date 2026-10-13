import type { Project } from '../data/content'

const projectImages: Record<string, string> = {
  'Smile Factory': '/descarga.png',
  'Melissa Velásquez CV Website': '/descarga%20(1).png',
  GitHub: '/github.png',
}

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card group overflow-hidden rounded-[1.75rem] border border-slate-800 bg-slate-900/80 shadow-lg shadow-slate-950/20 transition-all duration-200 hover:-translate-y-1 hover:border-sky-400/60">
      <div className="project-preview">
        {projectImages[project.name] ? (
          <img
            src={projectImages[project.name]}
            alt={project.imageLabel}
            loading="lazy"
            decoding="async"
            className="project-preview-image"
          />
        ) : (
          <span>{project.imageLabel}</span>
        )}
      </div>

      <div className="p-6">
        <p className="mb-3 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-sky-400">
          {project.category}
        </p>
        <h3 className="mb-3 text-2xl font-bold text-slate-50">{project.name}</h3>
        <p className="text-base leading-7 text-slate-300">{project.shortDescription}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-700 bg-slate-800/80 px-3 py-1 text-[0.72rem] text-slate-200"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 space-y-4 border-t border-slate-800 pt-5">
          <p className="m-0 text-sm leading-7 text-slate-300">
            <span className="font-semibold text-slate-100">My contribution:</span> {project.contribution}
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-sky-400 px-4 py-2 text-sm font-semibold text-slate-950 no-underline transition hover:bg-sky-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              {project.name === 'GitHub' ? 'View GitHub' : 'Open Project'}
            </a>
          ) : null}

          {project.sourceUrl ? (
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-slate-300/30 bg-slate-900/60 px-4 py-2 text-sm font-semibold text-slate-100 no-underline transition hover:border-sky-400/60 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              Source Code
            </a>
          ) : null}
        </div>
      </div>
    </article>
  )
}
