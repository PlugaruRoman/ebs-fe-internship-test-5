import React from 'react';
import axios from 'axios';

import { InformerContext } from './InformerContext';

interface InformerProviderProps {
  children: React.ReactNode;
}

export const TodoProvider: React.FC<InformerProviderProps> = ({ children }) => {
  const [companies, setCompanies] = React.useState<Companies[]>();

  // React.useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const CompaniesResponse = await axios.get(
  //         'https://app.informer.md/api/public/search?page=1&per_page=5&company_name'
  //       );
  //       setCompanies(CompaniesResponse.data.data);
  //     } catch (error) {
  //       alert('Error');
  //     }
  //   }
  //   fetchData();
  // }, []);

  // const value = React.useMemo(
  //   () => ({ companies }),

  //   [companies]
  // );

  return (
    <InformerContext.Provider value={value}>
      {children}
    </InformerContext.Provider>
  );
};
