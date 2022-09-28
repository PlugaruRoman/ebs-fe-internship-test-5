import React from 'react';
import axios from 'axios';

import { Pages, PagesNumber } from '../store';
import { useInformer } from '../utils';

import styles from '../styles/Home.module.scss';
import CompaniesCard from '../components/CompaniesCard';

const Companies: React.FC = () => {
  const { search } = useInformer();

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
    <div>
      <div className={styles.content}>
        {companies.map((el) => {
          return <CompaniesCard key={el.id} props={el} />;
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
