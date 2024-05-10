import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  CSharp,
  bootstrap,
  java,
  python,
  sql,
  cccwebsite,
  nthad,
  optogrow,
  upwork,
  avalon,
  BiometricLoginApp,
  coming
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Problem-Solving',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Web Developer',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'C#',
    icon: CSharp,
  },
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'Java',
    icon: java,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'bootstrap',
    icon: bootstrap,
  },
  {
    name: 'SQL',
    icon: sql,
  },
  {
    name: 'PostgresSql',
    icon: postgresql,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'git',
    icon: git,
  },
];

const experiences = [
  {
    title: 'Web Developer',
    company_name: 'Upwork',
    icon: upwork,
    iconBg: '#333333',
    date: 'NOV 2021 - NOV 2022',
  },
  {
    title: 'Lead Intern',
    company_name: 'Optogrow',
    icon: optogrow,
    iconBg: '#333333',
    date: 'Jan 2024 - April 2024',
  },
 
];

const projects = [
  {
    id: 'project-1',
    name: 'CCC website',
    description: 'A Informational websites for the Climate Change Commission in the Philippines.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: cccwebsite,
    repo: 'https://github.com/MarcShayne-npc/CCC_website',
    
  },
  {
    id: 'project-2',
    name: 'Nth_AD Prototype App',
    description:
      'A management web app focused for on entertainment business.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: nthad,
    repo: 'https://github.com/MarcShayne-npc/nthad_prototype?tab=readme-ov-file',
    
  },
  {
    id: 'project-3',
    name: 'Avalon',
    description: 'A platform game made with GoDot Engine',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: avalon,
    repo: 'https://github.com/MarcShayne-npc/Avalon',
   
  },
  {
    id: 'project-4',
    name: 'Biometric Login App',
    description: `A Check-in/out tracker using biometric scanning`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: BiometricLoginApp,
    repo: 'https://github.com/MarcShayne-npc/BiometricLoginApp',
  },
  {
    id: 'project-5',
    name: 'Coming soon...',
    description:
      '',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: coming,
    repo: '',
    
  },
];

export { services, technologies, experiences, projects };
