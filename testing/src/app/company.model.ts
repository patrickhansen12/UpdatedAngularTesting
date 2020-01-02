export interface IProductionunit {
  pno: number;
  main: boolean;
  name: string;
  address: string;
  zipcode: number;
  city: string;
  cityname?: any;
  protected: boolean;
  phone: number;
  email: string;
  fax?: any;
  startdate: string;
  enddate?: any;
  employees?: any;
  addressco?: any;
  industrycode: number;
  industrydesc: string;
}

export interface ICompany {
  vat: number;
  name: string;
  address: string;
  zipcode: number;
  city: string;
  cityname?: any;
  protected: boolean;
  phone: number;
  email: string;
  fax?: any;
  startdate: string;
  enddate?: any;
  employees: string;
  addressco?: any;
  industrycode: number;
  industrydesc: string;
  companycode: number;
  companydesc: string;
  creditstartdate?: any;
  creditbankrupt: boolean;
  creditstatus?: any;
  owners?: any;
  productionunits: IProductionunit[];
  t: number;
  version: number;
}
