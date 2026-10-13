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
  role: 'Junior Front-End Developer | Information Technology Engineering Student',
  location: 'San Salvador, El Salvador',
  intro: 'Building thoughtful, responsive web experiences.',
  summary:
    'I am a Junior Front-End Developer and Information Technology Engineering student based in El Salvador. I work on responsive interfaces, real client projects, and digital experiences that balance clarity, usability, and visual polish.',
  availability:
    'Open to junior front-end roles, internships, and remote opportunities.',
  email: 'pablobrito.elias@gmail.com',
  github: 'https://github.com/PabloBrito12',
  linkedin: 'https://www.linkedin.com/in/pablo-brito-143b28208/',
  portfolio: 'https://portafolio-pablo-brito.vercel.app/',
  cvPath: '/Pablo_Brito_CV_EN.pdf',
  cvDownloads: [
    {
      label: 'English CV',
      href: '/Pablo_Brito_CV_EN.pdf',
      fileName: 'Pablo_Brito_Resume_EN.pdf',
      disabled: false,
    },
    {
      label: 'Spanish CV',
      href: '/Pablo_Brito_CV_ES.pdf',
      fileName: 'Pablo_Brito_CV_ES.pdf',
      disabled: false,
    },
  ],
}

export const experience: ExperienceItem[] = [
  {
    role: 'Junior Front-End Developer',
    company: 'Tecnologías Trust Me',
    period: 'February 2026 – April 2026',
    description: [
      'Contributed to front-end development for websites and user-oriented interfaces.',
      'Supported the implementation and refinement of web pages based on project requirements.',
      'Worked with a practical, client-focused approach to improve usability and visual quality.',
    ],
  },
  {
    role: 'Internship Trainee',
    company: 'Tecnologías Trust Me',
    period: 'August 2025 – January 2026',
    description: [
      'Supported digital communication and social media activities for the company.',
      'Assisted with initial outreach to potential clients and tasks related to web projects.',
      'Gained hands-on experience in a technology environment while supporting real business and digital work.',
    ],
  },
]

export const projects: Project[] = [
  {
    name: 'Smile Factory',
    category: 'Dental Clinic Website',
    shortDescription:
      'A professional dental clinic website designed to build trust and make services easy to understand.',
    longDescription:
      'This project was developed for a real dental clinic client. The goal was to present services, trust signals, and key patient information in a polished and accessible format for prospective clients.',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    demoUrl: 'https://smileeefactory.com/',
    contribution:
      'I developed the client-facing front end, including the structure, content flow, and user experience for a professional clinic landing page.',
    status: 'Live',
    imageLabel: 'Smile Factory',
  },
  {
    name: 'Melissa Velásquez CV Website',
    category: 'Professional Profile Website',
    shortDescription:
      'A clean personal website created to present a professional profile with clarity and polish.',
    longDescription:
      'This project was built for a real client as a professional profile website. The emphasis was on presenting experience, strengths, and contact information in a way that feels credible and easy to navigate.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    demoUrl: 'https://melissavelasquezweb.vercel.app/',
    contribution:
      'I developed the project for the client, creating the interface and presentation structure for a confident and professional online profile.',
    status: 'Live',
    imageLabel: 'Melissa Velásquez',
  },
  {
    name: 'Clothing E-commerce Website',
    category: 'E-commerce Front-End Contribution',
    shortDescription:
      'An online store interface where I contributed to front-end development during my internship period.',
    longDescription:
      'This e-commerce project was developed as part of a larger application, and my contribution focused on the front-end experience. I supported product presentation, layout consistency, and interface usability while working within a larger team environment.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    demoUrl: 'https://tr.ee/e_Bcw7gXM',
    contribution:
      'I contributed to the front end by helping shape the store interface and user flow, without claiming full ownership of the whole application.',
    status: 'Live',
    imageLabel: 'E-commerce UI',
  },
  {
    name: 'GitHub',
    category: 'Code & Repositories',
    shortDescription:
      'A place to explore my code, experiments, and ongoing work in front-end development and web projects.',
    longDescription:
      'My GitHub profile reflects the projects I build, iterate on, and improve over time. It is a practical record of my learning process, implementation work, and technical progress as a developer.',
    technologies: ['GitHub', 'React', 'JavaScript'],
    demoUrl: 'https://github.com/PabloBrito12',
    contribution:
      'I use GitHub to share code, document my work, and continue improving my front-end development practice through real projects and iterations.',
    status: 'Live',
    imageLabel: 'GitHub Profile',
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
    title: 'Tools & additional technologies',
    items: ['Git', 'GitHub', 'Docker', 'Vercel', 'Visual Studio Code', 'Java', 'JavaFX'],
  },
  {
    title: 'Additional experience',
    items: ['Responsive web design', 'AI-assisted development', 'Python'],
  },
]

export const education: EducationItem[] = [
  {
    institution: 'Universidad Centroamericana José Simeón Cañas (UCA)',
    degree: 'Information Technology Engineering',
    detail: 'Expected graduation: 2030',
  },
  {
    institution: 'Colegio Champagnat',
    degree: 'General High School Diploma',
    detail: 'Completed in 2024',
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
  { label: 'Skills', href: '#tech-stack' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]
