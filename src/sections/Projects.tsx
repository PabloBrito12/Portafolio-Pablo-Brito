import { projects } from '../data/content'
import { ProjectCard } from '../components/ProjectCard'
import { SectionHeading } from '../components/SectionHeading'

export function Projects() {
  return (
    <section id="projects" className="section-panel">
      <SectionHeading
        eyebrow="Featured projects"
        title="Selected work with real-world context."
        description="I focus on projects that are useful for real users, clear in communication, and polished enough to feel credible in professional settings."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  )
}
