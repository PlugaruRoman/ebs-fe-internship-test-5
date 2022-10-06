import React from 'react';

import { useInformer } from 'context/index';

import styles from './CompanyNav.module.scss';

const CompanyNav: React.FC = () => {
  const { changeModalState } = useInformer();
  return (
    <div className={styles.content}>
      <ul className={styles.menu}>
        <li className={styles.activeListElem}>General dates</li>
        <li className={styles.listElem} onClick={changeModalState}>
          Personal
        </li>
        <li className={styles.listElem} onClick={changeModalState}>
          Subdivisions
        </li>
        <li className={styles.listElem} onClick={changeModalState}>
          Economic Data
        </li>
        <li className={styles.listElem} onClick={changeModalState}>
          Publications
        </li>
        <li className={styles.listElem} onClick={changeModalState}>
          Legal data
        </li>
      </ul>
    </div>
  );
};

export default CompanyNav;
