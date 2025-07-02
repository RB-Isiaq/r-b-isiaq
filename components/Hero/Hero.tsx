'use client';
/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import styles from './Hero.module.scss';
import Profile from '@/public/myself-bg.png';
import { TestId } from './constants';
import dynamic from 'next/dynamic';

const TypewriterComponent = dynamic(() => import('typewriter-effect'), {
  ssr: false,
});

const Hero = () => {
  return (
    <section id="home" className={styles.hero} data-testid={TestId.HERO_ID}>
      <div className={styles.details}>
        <h1 className={styles.name} data-testid={TestId.HERO_NAME}>
          Hi There <span className={styles.wavingHand}>👋</span>,{' '}
          <span>I'm A</span>
        </h1>
        <div className={styles.profession}>
          <TypewriterComponent
            component="h1"
            options={{
              autoStart: true,
              loop: true,
              strings: ['Frontend Developer', 'Software Engineer'],
              delay: 150,
              skipAddStyles: true,
              cursor: '🖋️',
              deleteSpeed: 100,
              cursorClassName: 'cursor',
            }}
          />
          <h2>ReactJS | NextJS | NodeJS | Typescript</h2>
        </div>
      </div>
      <div className={styles.image}>
        <Image
          src={Profile || '/placeholder.svg'}
          alt="Isiaq"
          className={styles.img}
          width={432}
          height={577}
          data-testid={TestId.HERO_IMG}
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
