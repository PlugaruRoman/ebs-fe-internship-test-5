import React from 'react';

import Link from 'next/link';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <h1>
        <Link href={'/'}>
          <a>informer</a>
        </Link>
      </h1>
    </div>
  );
};

export default Header;
