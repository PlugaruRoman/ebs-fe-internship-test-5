import React from 'react';

import Companies from 'types/companiesType';
import Company from 'types/companyType';

export interface InformerContextProps {
  onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  searchCompanies: () => void;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  changeModalState: () => void;
  setSelectedCompany: React.Dispatch<React.SetStateAction<Companies>>;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
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
  searchCompanies: () => {},
  setCurrentPage: () => {},
  changeModalState: () => {},
  setSelectedCompany: () => {},
  setSearch: () => {},
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
