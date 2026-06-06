import styles from './About.module.scss';
import { TestId, about, stackGroups } from './constants';

const About: React.FC = () => {
  return (
    <section id="about" className={styles.about} data-testid={TestId.ABOUT_ID}>
      <div className={styles.flexOne}>
        <h1>
          <span>About</span> Me
        </h1>
        <div data-testid={TestId.ABOUT_DESC}>
          {about.split('\n').map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
      </div>
      <div className={styles.flexTwo}>
        <h1>
          My <span>Tech</span> Stack
        </h1>
        <div className={styles.groups} data-testid={TestId.TOOLS}>
          {stackGroups.map((group) => (
            <div key={group.id} className={styles.group}>
              <h3 className={styles.groupLabel}>{group.label}</h3>
              <div className={styles.pills}>
                {group.items.map((item) => (
                  <span
                    key={item}
                    className={styles.pill}
                    data-testid={TestId.TOOL}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
