import Image from 'next/image';
import Projects from 'components/Projects';
import Contact from 'components/Contact';
import Skills from '@/components/Skills';

export default function Home() {
  return (
    <div className="pt-20">
      <div className="flex flex-col text-center md:m-10">
        <div className="flex justify-center">
          <Image src="/flower.svg" alt="flower" width={40} height={40} />
          <h1 className="text-grassgreen text-3xl font-bold mx-4 text-center md:text-5xl lg:text-6xl ">
            Hi, I&apos;m Eileen Li.
          </h1>
          <Image src="/flower.svg" alt="flower" width={40} height={40} />
        </div>
        <div className="text-softred my-8">
          <p className="text-center text-md md:text-xl p-2 min-[1300px]:hidden">
            Welcome to my portfolio website! I&apos;m excited to showcase my
            projects and skills to potential employers. Take a look around and
            feel free to contact me with any questions or opportunities.
          </p>
          <div className="text-center text-2xl text-md hidden min-[1300px]:block">
            <p>Welcome to my portfolio website!</p>
            <p>
              I&apos;m excited to showcase my projects and skills to potential
              employers.
            </p>
            <p>
              Take a look around and feel free to contact me with any questions
              or opportunities.
            </p>
          </div>
        </div>
      </div>
      <Projects />
      <Skills />
      {/* <h1 className="text-grassgreen text-4xl text-center font-bold mx-4">
          About Me
        </h1>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path d="M96 0C43 0 0 43 0 96v320c0 53 43 96 96 96h320c17.7 0 32-14.3 32-32s-14.3-32-32-32v-64c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H96zm0 384h256v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16h192c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48h192c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"></path>
    </svg>
        <h1 className="text-grassgreen text-4xl text-center font-bold mx-4">
          Education
        </h1> */}
      <Contact />
    </div>
  );
}
