import Award from '../components/Award';
import Experince from '../components/Experince';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Writing from '../components/Writing';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Experince />
      <Projects />
      <Award />
      <Writing />
      <Skills />
    </div>
  );
}
