import Award from '../components/Award';
import Experince from '../components/Experince';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Experince />
      <Projects />
      <Award />
    </div>
  );
}
