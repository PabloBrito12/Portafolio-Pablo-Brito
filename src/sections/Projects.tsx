import { projects } from '../data/content'
import { ProjectCard } from '../components/ProjectCard'
import { SectionHeading } from '../components/SectionHeading'

export function Projects() {
  return (
    <section id="projects" style={{ padding: '4rem 1.25rem', maxWidth: '1180px', margin: '0 auto' }}>
      <SectionHeading
        eyebrow="Featured projects"
        title="Selected work with real-world context."
        description="These web projects reflect practical experience, visual thinking, and a focus on user clarity."
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  )
}
