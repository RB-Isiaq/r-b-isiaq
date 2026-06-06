import Marquee from 'react-fast-marquee';
import { content } from '../Hero/constants';
import styles from './Roles.module.scss';

const Roles = () => (
  <section className={styles.container}>
    <Marquee pauseOnHover>
      {content.domains?.map((domain: string, i: number) => (
        <h2 key={domain} className={i % 2 ? styles.right : styles.left}>
          {domain}
        </h2>
      ))}
    </Marquee>
  </section>
);

export default Roles;
