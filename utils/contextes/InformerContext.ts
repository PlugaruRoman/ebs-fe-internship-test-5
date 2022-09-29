import React from 'react';

export interface InformerContextProps {
  search: string | null;
  onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  foundCompanies: Companies[];
  selectCompany: (el: Companies) => void;
  selectedCompany: Companies | null;
  company: Company | null;
  numberOfCompany: string | undefined;
  searchCompanies: () => void;
  companies: Companies[];
  allCompanies: Companies[];
  selectCurrentPage: (i: number) => void;
  pages: number;
}

export const InformerContext = React.createContext<InformerContextProps>({
  search: null,
  onSearch: () => {},
  foundCompanies: [],
  selectCompany: () => {},
  selectedCompany: null,
  company: null,
  numberOfCompany: undefined,
  searchCompanies: () => {},
  companies: [],
  allCompanies: [],
  selectCurrentPage: () => {},
  pages: 0,
});
