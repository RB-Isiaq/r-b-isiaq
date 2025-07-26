import Marquee from 'react-fast-marquee';
import { content } from '../Hero/constants';
import styles from './Roles.module.scss';

const Roles = () => (
  <section className={styles.container}>
    <Marquee pauseOnHover>
      {content.roles?.map((r: string, i: number) => (
        <h2 key={r} className={i % 2 ? styles.right : styles.left}>
          {r}
        </h2>
      ))}
    </Marquee>
  </section>
);

export default Roles;
