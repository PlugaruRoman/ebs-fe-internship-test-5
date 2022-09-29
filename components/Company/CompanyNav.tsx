import React from 'react';

import styles from './CompanyNav.module.scss';

const CompanyNav: React.FC = () => {
  return (
    <div>
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
