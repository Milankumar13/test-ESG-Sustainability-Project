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
      firm: 'apple'
    },
    {
      id: 12,
      image: '/assets/companies/google.png',
      firm: 'google'
    },
    {
      id: 12,
      image: '/assets/companies/puma.png',
      firm: 'puma'
    },
    {
      id: 12,
      image: '/assets/companies/sap.png',
      firm: 'sap'
    },
    {
      id: 12,
      image: '/assets/companies/starbucks.png',
      firm: 'starbucks'
    },
    {
      id: 12,
      image: '/assets/companies/sap.png',
      firm: 'sap'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
