import styles from './Experience.module.scss';
import { experience, TestId } from './constants';

const Experience = () => {
  return (
    <section
      id="experience"
      className={styles.experience}
      data-testid={TestId.EXPERIENCE_ID}
    >
      <h1 className={styles.heading}>
        Where I&apos;ve <span>Worked</span>
      </h1>

      <div className={styles.timeline}>
        {experience.map((job) => (
          <article
            key={job.id}
            className={styles.item}
            data-testid={TestId.EXPERIENCE_ITEM}
          >
            <div className={styles.marker}>
              <span className={styles.dot} />
            </div>

            <div className={styles.body}>
              <div className={styles.topline}>
                <h2 className={styles.role}>
                  {job.role} <span className={styles.at}>·</span>{' '}
                  <span className={styles.company}>{job.company}</span>
                </h2>
                {job.current && <span className={styles.badge}>Current</span>}
              </div>

              <div className={styles.meta}>
                <span>{job.period}</span>
                <span className={styles.divider}>—</span>
                <span>{job.location}</span>
              </div>

              <ul className={styles.highlights}>
                {job.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>

              {job.note && <p className={styles.note}>🏆 {job.note}</p>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
