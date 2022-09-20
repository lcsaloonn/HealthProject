import { Component, OnInit } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: '[health-information1]',
  templateUrl: './information1.component.html',
  styleUrls: ['./information1.component.scss'],
})
export class Information1Component implements OnInit {
  fatick = faCheck;
  constructor() {}

  ngOnInit(): void {}
}
