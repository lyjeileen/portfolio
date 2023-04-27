import Image from 'next/image';
import Projects from 'components/Projects';
import Contact from 'components/Contact';

export default function Home() {
  return (
    <>
      <div className="justify-center">
        <div className="flex justify-center">
          <Image src="/flower.svg" alt="flower" width={40} height={40} />
          <h1 className="text-grassgreen text-3xl font-bold mx-4 text-center md:text-5xl lg:text-6xl ">
            Hi, I&apos;m Eileen Li.
          </h1>
          <Image src="/flower.svg" alt="flower" width={40} height={40} />
        </div>
        <p className="text-softred mt-4 text-2xl">
          Welcome to my portfolio website! I&apos;m excited to showcase my
          projects and skills to potential employers. Take a look around and
          feel free to contact me with any questions or opportunities.
        </p>

        <Projects />
        {/* <h1 className="text-grassgreen text-4xl text-center font-bold mx-4">
          About Me
        </h1>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M176 88v40h160V88c0-4.4-3.6-8-8-8H184c-4.4 0-8 3.6-8 8zm-48 40V88c0-30.9 25.1-56 56-56h144c30.9 0 56 25.1 56 56v40h28.1c12.7 0 24.9 5.1 33.9 14.1l51.9 51.9c9 9 14.1 21.2 14.1 33.9V304H384v-16c0-17.7-14.3-32-32-32s-32 14.3-32 32v16H192v-16c0-17.7-14.3-32-32-32s-32 14.3-32 32v16H0v-76.1C0 215.2 5.1 203 14.1 194L66 142.1c9-9 21.2-14.1 33.9-14.1H128zM0 416v-80h128v16c0 17.7 14.3 32 32 32s32-14.3 32-32v-16h128v16c0 17.7 14.3 32 32 32s32-14.3 32-32v-16h128v80c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64z"></path>
    </svg>
        <h1 className="text-grassgreen text-4xl text-center font-bold mx-4">
          Skills
        </h1>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path d="M96 0C43 0 0 43 0 96v320c0 53 43 96 96 96h320c17.7 0 32-14.3 32-32s-14.3-32-32-32v-64c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H96zm0 384h256v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16h192c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48h192c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"></path>
    </svg>
        <h1 className="text-grassgreen text-4xl text-center font-bold mx-4">
          Education
        </h1> */}
        <Contact />
      </div>
    </>
  );
}
