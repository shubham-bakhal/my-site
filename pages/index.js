import Award from '../components/Award';
import Experince from '../components/Experince';
import GetInTouch from '../components/GetInTouch';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Writing from '../components/Writing';
import Footer from '../components/Footer';

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
      <GetInTouch />
      <Footer />
    </div>
  );
}
