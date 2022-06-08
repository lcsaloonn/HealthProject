import { NgModule } from '@angular/core';
import { LogoComponent } from 'src/stories/libs/Base/logo/logo.component';
import { LogoModule } from 'src/stories/libs/Base/logo/logo.module';
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
  LogoModule,
];

const components = [
  FrameNumberComponent,
  IngredientListComponent,
  RecipeDescriptionComponent,
  LogoComponent,
];

@NgModule({
  imports: modules,
  exports: components,
})
export class uiModule {}
