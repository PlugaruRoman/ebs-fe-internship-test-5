import React from 'react';

export interface InformerContextProps {
  onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  selectCompany: (el: Companies) => void;
  searchCompanies: () => void;
  setCurrentPage: (i: number) => void;
  changeModalState: () => void;
  search: string | null;
  foundCompanies: Companies[];
  selectedCompany: Companies | null;
  company: Company | null;
  numberOfCompany: string | undefined;
  allCompanies: Companies[];
  pages: number;
  currentPage: number;
  modalActive: boolean;
}

export const InformerContext = React.createContext<InformerContextProps>({
  onSearch: () => {},
  selectCompany: () => {},
  searchCompanies: () => {},
  setCurrentPage: () => {},
  changeModalState: () => {},
  search: null,
  foundCompanies: [],
  selectedCompany: null,
  company: null,
  numberOfCompany: undefined,
  allCompanies: [],
  pages: 0,
  currentPage: 0,
  modalActive: false,
});
