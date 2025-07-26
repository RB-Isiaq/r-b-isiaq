import Image from 'next/image';
import Profile from '@/public/myself-bg.png';
import { content, TestId } from './constants';
import Link from 'next/link';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section id="home" className={styles.hero} data-testid={TestId.HERO_ID}>
      <div className={styles.details}>
        <div className={styles.greetings}>
          <span className={styles.status} />
          Open to new opportunities 🧑‍💻
        </div>

        <div>
          <h1 className={styles.name} data-testid={TestId.HERO_NAME}>
            Welcome! <span>I&apos;m Isiaq</span>{' '}
            <span className={styles.wavingHand}>👋</span>
          </h1>
        </div>

        <div className={styles.profession}>
          <h3 className={styles.label}>Tech I love working with</h3>
          <div className={styles.tags}>
            {content.stacks.map((tech, index) => (
              <span
                key={tech}
                className={styles.tag}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.cta}>
          <Link href="/#projects" className={styles.primary}>
            View My Work
          </Link>
          <Link href="/#contact" className={styles.secondary}>
            <span>Let&apos;s Connect</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>

      <div className={styles.frame}>
        <div className={styles.backdrop} />
        <Image
          src={Profile || '/placeholder.svg'}
          alt="Isiaq"
          className={styles.image}
          width={400}
          height={500}
          data-testid={TestId.HERO_IMG}
          priority
        />

        <div className={styles.floating}>
          <div className={styles.snippet}>
            <div className={styles.header}>
              <div className={styles.dots}>
                {content.stacks.slice(0, 3).map((tech) => (
                  <span key={tech} />
                ))}
              </div>
            </div>

            <div className={styles.content}>
              <span>{'const developer = {'}</span>
              <span className={styles.line}>{'name: "Isiaq",'}</span>
              <span className={styles.line}>
                {'title: "Frontend Software Engineer"'}
              </span>
              <span className={styles.line}>
                {'skills: ["React", "TypeScript", "Next.js"]'}
              </span>
              <span className={styles.line}>
                {'passion: "Building & Crafting Intuitive UI/UX"'}
              </span>
              <span>{'};'}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
