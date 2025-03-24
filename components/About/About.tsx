import Image from 'next/image';
import styles from './About.module.scss';
import { TestId, about, tools } from './constants';

const About: React.FC = () => {
  return (
    <section id="about" className={styles.about} data-testid={TestId.ABOUT_ID}>
      <div className={styles.flexOne}>
        <h1>
          <span>About</span> Me
        </h1>
        <p data-testid={TestId.ABOUT_DESC}>{about}</p>
      </div>
      <div className={styles.flexTwo}>
        <h1>
          My <span>Tech</span> Stacks
        </h1>
        <div className={styles.tools} data-testid={TestId.TOOLS}>
          {tools.map((tool) => (
            <Image
              key={tool.id}
              src={tool.path}
              alt={tool.label}
              width={40}
              height={40}
              className={styles.tool}
              data-testid={TestId.TOOL}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
