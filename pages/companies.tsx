import React from 'react';
import axios from 'axios';

import { Pages, PagesNumber } from '../store';
import { useInformer } from '../utils';

import styles from '../styles/Home.module.scss';

const Companies: React.FC = () => {
  const { search, selectCompany } = useInformer();

  const [companies, setCompanies] = React.useState<Companies[]>([]);
  const [currentPage, setCurrentPage] = React.useState(1);

  const selectCurrentPage = (i: number) => {
    setCurrentPage(i);
  };

  React.useEffect(() => {
    async function fetchData() {
      try {
        const companiesResponse = await axios.get(
          `https://app.informer.md/api/public/search?page=${currentPage}&company_name=${search}`
        );

        setCompanies(companiesResponse.data.data);
      } catch (error) {
        alert('Error');
      }
    }
    fetchData();
  }, [currentPage, search]);

  return (
    <div className={styles.wrapper}>
      <div>Content Companies Page</div>
      <div className={styles.content}>
        All Companies
        {companies.map((el) => {
          return (
            <div
              onClick={() => selectCompany(el)}
              key={el.id}
              className={styles.element}
            >
              {el.name}
            </div>
          );
        })}
        <ul className={styles.pagesNumber}>
          {Object.keys(Pages).map((el) => {
            return (
              <li
                key={PagesNumber[el]}
                onClick={() => selectCurrentPage(PagesNumber[el])}
              >
                {PagesNumber[el]}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Companies;
