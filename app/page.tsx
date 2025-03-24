import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Projects from '@/components/Projects/Projects';
import Contact from '@/components/Contact/Contact';

export default function Home() {
  return (
    <section data-testid="home_page">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </section>
  );
}
