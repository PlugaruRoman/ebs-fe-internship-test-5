import React from 'react';

import { useInformer } from '../utils';

import CompanyCard from '../components/Company/CompanyCard';
import CompanyNav from '../components/Company/CompanyNav';
import CompanyInfo from '../components/Company/CompanyInfo';

const Company = () => {
  const { company } = useInformer();
  if (company) {
    return (
      <div>
        <CompanyCard />
        <CompanyNav />
        <CompanyInfo />
      </div>
    );
  }
};

export default Company;
