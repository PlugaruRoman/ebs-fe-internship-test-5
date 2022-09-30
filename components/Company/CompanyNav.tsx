import React from 'react';

import { useInformer } from '../../utils';

import styles from './CompanyNav.module.scss';

const CompanyNav: React.FC = () => {
  const { changeModalState } = useInformer();
  return (
    <div>
      <ul className={styles.menu}>
        <li className={styles.active}>General dates</li>
        <li onClick={changeModalState}>Personal</li>
        <li onClick={changeModalState}>Subdivisions</li>
        <li onClick={changeModalState}>Economic Data</li>
        <li onClick={changeModalState}>Publications</li>
        <li onClick={changeModalState}>Legal data</li>
      </ul>
    </div>
  );
};

export default CompanyNav;
