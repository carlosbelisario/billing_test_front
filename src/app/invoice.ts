import {Client} from './client';
import {InvoiceDetail} from './invoice-detail';

export class Invoice {
    id: Number;
    number: String;
    client: Client;
    detail: InvoiceDetail[];
    iva: Number;
    total: Number;
}
