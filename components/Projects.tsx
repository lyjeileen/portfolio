import Project from 'components/Project';

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
  return (
    <>
      <div className="flex justify-center mt-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          className="w-10 h-10 fill-softred"
        >
          <path d="M297.2 248.9c14.4-20.6 22.8-45.7 22.8-72.9 0-70.7-57.3-128-128-128S64 105.3 64 176c0 27.2 8.4 52.3 22.8 72.9 3.7 5.3 8.1 11.3 12.8 17.7 12.9 17.7 28.3 38.9 39.8 59.8 10.4 19 15.7 38.8 18.3 57.5H109c-2.2-12-5.9-23.7-11.8-34.5-9.9-18-22.2-34.9-34.5-51.8-5.2-7.1-10.4-14.2-15.4-21.4C27.6 247.9 16 213.3 16 176 16 78.8 94.8 0 192 0s176 78.8 176 176c0 37.3-11.6 71.9-31.4 100.3-5 7.2-10.2 14.3-15.4 21.4-12.3 16.8-24.6 33.7-34.5 51.8-5.9 10.8-9.6 22.5-11.8 34.5h-48.5c2.6-18.7 7.9-38.6 18.3-57.5 11.5-20.9 26.9-42.1 39.8-59.8 4.7-6.4 9-12.4 12.7-17.7zM192 128c-26.5 0-48 21.5-48 48 0 8.8-7.2 16-16 16s-16-7.2-16-16c0-44.2 35.8-80 80-80 8.8 0 16 7.2 16 16s-7.2 16-16 16zm0 384c-44.2 0-80-35.8-80-80v-16h160v16c0 44.2-35.8 80-80 80z"></path>
        </svg>
        <h1 className="text-grassgreen text-4xl text-center font-bold mx-4">
          Projects
        </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          className="w-10 h-10 fill-softred"
        >
          <path d="M297.2 248.9c14.4-20.6 22.8-45.7 22.8-72.9 0-70.7-57.3-128-128-128S64 105.3 64 176c0 27.2 8.4 52.3 22.8 72.9 3.7 5.3 8.1 11.3 12.8 17.7 12.9 17.7 28.3 38.9 39.8 59.8 10.4 19 15.7 38.8 18.3 57.5H109c-2.2-12-5.9-23.7-11.8-34.5-9.9-18-22.2-34.9-34.5-51.8-5.2-7.1-10.4-14.2-15.4-21.4C27.6 247.9 16 213.3 16 176 16 78.8 94.8 0 192 0s176 78.8 176 176c0 37.3-11.6 71.9-31.4 100.3-5 7.2-10.2 14.3-15.4 21.4-12.3 16.8-24.6 33.7-34.5 51.8-5.9 10.8-9.6 22.5-11.8 34.5h-48.5c2.6-18.7 7.9-38.6 18.3-57.5 11.5-20.9 26.9-42.1 39.8-59.8 4.7-6.4 9-12.4 12.7-17.7zM192 128c-26.5 0-48 21.5-48 48 0 8.8-7.2 16-16 16s-16-7.2-16-16c0-44.2 35.8-80 80-80 8.8 0 16 7.2 16 16s-7.2 16-16 16zm0 384c-44.2 0-80-35.8-80-80v-16h160v16c0 44.2-35.8 80-80 80z"></path>
        </svg>
      </div>
      <div className="mb-4">{projectList}</div>
    </>
  );
}
