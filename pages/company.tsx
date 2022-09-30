import React from 'react';

import { useInformer } from '../utils';

import CompanyCard from '../components/Company/CompanyCard';
import CompanyNav from '../components/Company/CompanyNav';
import CompanyInfo from '../components/Company/CompanyInfo';
import Modal from '../components/Modal/Modal';

const Company = () => {
  const { company } = useInformer();
  if (company) {
    return (
      <div>
        <Modal />
        <CompanyCard />
        <CompanyNav />
        <CompanyInfo />
      </div>
    );
  }
};

export default Company;
