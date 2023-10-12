import styles from "./Projects.module.scss";
import ProjectCard from "./ProjectCard";
import { projectTimeline } from "./constants";

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <h1 className={styles.heading}>
        <span>My </span> Projects
      </h1>

      <div className={styles.container}>
        {projectTimeline.map((project) => (
          <ProjectCard
            key={project.id}
            imagePath={project.img}
            title={project.title}
            description={project.description}
            github={project.description}
            live={project.live}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
