import { Component, OnInit } from '@angular/core';
import {CompanyService} from '../company.service';
import {Company} from '../company/Company';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {

  company: Company;

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
      this.company = this.companyService.getCompany(1);
  }
}
