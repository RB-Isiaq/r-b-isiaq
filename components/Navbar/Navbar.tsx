import Link from 'next/link';
import styles from './Navbar.module.scss';
import { TestId, navLinks } from './constants';

const Navbar = () => {
  return (
    <nav className={styles.nav} data-testid={TestId.NAV_ID}>
      <Link href="/">
        <h1 data-testid={TestId.NAME}>
          R <span>.</span> B <span>.</span>
          <span>Isiaq</span>
        </h1>
      </Link>
      <ul>
        {navLinks.map((link) => (
          <li key={link.id} data-testid={TestId.NAV_LINK}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
