import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  teams: Array<any> = [
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
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
