import React from 'react';
import { navLinks } from '../Navbar/constants';
import Image from 'next/image';
import styles from './MobileNav.module.scss';
import Link from 'next/link';

const MobileNav = () => {
  return (
    <ul className={styles.nav}>
      {navLinks.map((link) => (
        <li key={link.id}>
          <Link title={link.label} href={link.href}>
            <Image src={link.path} alt={link.label} width={30} height={30} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MobileNav;
