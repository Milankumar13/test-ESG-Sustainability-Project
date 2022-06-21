import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.css']
})
export class CompaniesListComponent implements OnInit {

  companies: Array<any> = [
    {
      id: 12,
      image: '/assets/companies/apple.png',
      name: 'apple'
    },
    {
      id: 12,
      image: '/assets/companies/google.png',
      name: 'google'
    },
    {
      id: 12,
      image: '/assets/companies/puma.png',
      name: 'puma'
    },
    {
      id: 12,
      image: '/assets/companies/sap.png',
      name: 'sap'
    },
    {
      id: 12,
      image: '/assets/companies/starbucks.png',
      name: 'starbucks'
    },
    {
      id: 12,
      image: '/assets/companies/sap.png',
      name: 'sap'
    },
    {
      id: 12,
      image: '/assets/companies/apple.png',
      name: 'apple'
    },
    {
      id: 12,
      image: '/assets/companies/google.png',
      name: 'google'
    },
    {
      id: 12,
      image: '/assets/companies/puma.png',
      name: 'puma'
    },
    {
      id: 12,
      image: '/assets/companies/sap.png',
      name: 'sap'
    },
    {
      id: 12,
      image: '/assets/companies/puma.png',
      name: 'puma'
    },
    {
      id: 12,
      image: '/assets/companies/sap.png',
      name: 'sap'
    },
    {
      id: 12,
      image: '/assets/companies/starbucks.png',
      name: 'starbucks'
    },
    {
      id: 12,
      image: '/assets/companies/sap.png',
      name: 'sap'
    },
    {
      id: 12,
      image: '/assets/companies/apple.png',
      name: 'apple'
    },
    {
      id: 12,
      image: '/assets/companies/google.png',
      name: 'google'
    },
    {
      id: 12,
      image: '/assets/companies/puma.png',
      name: 'puma'
    },
    {
      id: 12,
      image: '/assets/companies/sap.png',
      name: 'sap'
    }   
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
