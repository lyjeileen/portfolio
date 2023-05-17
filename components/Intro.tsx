import Image from 'next/image';

export default function Intro() {
  return (
    <div className="flex flex-col text-center md:m-10">
      <div className="flex justify-center">
        <Image src="/flower.svg" alt="flower" width={40} height={40} />
        <h1 className="text-grassgreen text-3xl font-bold mx-4 text-center md:text-5xl lg:text-6xl ">
          Hi, I&apos;m Eileen Li.
        </h1>
        <Image src="/flower.svg" alt="flower" width={40} height={40} />
      </div>
      <div className="text-softred my-8">
        <p className="text-left text-md text-lg md:text-xl p-2 min-[1300px]:hidden">
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
            Take a look around and feel free to contact me with any questions or
            opportunities.
          </p>
        </div>
      </div>
    </div>
  );
}
