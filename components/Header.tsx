import React from 'react';

import Navbar from './Navbar';

import styles from '../styles/Home.module.scss';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <div>
      <div className={styles.title}>
        <h1>Informer</h1>
      </div>
      <SearchBar />
      <Navbar />
    </div>
  );
};

export default Header;
