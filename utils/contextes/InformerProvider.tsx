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

  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearch(value);
  };

  const selectCompany = (el: Companies) => {
    setSelectedCompany(el);
  };

  React.useEffect(() => {
    async function fetchData() {
      try {
        const searchCompanyResponse = await axios.get(
          `https://app.informer.md/api/public/search?page=1&per_page=5&company_name=${search}`
        );

        setFoundCompanies(searchCompanyResponse.data.data);
      } catch (error) {
        alert('Error');
      }
    }
    fetchData();
  }, [search]);

  const value = React.useMemo(
    () => ({
      onSearch,
      search,
      foundCompanies,
      selectCompany,
      selectedCompany,
    }),
    [onSearch, search, selectedCompany, selectCompany, foundCompanies]
  );
  return (
    <InformerContext.Provider value={value}>
      {children}
    </InformerContext.Provider>
  );
};
