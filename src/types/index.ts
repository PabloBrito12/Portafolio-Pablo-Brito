export type ThemeMode = 'light' | 'dark'

export type SocialLink = {
  label: string
  href: string
}

export type Project = {
  name: string
  category: string
  shortDescription: string
  longDescription: string
  technologies: string[]
  demoUrl?: string
  sourceUrl?: string
  contribution: string
  status: 'Live' | 'In progress' | 'Prototype'
  imageLabel: string
}

export type ExperienceItem = {
  role: string
  company: string
  period: string
  description: string[]
}

export type EducationItem = {
  institution: string
  degree: string
  detail: string
}

export type SkillGroup = {
  title: string
  items: string[]
}
