import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  companies : Array<any> = [
    {
      id: 12,
      image: '/assets/companies/apple.png',
    },
    {
      id: 12,
      image: '/assets/companies/google.png',
    },
    {
      id: 12,
      image: '/assets/companies/puma.png',
    },
    {
      id: 12,
      image: '/assets/companies/sap.png',
    },
    {
      id: 12,
      image: '/assets/companies/starbucks.png',
    },
    {
      id: 12,
      image: '/assets/companies/sap.png',
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
