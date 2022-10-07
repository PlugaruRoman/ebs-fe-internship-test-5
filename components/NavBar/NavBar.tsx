import React from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './NavBar.module.scss';

const Navbar: React.FC = () => {
  const { pathname } = useRouter();

  return (
    <div className={styles.navBar}>
      <Link href={'/'}>
        <a className={pathname === '/' ? styles.navActive : styles.nav}>Home</a>
      </Link>
      <Link href={'/companies'}>
        <a
          className={pathname === '/companies' ? styles.navActive : styles.nav}
        >
          Companies
        </a>
      </Link>
    </div>
  );
};

export default Navbar;
