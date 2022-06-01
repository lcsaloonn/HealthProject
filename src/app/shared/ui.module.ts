import { NgModule } from '@angular/core';
import { FrameNumberComponent } from 'src/stories/libs/composite/frame-number/frame-number.component';
import { FrameNumberModule } from 'src/stories/libs/composite/frame-number/frame-number.module';
import { IngredientListComponent } from 'src/stories/libs/composite/ingredient-list/ingredient-list.component';
import { IngredientListModule } from 'src/stories/libs/composite/ingredient-list/ingredient-list.module';

const modules = [FrameNumberModule, IngredientListModule];

const components = [FrameNumberComponent, IngredientListComponent];

@NgModule({
  imports: modules,
  exports: components,
})
export class uiModule {}
