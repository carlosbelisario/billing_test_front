import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Company} from './company/Company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private httpClient: HttpClient) { }

  getCompanies(): Company[] {
      return [{id: 1,   name: 'test', invoice: []}];
  }

  getCompany(id): Company {
    return {
        id: 1,
        name: 'test',
        invoice: [{
            id: 1,
            number: '1',
            client: {name: 'test'},
            detail: [{product: 'test', price: 100, product_length: 2}],
            iva: 25,
            total: 125
        }]
    };
  }
}
