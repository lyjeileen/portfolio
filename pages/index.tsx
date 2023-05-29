import Projects from 'components/Projects';
import Contact from 'components/Contact';
import Skills from '@/components/Skills';
import Intro from '@/components/Intro';
import AboutMe from '@/components/About Me';

export default function Home() {
  return (
    <div className="pt-20">
      <Intro />
      <Projects />
      <Skills />
      <AboutMe />
      <Contact />
    </div>
  );
}
