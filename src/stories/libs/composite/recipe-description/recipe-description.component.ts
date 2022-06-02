import { Component, Input, OnInit } from '@angular/core';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faSpoon } from '@fortawesome/free-solid-svg-icons';
import { faBurn } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: '[recipe-description]',
  templateUrl: './recipe-description.component.html',
  styleUrls: ['./recipe-description.component.scss'],
})
export class RecipeDescriptionComponent implements OnInit {
  constructor() {}
  faCoffee = faClock;
  faSpoon = faSpoon;
  faBurn = faBurn;

  @Input() time!: number;
  @Input() difficulty!: string;
  @Input() calories!: number;

  ngOnInit(): void {}
}
