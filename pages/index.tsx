import Projects from 'components/Projects';
import Contact from 'components/Contact';
import Skills from '@/components/Skills';
import Intro from '@/components/Intro';

export default function Home() {
  return (
    <div className="pt-20">
      <Intro />
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
