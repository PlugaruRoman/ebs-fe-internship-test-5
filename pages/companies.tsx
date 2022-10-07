import React from 'react';

import Image from 'next/image';
import dynamic from 'next/dynamic';

import { Pagination } from '@mui/material';

import { useInformer } from 'context/index';

const CompaniesCard = dynamic(
  () => import('components/Companies/CompaniesCard')
);
import Modal from 'components/Modal/Modal';
import Layout from 'components/Layout';

import styles from 'styles/Home.module.scss';

import results from 'public/results.png';

const Companies = () => {
  const {
    allCompanies,
    setCurrentPage,
    pages,
    currentPage,
    totalCompanyNumber,
  } = useInformer();

  const selectCurrentPage = React.useCallback((num: number) => {
    setCurrentPage(num);
  }, []);

  return (
    <>
      <Layout>
        <Modal />
        <div className={styles.content}>
          <div className={styles.numberOfCompanies}>
            <Image height={20} width={20} src={results} alt='results' />
            <span className={styles.totalCompanyNumber}>{`${
              totalCompanyNumber || '...'
            } of results`}</span>
          </div>
          {allCompanies.map((el) => {
            return <CompaniesCard key={el.id} companies={el} />;
          })}
          <div className={styles.pagination}>
            <Pagination
              onChange={(_, num) => selectCurrentPage(num)}
              count={pages}
              page={currentPage}
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Companies;
