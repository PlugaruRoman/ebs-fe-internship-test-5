import React from 'react';

import { useInformer } from 'context/index';

import CompanyCard from 'components/Company/CompanyCard';
import CompanyNav from 'components/Company/CompanyNav';
import CompanyInfo from 'components/Company/CompanyInfo';
import Modal from 'components/Modal/Modal';
import Layout from 'components/Layout';

import styles from 'styles/Home.module.scss';

const Company = () => {
  const { company } = useInformer();

  return (
    <>
      <Layout>
        {company && (
          <div className={styles.content}>
            <Modal />
            <CompanyCard />
            <CompanyNav />
            <CompanyInfo />
          </div>
        )}
      </Layout>
    </>
  );
};

export default Company;
