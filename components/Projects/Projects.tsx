'use client';
import { useState } from 'react';
import ProjectCard from './ProjectCard';
import { TestId, projectTimeline, types } from './constants';
import styles from './Projects.module.scss';

const Projects = () => {
  const [filter, setFilter] = useState<'all' | 'client' | 'personal'>('all');

  const filteredProjects = projectTimeline.filter((project) => {
    if (filter === 'all') return true;
    return project.type === filter;
  });

  return (
    <section
      id="projects"
      className={styles.projects}
      data-testid={TestId.PROJECTS_ID}
    >
      <h1 className={styles.heading}>
        <span>My </span> Projects
      </h1>

      <div className={styles.tabs}>
        {types.map((type) => (
          <button
            key={type}
            className={`${styles.tab} ${filter === type ? styles.active : ''}`}
            onClick={() => setFilter(type as 'all' | 'client' | 'personal')}
          >
            {`${type} (${
              projectTimeline.filter((t) =>
                type === 'all' ? true : t.type === type,
              ).length
            })`}
          </button>
        ))}
      </div>

      <div
        className={styles.container}
        data-testid={TestId.PROJECTS_CONTAINER_ID}
      >
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            imgPath={project.imgPath}
            title={project.title}
            description={project.description}
            github={project.github}
            live={project.live}
            dataType={TestId.PROJECT_ID}
            type={project.type}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
