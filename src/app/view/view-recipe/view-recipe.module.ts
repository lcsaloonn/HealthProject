import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { IngredientListModule } from 'stories/libs/composite/ingredient-list/ingredient-list.module';
import { ViewModule } from '../view.module';
import { ViewRecipeComponent } from './view-recipe.component';

@NgModule({
  declarations: [ViewRecipeComponent],
  imports: [
    SharedModule,
    ViewModule,
    RouterModule.forChild([{ path: '**', component: ViewRecipeComponent }]),
  ],
  exports: [ViewRecipeComponent],
})
export class ViewRecipeModule {}
