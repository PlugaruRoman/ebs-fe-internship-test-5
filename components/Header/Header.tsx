import React from 'react';

import Link from 'next/link';

import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link href={'/'}>
          <a>informer</a>
        </Link>
      </div>
    </div>
  );
};

export default Header;
