import { profile } from '../data/content'
import { SectionHeading } from '../components/SectionHeading'
import { Footer } from '../components/Footer'

export function Contact() {
  return (
    <section id="contact" className="section-panel contact-panel">
      <div className="contact-content">
        <SectionHeading
          eyebrow="Contact"
          title="Have an opportunity or project in mind? I’d be happy to connect."
          description="I’m open to junior front-end roles, web development opportunities, and collaborations with teams that value thoughtful design and strong fundamentals."
        />

        <div className="flex flex-wrap gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center justify-center rounded-full bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 no-underline transition hover:bg-sky-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Email me
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-slate-300/30 bg-slate-900/60 px-5 py-3 text-sm font-semibold text-slate-100 no-underline transition hover:border-sky-400/60 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-slate-300/30 bg-slate-900/60 px-5 py-3 text-sm font-semibold text-slate-100 no-underline transition hover:border-sky-400/60 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            LinkedIn
          </a>
        </div>

        <div className="mt-6 space-y-2 text-base text-slate-200">
          <p className="m-0">
            <a href={`mailto:${profile.email}`} className="text-sky-300 no-underline hover:text-sky-200">
              {profile.email}
            </a>
          </p>
          <p className="m-0">{profile.location}</p>
        </div>
      </div>
      <Footer />
    </section>
  )
}
