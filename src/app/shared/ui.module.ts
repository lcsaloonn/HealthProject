import { NgModule } from '@angular/core';
import { InputTypeComponent } from 'stories/libs/Base/input-type/input-type.component';
import { InputTypeModule } from 'stories/libs/Base/input-type/input-type.modue';
import { LogoComponent } from 'stories/libs/Base/logo/logo.component';
import { LogoModule } from 'stories/libs/Base/logo/logo.module';
import { FrameNumberComponent } from 'stories/libs/composite/frame-number/frame-number.component';
import { FrameNumberModule } from 'stories/libs/composite/frame-number/frame-number.module';
import { HorizontalGalleryModule } from 'stories/libs/composite/horizontal-gallery/horizantal-gallery.module';
import { HorizontalGalleryComponent } from 'stories/libs/composite/horizontal-gallery/horizontal-gallery.component';
import { IngredientListComponent } from 'stories/libs/composite/ingredient-list/ingredient-list.component';
import { IngredientListModule } from 'stories/libs/composite/ingredient-list/ingredient-list.module';
import { RecipeDescriptionComponent } from 'stories/libs/composite/recipe-description/recipe-description.component';
import { RecipeDescriptionModule } from 'stories/libs/composite/recipe-description/recipe-description.module';

const modules = [
  FrameNumberModule,
  IngredientListModule,
  RecipeDescriptionModule,
  LogoModule,
  HorizontalGalleryModule,
  InputTypeModule,
];

const components = [
  FrameNumberComponent,
  IngredientListComponent,
  RecipeDescriptionComponent,
  LogoComponent,
  HorizontalGalleryComponent,
  InputTypeComponent,
];

@NgModule({
  imports: modules,
  exports: components,
})
export class uiModule {}
