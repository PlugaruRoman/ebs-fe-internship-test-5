import { useInformer } from '../utils/contextes/useInformer';

import styles from '../styles/Home.module.scss';

const SearchBar = () => {
  const { onSearch, search, foundCompanies, selectCompany } = useInformer();

  return (
    <div>
      <div className={styles.searchBar}>
        <input
          className={styles.searchBarInput}
          name='name'
          id='name'
          type='text'
          placeholder='Search from 225,175 Companies'
          onChange={onSearch}
        />

        <button className={styles.searchButton}>Search</button>

        {search &&
          foundCompanies.map((el) => {
            return (
              <div onClick={() => selectCompany(el)} key={el.id}>
                {el.name} {el.idno}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SearchBar;
