import Image from "next/image";
import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <h1 className={styles.heading}>
        Contact <span>Me</span>
      </h1>
      <div className={styles.contactMe}>
        <div className={styles.work}>
          <h1>Let&apos;s work together</h1>
          <div className={styles.socials}>
            <a
              title="link"
              rel="noopener"
              href="https://www.linkedin.com/in/rb-isiaq"
              target="_blank"
              className={styles.social}
            >
              <Image
                src="/linkedin.svg"
                alt="LinkedIn"
                width={30}
                height={30}
              />
            </a>
            <a
              title="link"
              rel="noopener"
              href="https://www.twitter.com/RB_Isiaq"
              target="_blank"
              className={styles.social}
            >
              <Image src="/twitter.svg" alt="Twitter" width={30} height={30} />
            </a>
            <a
              title="link"
              rel="noopener"
              href="https://www.facebook.com/rb_isiaq"
              target="_blank"
              className={styles.social}
            >
              <Image src="/fb.svg" alt="Facebook" width={30} height={30} />
            </a>
            <a
              title="link"
              rel="noopener"
              href="mailto:isiaqridwanbukola1999@gmail.com"
              target="_blank"
              className={styles.social}
            >
              <Image src="/mail.svg" alt="Mail" width={30} height={30} />
            </a>
            <a
              title="link"
              rel="noopener"
              href="https://github.com/rb-isiaq"
              target="_blank"
              className={styles.social}
            >
              <Image src="/github.svg" alt="Github" width={30} height={30} />
            </a>
          </div>
        </div>
        <div className={styles.form}>
          <form>
            <input required type="text" title="name" placeholder="Name" />
            <input required type="text" title="Email" placeholder="Email" />
            <textarea
              required
              title="msg"
              placeholder="Message"
              rows={10}
              cols={10}
            />
            <button disabled>Contact Me</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
