import React from 'react';

export interface InformerContextProps {
  search: string | null;
  onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  foundCompanies: Companies[];
  selectCompany: (el: Companies) => void;
  selectedCompany: Companies | null;
  company: Company | null;
  numberOfCompany: string | undefined;
}

export const InformerContext = React.createContext<InformerContextProps>({
  search: null,
  onSearch: () => {},
  foundCompanies: [],
  selectCompany: () => {},
  selectedCompany: null,
  company: null,
  numberOfCompany: undefined,
});
