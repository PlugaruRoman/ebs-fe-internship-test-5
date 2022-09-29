import React from 'react';

import axios from 'axios';

import { InformerContext } from './InformerContext';

interface InformerProviderProps {
  children: React.ReactNode;
}

export const InformerProvider: React.FC<InformerProviderProps> = ({
  children,
}) => {
  const [foundCompanies, setFoundCompanies] = React.useState<Companies[]>();
  const [search, setSearch] = React.useState('');
  const [selectedCompany, setSelectedCompany] = React.useState<Companies>();
  const [totalCompanyNumber, setTotalCompanyNumber] = React.useState();
  const [company, setCompany] = React.useState<Company>();

  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearch(value);
  };

  const selectCompany = (el: Companies) => {
    setSelectedCompany(el);
  };

  let numberOfCompany: string;
  function numberWithCommas(x: any) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
  }
  if (totalCompanyNumber !== undefined) {
    numberOfCompany = numberWithCommas(totalCompanyNumber);
  }

  React.useEffect(() => {
    async function fetchData() {
      try {
        const searchCompanyResponse = await axios.get(
          `https://app.informer.md/api/public/search?page=1&per_page=5&company_name=${search}`
        );
        setFoundCompanies(searchCompanyResponse.data.data);
        setTotalCompanyNumber(searchCompanyResponse.data.total_results);
        console.log('search');
      } catch (error) {
        alert('Error');
      }
    }
    fetchData();
  }, [search]);

  React.useEffect(() => {
    async function fetchData() {
      if (selectedCompany) {
        try {
          const companyResponse = await axios.get(
            `https://app.informer.md/api/public/company?slug=${selectedCompany.slug}`
          );
          setCompany(companyResponse.data);
          console.log('selected company');
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
      search,
      foundCompanies,
      selectCompany,
      selectedCompany,
      company,
      numberOfCompany,
    }),
    [
      onSearch,
      search,
      selectedCompany,
      selectCompany,
      company,
      numberOfCompany,
      foundCompanies,
    ]
  );
  return (
    <InformerContext.Provider value={value}>
      {children}
    </InformerContext.Provider>
  );
};
