import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RecipeDescriptionComponent } from './recipe-description.component';

@NgModule({
  imports: [CommonModule, FontAwesomeModule],
  declarations: [RecipeDescriptionComponent],
  exports: [RecipeDescriptionComponent],
})
export class RecipeDescriptionModule {}
