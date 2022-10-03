import React from 'react';

import Image from 'next/image';

import { Pagination } from '@mui/material';

import { useInformer } from 'utils/index';

import CompaniesCard from 'components/Companies/CompaniesCard';
import Modal from 'components/Modal/Modal';

import styles from 'styles/Home.module.scss';

import results from 'public/results.png';

const Companies = () => {
  const { allCompanies, setCurrentPage, pages, currentPage, numberOfCompany } =
    useInformer();

  const selectCurrentPage = React.useCallback((num: number) => {
    setCurrentPage(num);
  }, []);

  return (
    <>
      <Modal />
      <div className={styles.content}>
        <div className={styles.numberOfCompanies}>
          <Image height={20} width={20} src={results} alt='results' />
          <span>{`${numberOfCompany || '...'} of results`}</span>
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
    </>
  );
};

export default Companies;
