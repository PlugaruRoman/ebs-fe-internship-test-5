import React from 'react';

import CompanyCard from '../components/CompanyCard';
import CompanyNav from '../components/CompanyNav';
import ContentCompanyCard from '../components/ContentCompanyCard';

const Company = () => {
  return (
    <div>
      <CompanyCard />
      <CompanyNav />
      <ContentCompanyCard />
    </div>
  );
};

export default Company;
