import React from 'react';

import axios from 'axios';

import { InformerContext } from './InformerContext';

import Companies from 'types/companies';
import InformerProviderProps from 'types/informerProviderProps';

export const InformerProvider: React.FC<InformerProviderProps> = ({
  children,
}) => {
  const [search, setSearch] = React.useState('');
  const [foundCompanies, setFoundCompanies] = React.useState<Companies[]>();

  const [totalCompanyNumber, setTotalCompanyNumber] = React.useState();
  const [allCompanies, setAllCompanies] = React.useState<Companies[]>([]);

  const [pages, setPages] = React.useState();
  const [currentPage, setCurrentPage] = React.useState(1);

  const [selectedCompany, setSelectedCompany] = React.useState<Companies>();

  const [searchState, setSearchState] = React.useState(false);
  const [modalActive, setModalActive] = React.useState(false);

  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearch(value);
  };

  const searchCompanies = () => {
    setSearchState((prev) => !prev);
    setCurrentPage(1);
  };

  const changeModalState = (): void => {
    setModalActive((prev) => !prev);
  };

  React.useEffect(() => {
    async function fetchData() {
      try {
        const searchCompanyResponse = await axios.get(
          `https://app.informer.md/api/public/search?page=1&per_page=5&company_name=${search}`
        );
        setFoundCompanies(searchCompanyResponse.data.data);
        setTotalCompanyNumber(
          searchCompanyResponse.data.total_results
            .toString()
            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
        );
      } catch (error) {
        alert('Error');
      }
    }
    fetchData();
  }, [search]);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const companiesResponse = await axios.get(
          `https://app.informer.md/api/public/search?page=${
            currentPage !== 400 ? currentPage : 399
          }&company_name=${search}`
        );
        setAllCompanies(companiesResponse.data.data);
        setPages(companiesResponse.data.pages);
      } catch (error) {
        alert('Error');
      }
    }
    fetchData();
  }, [currentPage, , pages, searchState]);

  const value = React.useMemo(
    () => ({
      onSearch,
      searchCompanies,
      setCurrentPage,
      changeModalState,
      setSelectedCompany,
      setSearch,
      search,
      foundCompanies,
      selectedCompany,
      allCompanies,
      pages,
      currentPage,
      modalActive,
      totalCompanyNumber,
    }),
    [
      onSearch,
      searchCompanies,
      setCurrentPage,
      changeModalState,
      setSelectedCompany,
      setSearch,
      search,
      foundCompanies,
      selectedCompany,
      allCompanies,
      pages,
      currentPage,
      modalActive,
      totalCompanyNumber,
    ]
  );
  return (
    <InformerContext.Provider value={value}>
      {children}
    </InformerContext.Provider>
  );
};
