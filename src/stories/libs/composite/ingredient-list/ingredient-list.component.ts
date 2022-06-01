import { Component, Input, OnInit } from '@angular/core';
import { Iingredient } from 'src/interface/ingredient.interface';

@Component({
  selector: '[ingredient-list]',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.scss'],
})
export class IngredientListComponent implements OnInit {
  constructor() {}

  @Input()
  ingredients: Iingredient[] = [];

  ngOnInit(): void {}
}
