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

export type SocialLink = {
  label: string
  href: string
}

export const profile = {
  name: 'Pablo Brito',
  fullName: 'Pablo Antonio Brito Elías',
  role: 'Junior Front-End Developer',
  location: 'San Salvador, El Salvador',
  intro:
    'Building thoughtful web experiences, one project at a time.',
  summary:
    'I am a junior front-end developer focused on creating clean, responsive, and human-centered web experiences. I combine practical experience in a tech company with a strong interest in user interfaces, web development, and continuous learning.',
  availability: 'Open to remote opportunities in El Salvador and international LATAM teams.',
  email: 'pablo.brito.dev@example.com',
  github: 'https://github.com/',
  linkedin: 'https://www.linkedin.com/',
  cvPath: '/Pablo_Brito_CV.pdf',
}

export const experience: ExperienceItem[] = [
  {
    role: 'Internship Trainee',
    company: 'Tecnologías Trust Me',
    period: '6 months',
    description: [
      'Supported digital communication and social media activities for the company.',
      'Collaborated with client outreach and business communication tasks.',
      'Gained practical exposure to a technology environment and web-related work.',
    ],
  },
  {
    role: 'Junior Front-End Developer',
    company: 'Tecnologías Trust Me',
    period: '3 months',
    description: [
      'Participated in front-end tasks for website development work.',
      'Contributed to user interfaces and web pages in a professional environment.',
      'Worked alongside a team in a real technology project context.',
    ],
  },
]

export const projects: Project[] = [
  {
    name: 'Smile Factory',
    category: 'Dental Clinic Website',
    shortDescription:
      'A professional dental clinic website focused on trust, clarity and service presentation.',
    longDescription:
      'This project was developed for a real client in the dental sector. The goal was to present the clinic and its services with a professional digital presence that could help potential patients understand the offer quickly and clearly.',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    demoUrl: 'https://smileeefactory.com/',
    sourceUrl: undefined,
    contribution:
      'Designed and implemented the front-end structure, content presentation, and user experience for a service-focused landing page.',
    status: 'Live',
    imageLabel: 'Smile Factory website preview',
  },
  {
    name: 'E-commerce Store',
    category: 'E-commerce Website',
    shortDescription:
      'A product-focused storefront designed to communicate value and support browsing decisions.',
    longDescription:
      'This project was created to showcase an online store interface with a clear shopping experience. The main focus was product presentation, navigation clarity, and a streamlined layout that supports digital commerce UX.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    demoUrl: undefined,
    sourceUrl: undefined,
    contribution:
      'Built the storefront structure, product presentation flow, and responsive interface with a strong emphasis on usability and visual consistency.',
    status: 'In progress',
    imageLabel: 'E-commerce store preview placeholder',
  },
  {
    name: 'Personal Portfolio',
    category: 'CV Website',
    shortDescription:
      'A personal portfolio designed to present professional experience, projects and contact information.',
    longDescription:
      'This portfolio is a more polished and complete version of my online presence. The goal is to present my profile, experience and work in a way that is easy to navigate and relevant for recruiters and teams looking for junior front-end talent.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    demoUrl: undefined,
    sourceUrl: undefined,
    contribution:
      'Designed and developed a personal digital presence focused on clarity, project presentation, and professional positioning.',
    status: 'In progress',
    imageLabel: 'Personal portfolio preview placeholder',
  },
]

export const techGroups = [
  {
    title: 'Front-end',
    items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS'],
  },
  {
    title: 'Back-end',
    items: ['Node.js', 'Express', 'REST APIs'],
  },
  {
    title: 'Databases',
    items: ['SQL', 'PostgreSQL', 'SQL Server'],
  },
  {
    title: 'Languages',
    items: ['Java', 'Python'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'Docker', 'Vercel', 'Visual Studio Code'],
  },
  {
    title: 'Currently learning',
    items: ['Advanced React patterns', 'UI/UX polish', 'AI-assisted development'],
  },
]

export const education: EducationItem[] = [
  {
    institution: 'Universidad Centroamericana José Simeón Cañas (UCA)',
    degree: 'Ingeniería Informática',
    detail: 'Second year university student',
  },
  {
    institution: 'Colegio Champagnat',
    degree: 'Bachillerato General',
    detail: 'Completed secondary education',
  },
  {
    institution: 'ITCA-FEPADE',
    degree: 'English course',
    detail: 'English training and conversation support',
  },
]

export const socials: SocialLink[] = [
  { label: 'GitHub', href: profile.github },
  { label: 'LinkedIn', href: profile.linkedin },
  { label: 'Email', href: `mailto:${profile.email}` },
]

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Tech Stack', href: '#tech-stack' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]
