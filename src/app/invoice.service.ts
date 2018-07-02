import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Invoice} from "./invoice";

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(httpService: HttpClient) { }

  getInvoice(id): Invoice {
    return {
      id: 1,
      number: '1',
      client: {name: 'test'},
      detail: [{product: 'test', price: 100, product_length: 2}],
      iva: 25,
      total: 125
    };
  }
}
