import type { Project } from '../data/content'
import { Button } from './Button'

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 shadow-lg shadow-slate-950/20 transition-transform duration-200 hover:-translate-y-1 hover:border-sky-400/60">
      <div className="flex h-56 items-center justify-center border-b border-slate-800 bg-gradient-to-br from-sky-500/10 via-violet-500/10 to-transparent px-4 text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-100">
        {project.imageLabel}
      </div>

      <div className="p-6">
        <p className="mb-3 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-sky-400">
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

        <div className="mt-6 flex flex-wrap gap-3">
          {project.demoUrl ? (
            <a href={project.demoUrl} target="_blank" rel="noreferrer" className="no-underline">
              <Button variant="primary">Live Demo</Button>
            </a>
          ) : null}
          {project.sourceUrl ? (
            <a href={project.sourceUrl} target="_blank" rel="noreferrer" className="no-underline">
              <Button variant="secondary">Source Code</Button>
            </a>
          ) : null}
        </div>
      </div>
    </article>
  )
}
