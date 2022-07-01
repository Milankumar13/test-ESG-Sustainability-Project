import { Injectable } from '@angular/core';
import { companies } from '../app/data/companies-data';

interface Company {
  firm: String,
  stock_isin: String,
  sector: String,
  group: String,
  reports_page_link: String,
  description: String
}

@Injectable({
  providedIn: 'root'
})

export class DataService {

  companies: Company[] = companies; 

  constructor() { }

  _getCompaniesList(){
    return this.companies;
  }

  getCompany(stock_isin : string): Object{
    
    var company = {};
    for (let index = 0; index < this.companies.length; index++) {
      const element = this.companies[index];
      if (element.stock_isin == stock_isin){
        company = element;
        break;
      }
    }
    return company;
  }
}
