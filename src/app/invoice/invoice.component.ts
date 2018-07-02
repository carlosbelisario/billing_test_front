import { Component, OnInit } from '@angular/core';
import {Invoice} from '../invoice';
import {InvoiceService} from '../invoice.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  invoice: Invoice;

  constructor(private invoiceService: InvoiceService) { }

  ngOnInit() {
    this.invoice = this.invoiceService.getInvoice(1);
  }

}
