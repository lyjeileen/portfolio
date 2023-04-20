import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';

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
        <p className="text-softred">
          Welcome to my portfolio website! I&apos;m a recent bootcamp graduate
          with a passion for software development. I&apos;m excited to showcase
          my projects and skills to potential employers. Take a look around and
          feel free to contact me with any questions or opportunities.
        </p>
        <h1 className="text-grassgreen text-4xl text-center font-bold mx-4">
          Projects
        </h1>
        <h1 className="text-grassgreen text-4xl text-center font-bold mx-4">
          About Me
        </h1>
        <h1 className="text-grassgreen text-4xl text-center font-bold mx-4">
          Skills
        </h1>
        <h1 className="text-grassgreen text-4xl text-center font-bold mx-4">
          Education
        </h1>
        <h1 className="text-grassgreen text-4xl text-center font-bold mx-4">
          Contact
        </h1>
      </div>
    </>
  );
}
