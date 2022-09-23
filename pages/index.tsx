import React from 'react';
import axios from 'axios';

import styles from '../styles/Home.module.scss';

const Home = () => {
  const [searchCompany, setSearchCompany] = React.useState<Companies[]>([]);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const searchCompanyResponse = await axios.get(
          'https://app.informer.md/api/public/search?page=1&per_page=5&company_name=EBS'
        );

        console.log(searchCompanyResponse.data);
        setSearchCompany(searchCompanyResponse.data);
      } catch (error) {
        alert('Error');
      }
    }
    fetchData();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div>Content Home Page</div>
      <div>
        {searchCompany.map((el) => {
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

export default Home;
