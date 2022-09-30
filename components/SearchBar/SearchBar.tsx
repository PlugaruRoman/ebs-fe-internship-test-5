import Link from 'next/link';
import Image from 'next/image';

import { useInformer } from '../../utils/contextes/useInformer';

import styles from './SearchBar.module.scss';

import searcher from '../../public/searcher.svg';

const SearchBar = () => {
  const {
    onSearch,
    searchCompanies,
    selectCompany,
    search,
    foundCompanies,
    numberOfCompany,
  } = useInformer();

  return (
    <>
      <div className={styles.searchBar}>
        <input
          className={
            search ? styles.searchBarInputActive : styles.searchBarInput
          }
          type='text'
          placeholder={`Search from ${numberOfCompany || '...'} Companies`}
          onChange={onSearch}
          value={search}
        />

        {search &&
          foundCompanies.map((el) => {
            return (
              <Link key={el.id} href={'/company'}>
                <div
                  className={styles.foundCompany}
                  onClick={() => selectCompany(el)}
                >
                  {el.name} {el.idno}
                </div>
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
    </>
  );
};

export default SearchBar;
