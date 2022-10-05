import React from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { useInformer } from 'context/contextes';

import styles from './NavBar.module.scss';

const Navbar: React.FC = () => {
  const { pathname } = useRouter();
  const { company } = useInformer();

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
      {company && (
        <Link href={'/company/[id]'} as={`/company/${company.id}`}>
          <a
            className={
              pathname === '/company/[id]' ? styles.navActive : styles.nav
            }
          >
            Company
          </a>
        </Link>
      )}
    </div>
  );
};

export default Navbar;
