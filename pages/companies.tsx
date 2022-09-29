import React from 'react';
import axios from 'axios';

import { Pages, PagesNumber } from '../store';
import { useInformer } from '../utils';

import styles from '../styles/Home.module.scss';
import CompaniesCard from '../components/Companies/CompaniesCard';

const Companies: React.FC = () => {
  const { search, companies, allCompanies, selectCurrentPage, pages } =
    useInformer();

  return (
    <>
      <div className={styles.content}>
        {companies.map((el) => {
          return <CompaniesCard key={el.id} props={el} />;
        })}
        <div className={styles.pagesNumber}></div>
      </div>
    </>
  );
};

export default Companies;
