import {Invoice} from '../invoice';

export interface Company {
    id: Number;
    name: String;
    invoice: Invoice[];
}
