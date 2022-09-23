import React from 'react';
import axios from 'axios';
import { useInformer } from '../utils';

import styles from '../styles/Home.module.scss';

const Companies: React.FC = () => {
  const [companies, setCompanies] = React.useState<Companies[]>([]);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const companiesResponse = await axios.get(
          'https://app.informer.md/api/public/search?page=3&company_name='
        );
        console.log(companiesResponse.data.data);
        setCompanies(companiesResponse.data.data);
      } catch (error) {
        alert('Error');
      }
    }
    fetchData();
  }, []);

  const {} = useInformer();

  return (
    <div className={styles.wrapper}>
      <div>Content Companies Page</div>
      <div className={styles.content}>
        All Companies
        {companies.map((el) => {
          return (
            <div key={el.id} className={styles.element}>
              {el.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Companies;
