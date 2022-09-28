import React from 'react';

import styles from '../styles/Home.module.scss';

const CompanyNav: React.FC = () => {
  return (
    <div className={styles.navMenu}>
      <ul className={styles.menu}>
        <li className={styles.active}>General dates</li>
        <li>Personal</li>
        <li>Subdivisions</li>
        <li>Economic Data</li>
        <li>Publications</li>
        <li>Legal data</li>
      </ul>
    </div>
  );
};

export default CompanyNav;
