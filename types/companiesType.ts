export default interface Companies {
  id: number;
  slug: string;
  name: string;
  industry: string;
  location: string;
  website: string;
  email: boolean;
  phone: boolean;
  idno: string;
  mobile: boolean;
  employees: string;
  turnover: number;
  creation_year: number;
  creation_date: string;
  status: string;
  partners: [];
  full_location: string;
}
