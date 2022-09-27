import React from 'react';

import Link from 'next/link';

import styles from '../styles/Home.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <div>
        <h1>
          <Link href={'/'}>
            <a>informer</a>
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default Header;
