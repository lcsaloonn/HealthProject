import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[health-information3]',
  templateUrl: './information3.component.html',
  styleUrls: ['./information3.component.scss'],
})
export class Information3Component implements OnInit {
  statsArray = [
    {
      number: 140,
      title: 'EXPERT COACHES',
    },
    {
      number: 978,
      title: 'Members joined',
    },
    {
      number: 50,
      title: 'fitness programs',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
