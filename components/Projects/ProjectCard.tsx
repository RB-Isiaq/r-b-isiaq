import Image from 'next/image';
import styles from './ProjectCard.module.scss';
import { IProject } from '@/interfaces';

const ProjectCard = ({
  title,
  description,
  imgPath,
  github,
  live,
  dataType,
  type,
  stack,
  featured,
  repos,
  impact,
}: IProject) => {
  return (
    <div
      className={`${styles.card} ${featured ? styles.featured : ''}`}
      data-testid={dataType}
    >
      <div className={styles.image}>
        <div className={styles.badge}>
          {featured ? 'Featured' : type === 'client' ? 'Client' : 'Personal'}
        </div>
        <Image
          src={imgPath}
          alt={title}
          width={featured ? 640 : 300}
          height={featured ? 360 : 220}
          className={styles.img}
        />
      </div>
      <div className={styles.projectInfo}>
        <h1 className={styles.title}>{title}</h1>
        {impact && (
          <p className={styles.impact}>
            <span className={styles.impactDot} />
            {impact}
          </p>
        )}
        <p className={styles.desc}> {description}</p>
        {stack && stack.length > 0 && (
          <div className={styles.stack}>
            {stack.map((tech) => (
              <span key={tech} className={styles.tech}>
                {tech}
              </span>
            ))}
          </div>
        )}
        <div className={styles.links}>
          <a rel="noopener" href={live} target="_blank">
            Live
          </a>
          {repos
            ? repos.map((repo) => (
                <a
                  key={repo.label}
                  rel="noopener"
                  href={repo.href}
                  target="_blank"
                >
                  {repo.label}
                </a>
              ))
            : github && (
                <a rel="noopener" href={github} target="_blank">
                  Repo
                </a>
              )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
