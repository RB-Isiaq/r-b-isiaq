import Image from "next/image";
import styles from "./About.module.scss";
import { tools } from "./constants";

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <h1>
        About <span>Me</span>
      </h1>
      <p>
        I am a highly motivated and enthusiastic frontend developer with passion
        for creating visually appealing websites and web applications. With a
        growth mindset, keen attention to details, and problem solving skills, I
        bring a unique perspective to my work, always approaching projects with
        a focus on efficiency and simplicity, and ensuring good user experience.
        I have technical experience using a wide range of tech tools, including
        ReactJS, NextJs, and TailwindCss, and I am eager to continue developing
        my skills and delivering high-quality web applications.
      </p>
      <h1 className={styles.tech}>Technologies</h1>
      <div className={styles.tools}>
        {tools.map((tool) => (
          <Image
            key={tool.id}
            src={tool.path}
            alt={tool.label}
            width={40}
            height={40}
            className={styles.tool}
          />
        ))}
      </div>
    </section>
  );
};

export default About;
