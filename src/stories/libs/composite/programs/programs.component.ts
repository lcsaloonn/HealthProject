import { Component, OnInit } from '@angular/core';
import { faArrowRight, faDumbbell } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: '[health-programs]',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss'],
})
export class ProgramsComponent implements OnInit {
  faDumbbell = faDumbbell;
  faArrow = faArrowRight;
  constructor() {}

  ngOnInit(): void {}
}
