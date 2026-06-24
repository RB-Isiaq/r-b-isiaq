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
                <a href="tel:+2349030984108">+2349030984108</a>
              </div>
              <div className="contact-item">
                <Mail />
                <a href="mailto:isiaqridwanbukola1999@gmail.com">
                  isiaqridwanbukola1999@gmail.com
                </a>
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
                  href={TestId.RESUME_URL}
                  target="_blank"
                  download="Isiaq's Resume"
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
            Frontend Software Engineer with 3+ years building production web
            applications across fintech, AI, healthcare and mobility — including
            a London Stock Exchange–backed trading platform and
            Banking-as-a-Service wallets. I work primarily in React, Next.js and
            TypeScript, and increasingly React Native mobile apps and NestJS
            APIs, collaborating across product, design and engineering to ship
            performant, accessible and maintainable products.
          </p>
        </section>

        <section className="section">
          <h3 className="section-title">PROFESSIONAL EXPERIENCE</h3>

          <div className="experience-item">
            <div className="experience-header">
              <div>
                <h4 className="job-title">
                  Frontend Developer <span className="job-type">Full-time</span>
                </h4>
                <h5 className="company">Analytics Intelligence</h5>
              </div>
              <div className="job-meta">
                <div>12/2023 - Present</div>
                <div>Remote — Lagos, Nigeria</div>
              </div>
            </div>
            <ul className="job-duties">
              <li>
                Built frontend for{' '}
                <a
                  href="https://www.londonstockexchange.com/personal-investing/tools/tradetutor-strategy-simulator/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TradeTutor
                </a>
                , a trading-education platform launched in partnership with the
                London Stock Exchange Group — scaling from a 500-user beta to a
                student program across 20+ schools with live trading,
                signalling, leaderboards and virtual-wallet credits.
              </li>
              <li>
                Built AI-powered chatbot systems across 5 company websites,
                integrated with the Pulse API to track key product events and
                improve customer interaction and discovery.
              </li>
              <li>
                Developed a certificate verification system supporting AI
                Academy students and training programs.
              </li>
              <li>
                Drove UX, SEO and performance improvements, raising Lighthouse
                scores to 90+ with responsive, cross-browser-compatible
                interfaces.
              </li>
              <li>
                Contribute to sprint planning, code reviews and frontend
                architecture discussions.
              </li>
            </ul>
          </div>

          <div className="experience-item">
            <div className="experience-header">
              <div>
                <h4 className="job-title">
                  Frontend Engineer <span className="job-type">Contract</span>
                </h4>
                <h5 className="company">SimpliRide</h5>
              </div>
              <div className="job-meta">
                <div>10/2025 - Present</div>
                <div>Remote — Lagos, Nigeria</div>
              </div>
            </div>
            <ul className="job-duties">
              <li>
                Built the internal admin platform used by the operations team to
                run a ride-hailing service with thousands of drivers and riders
                — analytics dashboards, trip and transaction management, fare
                configuration, driver/rider operations and reporting.
              </li>
              <li>
                Collaborate cross-functionally to improve usability,
                responsiveness and frontend performance across the platform.
              </li>
            </ul>
          </div>

          <div className="experience-item">
            <div className="experience-header">
              <div>
                <h4 className="job-title">Frontend Engineer</h4>
                <h5 className="company">TIMA / Endow</h5>
              </div>
              <div className="job-meta">
                <div>09/2024 - 12/2025</div>
                <div>Lagos, Nigeria</div>
              </div>
            </div>
            <ul className="job-duties">
              <li>
                Developed frontend for{' '}
                <a
                  href="https://app.getendow.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Endow
                </a>
                , a creator-focused financial management platform tracking
                revenue across YouTube, Shopify, Patreon, Gumroad and more —
                used by a growing base of creators.
              </li>
              <li>
                Built Banking-as-a-Service wallet features — NGN & USD virtual
                accounts, cards, currency conversion and transfers — on a
                platform that has processed significant transaction volume.
              </li>
              <li>
                Implemented storefront and checkout experiences with payment
                integrations via Flutterwave/Stripe.
              </li>
              <li>
                Built invoicing, custom payment links, budgeting and
                expense-tracking features.
              </li>
            </ul>
          </div>

          <div className="experience-item">
            <div className="experience-header">
              <div>
                <h4 className="job-title">Freelance Frontend Engineer</h4>
                <h5 className="company">Independent</h5>
              </div>
              <div className="job-meta">
                <div>11/2022 - Present</div>
                <div>Remote</div>
              </div>
            </div>
            <ul className="job-duties">
              <li>
                Built production-ready applications across healthcare and
                operations-management domains.
              </li>
              <li>
                Contributed to AccessCare, a healthcare platform improving
                access to digital healthcare services.
              </li>
              <li>
                Developed frontend solutions for LekkiPort operational
                management systems supporting data-driven business workflows.
              </li>
            </ul>
          </div>
        </section>

        <div className="skills-grid">
          <section className="skill-section">
            <h3 className="skill-title">TECHNICAL SKILLS</h3>
            <div className="skill-tags">
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">TypeScript</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">React</span>
              <span className="skill-tag">Next.js</span>
              <span className="skill-tag">Redux</span>
              <span className="skill-tag">React Native</span>
              <span className="skill-tag">Expo</span>
              <span className="skill-tag">TailwindCSS</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Express.js</span>
              <span className="skill-tag">NestJS</span>
              <span className="skill-tag">PostgreSQL</span>
              <span className="skill-tag">MongoDB</span>
            </div>

            <h4 className="skill-subtitle">Tools & Practices</h4>
            <div className="skill-tags">
              <span className="skill-tag">Git</span>
              <span className="skill-tag">Docker</span>
              <span className="skill-tag">Firebase</span>
              <span className="skill-tag">Figma</span>
              <span className="skill-tag">CI/CD</span>
              <span className="skill-tag">REST APIs</span>
              <span className="skill-tag">Agile</span>
            </div>
          </section>

          <section className="skill-section">
            <h3 className="skill-title">EDUCATION</h3>
            <div className="education-item">
              <h4 className="degree">B.Sc. Biochemistry</h4>
              <div className="school">University of Ilorin</div>
              <div className="location">Ilorin, Nigeria</div>
              <div className="dates">2016 - 2021 · Second Class Upper</div>
            </div>

            <div>
              <h4 className="skill-subtitle">Community & Leadership</h4>
              <ul className="internship-list">
                <li>Mentor — Uptick Talent Fellowship (2025 - Present)</li>
                <li>Tutor — The Mouthpiece Techsphere (2025 - Present)</li>
                <li>GDG DevFest Ilorin (2023) · Kwara Build (2022)</li>
              </ul>
            </div>

            <div>
              <h4 className="skill-subtitle">Awards</h4>
              <ul className="internship-list">
                <li>Employee of the Year — Analytics Intelligence (2025)</li>
                <li>Team Player Award — Analytics Intelligence (2025)</li>
                <li>Culture Champion Award — Analytics Intelligence (2025)</li>
              </ul>
            </div>
          </section>

          <section className="skill-section">
            <h3 className="skill-title">KEY PROJECTS</h3>

            <div className="project-item">
              <a
                href="https://irb-forge-fe.vercel.app/"
                target="_blank"
                className="project-title"
                rel="noopener"
              >
                IRB Forge
              </a>
              <p className="project-description">
                A multi-tenant SaaS platform for mentorship communities, built
                end to end across a NestJS API, a Next.js web client and a React
                Native mobile app with native push notifications.
              </p>
            </div>

            <div className="project-item">
              <a
                href="https://www.londonstockexchange.com/personal-investing/tools/tradetutor-strategy-simulator/"
                target="_blank"
                className="project-title"
                rel="noopener"
              >
                TradeTutor
              </a>
              <p className="project-description">
                A tutor-based trading education platform built with the London
                Stock Exchange Group, simulating strategies across hundreds of
                instruments.
              </p>
            </div>

            <div className="project-item">
              <a
                href="https://app.getendow.com/"
                target="_blank"
                className="project-title"
                rel="noopener"
              >
                Endow
              </a>
              <p className="project-description">
                A creator-focused fintech platform with Banking-as-a-Service
                wallets, storefront and revenue tracking across multiple creator
                platforms.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
