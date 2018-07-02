import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CompanyComponent} from './company/company.component';
import {CompanyDetailComponent} from './company-detail/company-detail.component';
import {InvoiceComponent} from './invoice/invoice.component';

const routes: Routes = [
    {path: 'companies', component: CompanyComponent},
    {path: 'company/:id', component: CompanyDetailComponent},
    {path: 'invoice/:id', component: InvoiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
