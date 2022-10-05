import React from 'react';

import Link from 'next/link';
import Image from 'next/image';

import { useInformer } from 'context/index';

import Companies from 'types/companies';

import styles from './SearchBar.module.scss';

import searcher from 'public/searcher.svg';

const SearchBar: React.FC = () => {
  const {
    onSearch,
    searchCompanies,
    setSearch,
    setSelectedCompany,
    search,
    foundCompanies,
    totalCompanyNumber,
  } = useInformer();

  const selectCompany = React.useCallback((el: Companies) => {
    setSelectedCompany(el);
    setSearch('');
  }, []);

  return (
    <div className={styles.content}>
      <div className={styles.searchBar}>
        <input
          className={
            search ? styles.searchBarInputActive : styles.searchBarInput
          }
          type='text'
          placeholder={`Search from ${totalCompanyNumber || '...'} Companies`}
          onChange={onSearch}
          value={search}
        />

        {search &&
          foundCompanies.map((el) => {
            return (
              <Link key={el.id} href={'/company/[id]'} as={`/company/${el.id}`}>
                <a
                  className={styles.foundCompany}
                  onClick={() => selectCompany(el)}
                >
                  {el.name} {el.idno}
                </a>
              </Link>
            );
          })}
        <div className={styles.searchImg}>
          <Link href={'/companies'}>
            <a onClick={searchCompanies}>
              <Image width={35} height={35} alt='search' src={searcher} />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
