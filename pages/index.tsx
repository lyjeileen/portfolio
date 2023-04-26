import Image from 'next/image';
import Projects from 'components/Projects';
import Contact from 'components/Contact';

export default function Home() {
  return (
    <>
      <div className="justify-center">
        <div className="flex justify-center">
          <Image src="/flower.svg" alt="flower" width={40} height={40} />
          <h1 className="text-grassgreen text-6xl font-bold mx-4">
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
        <h1 className="text-grassgreen text-4xl text-center font-bold mx-4">
          Skills
        </h1>
        <h1 className="text-grassgreen text-4xl text-center font-bold mx-4">
          Education
        </h1> */}
        <Contact />
      </div>
    </>
  );
}
