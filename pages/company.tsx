import React from 'react';
import axios from 'axios';

import styles from '../styles/Home.module.scss';

const Company = () => {
  const [company, setCompany] = React.useState<Company>();

  React.useEffect(() => {
    async function fetchData() {
      try {
        const companyResponse = await axios.get(
          'https://app.informer.md/api/public/company?slug=climatec'
        );
        setCompany(companyResponse.data);
        console.log(companyResponse.data);
      } catch (error) {
        alert('Error');
      }
    }
    fetchData();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div>Content Company Page</div>
      <div className={styles.element}>
        {company ? company.name : 'loading...'}
      </div>
    </div>
  );
};

export default Company;
