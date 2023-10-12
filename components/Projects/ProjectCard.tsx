import Image, { StaticImageData } from "next/image";
import styles from "./ProjectCard.module.scss";
interface ICard {
  title: string;
  description: string;
  imagePath: string;
  github: string;
  live: string;
}
const ProjectCard = ({
  title,
  description,
  imagePath,
  github,
  live,
}: ICard) => {
  return (
    <div className={styles.card}>
      <div className="image">
        <Image
          src={imagePath}
          alt={title}
          width={300}
          height={250}
          className={styles.img}
        />
      </div>
      <div className={styles.projectInfo}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.desc}> {description}</p>
        <div className="project-tech-tools">
          <a rel="noopener" href={live} target="_blank">
            Live
          </a>
          <a rel="noopener" href={github} target="_blank">
            Repo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
