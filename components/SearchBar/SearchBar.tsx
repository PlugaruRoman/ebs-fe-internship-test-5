import Link from 'next/link';
import Image from 'next/image';

import { useInformer } from '../../utils/contextes/useInformer';

import searcher from '../../public/searcher.svg';

import styles from './SearchBar.module.scss';

const SearchBar = () => {
  const { onSearch, search, foundCompanies, selectCompany, numberOfCompany } =
    useInformer();

  return (
    <div>
      <div className={styles.searchBar}>
        <input
          className={
            search ? styles.searchBarInputActive : styles.searchBarInput
          }
          name='name'
          id='name'
          type='text'
          placeholder={`Search from ${numberOfCompany || '...'} Companies`}
          onChange={onSearch}
        />

        {search &&
          foundCompanies.map((el) => {
            return (
              <div
                className={styles.foundCompany}
                onClick={() => selectCompany(el)}
                key={el.id}
              >
                {el.name} {el.idno}
              </div>
            );
          })}
        <div className={styles.searchImg}>
          <Link href={'/companies'}>
            <a>
              <Image width={35} height={35} alt='search' src={searcher} />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
