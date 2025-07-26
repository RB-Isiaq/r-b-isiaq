import Hero from '@/components/Hero/Hero';
import Roles from '@/components/Roles';
import About from '@/components/About/About';
import Projects from '@/components/Projects/Projects';
import Contact from '@/components/Contact/Contact';

export default function Home() {
  return (
    <section data-testid="home_page">
      <Hero />
      <Roles />
      <About />
      <Projects />
      <Contact />
    </section>
  );
}
