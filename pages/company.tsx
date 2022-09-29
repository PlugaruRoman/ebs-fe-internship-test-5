import React from 'react';

import { useInformer } from '../utils';

import CompanyCard from '../components/Company/CompanyCard';
import CompanyNav from '../components/Company/CompanyNav';
import CompanyInfo from '../components/Company/CompanyInfo';

const Company = () => {
  const { company } = useInformer();

  return (
    <>
      <div>{company ? <CompanyCard /> : <div></div>}</div>
      <div>{company ? <CompanyNav /> : <div></div>}</div>
      <div>{company ? <CompanyInfo /> : <div></div>}</div>
    </>
  );
};

export default Company;
