import React from 'react';

import Companies from 'types/companies';

export interface InformerContextProps {
  onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  searchCompanies: () => void;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  changeModalState: () => void;
  setSelectedCompany: React.Dispatch<React.SetStateAction<Companies>>;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  search: string | null;
  foundCompanies: Companies[];
  selectedCompany: Companies;
  totalCompanyNumber: number;
  allCompanies: Companies[];
  pages: number;
  currentPage: number;
  modalActive: boolean;
}

export const InformerContext = React.createContext<InformerContextProps>({
  onSearch: () => {},
  searchCompanies: () => {},
  setCurrentPage: () => {},
  changeModalState: () => {},
  setSelectedCompany: () => {},
  setSearch: () => {},
  search: null,
  foundCompanies: [],
  selectedCompany: null,
  totalCompanyNumber: 0,
  allCompanies: [],
  pages: 0,
  currentPage: 0,
  modalActive: false,
});
