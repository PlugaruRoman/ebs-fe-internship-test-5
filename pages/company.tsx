import React from 'react';

import { useInformer } from 'utils/index';

import CompanyCard from 'components/Company/CompanyCard';
import CompanyNav from 'components/Company/CompanyNav';
import CompanyInfo from 'components/Company/CompanyInfo';
import Modal from 'components/Modal/Modal';

import styles from '../styles/Home.module.scss';

const Company = () => {
  const { company } = useInformer();

  if (company) {
    return (
      <div className={styles.content}>
        <Modal />
        <CompanyCard />
        <CompanyNav />
        <CompanyInfo />
      </div>
    );
  }
};

export default Company;
