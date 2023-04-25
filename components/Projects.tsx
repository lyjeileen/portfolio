import Project from 'components/Project';

import { ProjectItem } from './Project';

const projects = [
  {
    name: 'Kawaii Moment',
    image: '/images/kawaii.png',
    tools: [
      'NextJS',
      'React',
      'Tailwindcss',
      'PostgreSQL',
      'Prisma',
      'next-auth',
      'react-player',
      'aws-sdk',
      'headless UI',
    ],
    description:
      'A short video app with the functions of uploading videos/avatars to AWS S3, playing videos, subscription.',
  },
  {
    name: 'Twitter Clone',
    image: '/images/twitter.png',
    tools: [
      'NextJS',
      'React',
      'Tailwindcss',
      'PostgreSQL',
      'Prisma',
      'next-auth',
      'Material-UI',
    ],
    description:
      'A twitter clone with basic functions like login, send tweets, comment, view tweets.',
  },
  {
    name: 'Doable',
    image: '/images/doable.png',
    tools: [
      'NodeJS',
      'React',
      'Bootstrap',
      'PostgreSQL',
      'Express',
      'Beautiful Drag and Drop',
      'Framer Motion',
      'WebSockets',
    ],
    description:
      'A project management app that allows users to manage their projects and tasks easily.',
  },
  {
    name: 'Jungle',
    image: '/images/jungle.png',
    tools: [
      'Ruby',
      'Rails',
      'Stripe API',
      'PostgreSQL',
      'Bootstrap',
      'Cypress',
    ],
    description:
      'A mini e-commerce application built with Ruby on Rails that allows visitors to view, purchase, and review products.',
  },
];

export default function Projects() {
  const projectList = projects.map((project) => (
    <Project project={project} key={project.name} />
  ));
  return <div>{projectList}</div>;
}
