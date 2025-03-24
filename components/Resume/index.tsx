/* eslint-disable react/no-unescaped-entities */
import { Mail, Phone, Github, Linkedin, File } from 'lucide-react';
import './Resume.scss';
import { TestId } from './constants';

export default function Resume() {
  return (
    <div className="resume-container" data-testid={TestId.RESUME_CONTAINER}>
      <div className="resume-card">
        <header className="resume-header">
          <div className="header-content">
            <div>
              <h1 className="name">RIDWAN BUKOLA ISIAQ</h1>
              <h2 className="title">Front End Software Engineer</h2>
            </div>
            <div className="contact-info">
              <div className="contact-item">
                <Phone />
                <span>+2349030984108</span>
              </div>
              <div className="contact-item">
                <Mail />
                <span>isiaqridwanbukola1999@gmail.com</span>
              </div>
              <div className="contact-item">
                <Github />
                <a href="https://github.com/rb-isiaq">github.com/rb-isiaq</a>
              </div>
              <div className="contact-item">
                <Linkedin />
                <a href="https://linkedin.com/in/rb-isiaq">
                  linkedin.com/in/rb-isiaq
                </a>
              </div>
              <div className="contact-item">
                <File />
                <a
                  data-testid={TestId.RESUME}
                  rel="noopener"
                  href="/Resume.pdf"
                  download="Ridwan's Resume"
                >
                  Résumé
                </a>
              </div>
            </div>
          </div>
        </header>

        <div className="separator"></div>

        <section className="section">
          <h3 className="section-title">PROFESSIONAL SUMMARY</h3>
          <p className="section-content">
            Driven and creative Frontend Engineer with expertise in ReactJS,
            NextJS, TypeScript, and Tailwind CSS. Specializes in transforming
            complex design visions into high-performing, responsive web
            applications with intuitive UI and seamless UX. Proven track record
            of delivering visually stunning and technically robust solutions
            across multiple industries. Collaborative team player with strong
            problem-solving abilities and attention to detail.
          </p>
        </section>

        <section className="section">
          <h3 className="section-title">PROFESSIONAL EXPERIENCE</h3>

          <div className="experience-item">
            <div className="experience-header">
              <div>
                <h4 className="job-title">Frontend Engineer</h4>
                <h5 className="company">TIMA: Influencer Marketing Agency</h5>
              </div>
              <div className="job-meta">
                <div>09/2024 - Present</div>
                <div>Lagos, Nigeria</div>
              </div>
            </div>
            <ul className="job-duties">
              <li>
                Implement web applications by converting UI designs into
                reusable components
              </li>
              <li>
                Collaborate cross-functionally with project managers, product
                managers, designers, and backend developers
              </li>
            </ul>
          </div>

          <div className="experience-item">
            <div className="experience-header">
              <div>
                <h4 className="job-title">Frontend Developer</h4>
                <h5 className="company">Analytics Intelligence</h5>
              </div>
              <div className="job-meta">
                <div>12/2023 - Present</div>
                <div>Lagos, Nigeria</div>
              </div>
            </div>
            <ul className="job-duties">
              <li>
                Developed integrated chatbots across company websites to enhance
                product discovery and user interaction
              </li>
              <li>
                Contributed to implementing a certificate validation system for
                AI Academy students
              </li>
              <li>
                Led the revamp and redevelopment of the global company website,
                improving UX and performance
              </li>
              <li>
                Built reusable UI components ensuring maintainability and
                consistency in existing codebases
              </li>
            </ul>
          </div>

          <div className="experience-item">
            <div className="experience-header">
              <div>
                <h4 className="job-title">Frontend Engineer (Volunteer)</h4>
                <h5 className="company">Edustipend</h5>
              </div>
              <div className="job-meta">
                <div>06/2023 - 09/2024</div>
                <div>California, United States</div>
              </div>
            </div>
            <ul className="job-duties">
              <li>
                Developed donation and referral leaderboard providing real-time
                campaign progress updates
              </li>
              <li>
                Implemented user dashboard enabling application status
                monitoring
              </li>
              <li>
                Collaborated on website redesign and revamp to enhance overall
                user experience
              </li>
            </ul>
          </div>
        </section>

        <div className="skills-grid">
          <section className="skill-section">
            <h3 className="skill-title">TECHNICAL SKILLS</h3>
            <div className="skill-tags">
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">ReactJS</span>
              <span className="skill-tag">NextJS</span>
              <span className="skill-tag">TypeScript</span>
              <span className="skill-tag">TailwindCSS</span>
              <span className="skill-tag">NodeJS</span>
              <span className="skill-tag">ExpressJS</span>
              <span className="skill-tag">NestJS</span>
              <span className="skill-tag">MongoDB</span>
              <span className="skill-tag">PostgreSQL</span>
            </div>

            <h4 className="skill-subtitle">Tools & Platforms</h4>
            <div className="skill-tags">
              <span className="skill-tag">Git</span>
              <span className="skill-tag">GitHub</span>
              <span className="skill-tag">Jira</span>
              <span className="skill-tag">Figma</span>
              <span className="skill-tag">Postman</span>
            </div>
          </section>

          <section className="skill-section">
            <h3 className="skill-title">EDUCATION</h3>
            <div className="education-item">
              <h4 className="degree">B.Sc. Biochemistry</h4>
              <div className="school">University of Ilorin</div>
              <div className="location">Ilorin, Nigeria</div>
              <div className="dates">2016 - 2021</div>
            </div>

            <div>
              <h4 className="skill-subtitle">Internships</h4>
              <ul className="internship-list">
                <li>HNG11 2024 - Backend Developer</li>
                <li>HNGX 2023 - Frontend Developer</li>
                <li>Uptick 2023 - Frontend Developer</li>
              </ul>
            </div>
          </section>

          <section className="skill-section">
            <h3 className="skill-title">KEY PROJECTS</h3>

            <div className="project-item">
              <a
                href="https://www.exploreourspace.com/"
                target="_blank"
                className="project-title"
                rel="noopener"
              >
                OurSpace Platform
              </a>
              <p className="project-description">
                Developed an MVP for booking short-let homes, including a fully
                functional admin portal.
              </p>
            </div>

            <div className="project-item">
              <a
                href="https://accesscare.sfhaccess.com/"
                target="_blank"
                className="project-title"
                rel="noopener"
              >
                Access Care Platform
              </a>
              <p className="project-description">
                Collaborated as one of two frontend developers on a telemedicine
                platform facilitating virtual healthcare consultations.
              </p>
            </div>

            <div className="project-item">
              <a
                href="https://upticktalent.africa/"
                target="_blank"
                className="project-title"
                rel="noopener"
              >
                Uptick Talent Website
              </a>
              <p className="project-description">
                Led frontend development for landing and admin CMS pages,
                ensuring intuitive UI and seamless user experiences.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
