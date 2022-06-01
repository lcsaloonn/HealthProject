import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IngredientListComponent } from './ingredient-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [IngredientListComponent],
  exports: [IngredientListComponent],
})
export class IngredientListModule {}
