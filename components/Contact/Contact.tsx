'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { toast } from 'sonner';
import styles from './Contact.module.scss';
import emailjs from '@emailjs/browser';
import { TestId } from './constants';

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current || loading) return;

    setError(false);
    setLoading(true);

    try {
      await emailjs.sendForm(
        'service_tl70x2r',
        'template_pccn9vs',
        formRef.current,
        'k2UtwwjyErqh6ute5',
      );
      toast.success("Message sent — thanks! I'll get back to you soon.");
      formRef.current.reset();
    } catch (err) {
      setError(true);
      toast.error("Couldn't send your message. Please try again.");
      console.error('EmailJS sendForm failed:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className={styles.contact}
      data-testid={TestId.CONTACT_ID}
    >
      <div className={styles.contactMe}>
        <div className={styles.work}>
          <h1>
            <span>Let&apos;s </span> Work <span>Together</span>
          </h1>
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
              href="https://www.x.com/RB_Isiaq"
              target="_blank"
              className={styles.social}
            >
              <Image src="/twitter.svg" alt="Twitter" width={30} height={30} />
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
      </div>
      <div className={styles.contactMe}>
        <div className={styles.form}>
          <form ref={formRef} onSubmit={sendEmail} data-testid={TestId.FORM}>
            <div className={styles.row}>
              <input
                required
                type="text"
                title="Name"
                placeholder="Name"
                name="name"
              />
              <input
                required
                type="email"
                title="Email"
                placeholder="Email"
                name="email"
              />
            </div>
            <textarea
              required
              title="msg"
              placeholder="Message"
              rows={10}
              cols={10}
              name="message"
            />
            <button
              className={styles.btn}
              data-testid={TestId.BTN}
              disabled={loading}
            >
              {loading ? 'Sending…' : 'Contact Me'}
            </button>
          </form>
          {error && (
            <p className={styles.error} role="alert">
              Something went wrong — please try again, or email me directly at{' '}
              <a href="mailto:isiaqridwanbukola1999@gmail.com">
                isiaqridwanbukola1999@gmail.com
              </a>
              .
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
