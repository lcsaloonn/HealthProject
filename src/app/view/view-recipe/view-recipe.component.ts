import { Component, OnInit } from '@angular/core';
import { Iingredient } from 'src/interface/ingredient.interface';

@Component({
  selector: '[view-recipe]',
  templateUrl: './view-recipe.component.html',
  styleUrls: ['./view-recipe.component.scss'],
})
export class ViewRecipeComponent implements OnInit {
  constructor() {}

  title: string[] = ['Ingrédient', 'Étape'];
  ngOnInit(): void {}

  mock: Iingredient[] = [
    {
      name: 'Tomate',
      quantity: 5,
      quantityValue: 'kg',
      description: '',
    },
    {
      name: 'Chou',
      quantity: 5,
      quantityValue: 'kg',
      description: '',
    },
    {
      name: 'Patate',
      quantity: 5,
      quantityValue: 'kg',
      description: 'couper en rondelle',
    },
    {
      name: 'Tomate',
      quantity: 5,
      quantityValue: 'kg',
      description: '',
    },
  ];
}
