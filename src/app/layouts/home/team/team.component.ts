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
      name: 'Maik Baum',
      image: '/assets/img/user/0.png',
    },
    {
      id: 12,
      name: 'Lisa Fink',
      image: '/assets/img/user/1.jpeg',
    },
    {
      id: 12,
      name: 'Nadine',
      image: '/assets/img/user/1.jpg',
    },
    {
      id: 12,
      name: 'Baumgartner',
      image: '/assets/img/user/3.png',
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
