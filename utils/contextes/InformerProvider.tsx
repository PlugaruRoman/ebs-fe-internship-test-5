import React from 'react';

import axios from 'axios';

import { InformerContext } from './InformerContext';

interface InformerProviderProps {
  children: React.ReactNode;
}

export const InformerProvider: React.FC<InformerProviderProps> = ({
  children,
}) => {
  const [search, setSearch] = React.useState('');
  const [foundCompanies, setFoundCompanies] = React.useState<Companies[]>();
  const [selectedCompany, setSelectedCompany] = React.useState<Companies>();
  const [company, setCompany] = React.useState<Company>();

  const [totalCompanyNumber, setTotalCompanyNumber] = React.useState();
  const [allCompanies, setAllCompanies] = React.useState<Companies[]>([]);

  const [pages, setPages] = React.useState();
  const [currentPage, setCurrentPage] = React.useState(1);

  const [prevCompanies, setPrevCompanies] = React.useState(false);
  const [modalActive, setModalActive] = React.useState(false);

  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearch(value);
  };

  const searchCompanies = () => {
    setAllCompanies(allCompanies);
    setPrevCompanies((prev) => !prev);
    setCurrentPage(1);
  };

  let numberOfCompany: string;
  function numberWithCommas(x: any) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
  }
  if (totalCompanyNumber !== undefined) {
    numberOfCompany = numberWithCommas(totalCompanyNumber);
  }

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
        setTotalCompanyNumber(searchCompanyResponse.data.total_results);
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
  }, [currentPage, , pages, prevCompanies]);

  React.useEffect(() => {
    async function fetchData() {
      if (selectedCompany) {
        try {
          const companyResponse = await axios.get(
            `https://app.informer.md/api/public/company?slug=${selectedCompany.slug}`
          );
          setCompany(companyResponse.data);
        } catch (error) {
          alert('Error');
        }
      }
    }
    fetchData();
  }, [selectedCompany]);

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
      company,
      numberOfCompany,
      allCompanies,
      pages,
      currentPage,
      modalActive,
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
      company,
      numberOfCompany,
      allCompanies,
      pages,
      currentPage,
      modalActive,
    ]
  );
  return (
    <InformerContext.Provider value={value}>
      {children}
    </InformerContext.Provider>
  );
};
