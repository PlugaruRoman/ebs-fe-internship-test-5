import React from 'react';

import axios from 'axios';

import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import { useQuery } from 'react-query/react';

const CompanyCard = dynamic(() => import('components/Company/CompanyCard'));
const CompanyNav = dynamic(() => import('components/Company/CompanyNav'));
const CompanyInfo = dynamic(() => import('components/Company/CompanyInfo'));
import Modal from 'components/Modal/Modal';
import Layout from 'components/Layout';

import styles from 'styles/Home.module.scss';

import Company from 'types/company';

const Company = () => {
  const { query } = useRouter();

  const { data } = useQuery(
    ['company', query.id],
    () => {
      return axios
        .get<Company>(
          `https://app.informer.md/api/public/company?id=${query.id}`
        )
        .then((data) => data.data);
    },

    {
      onError: (error) => {
        alert(error);
      },
      enabled: !!query.id,
    }
  );

  return (
    <>
      <Layout>
        {data && (
          <div className={styles.content}>
            <Modal />
            <CompanyCard company={data} />
            <CompanyNav />
            <CompanyInfo company={data} />
          </div>
        )}
      </Layout>
    </>
  );
};

export default Company;
