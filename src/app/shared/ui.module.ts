import { NgModule } from '@angular/core';
import { FrameNumberComponent } from 'src/stories/libs/composite/frame-number/frame-number.component';
import { FrameNumberModule } from 'src/stories/libs/composite/frame-number/frame-number.module';
import { IngredientListComponent } from 'src/stories/libs/composite/ingredient-list/ingredient-list.component';
import { IngredientListModule } from 'src/stories/libs/composite/ingredient-list/ingredient-list.module';
import { RecipeDescriptionComponent } from 'src/stories/libs/composite/recipe-description/recipe-description.component';
import { RecipeDescriptionModule } from 'src/stories/libs/composite/recipe-description/recipe-description.module';

const modules = [
  FrameNumberModule,
  IngredientListModule,
  RecipeDescriptionModule,
];

const components = [
  FrameNumberComponent,
  IngredientListComponent,
  RecipeDescriptionComponent,
];

@NgModule({
  imports: modules,
  exports: components,
})
export class uiModule {}
