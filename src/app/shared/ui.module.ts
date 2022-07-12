import { NgModule } from '@angular/core';
import { FrameTitleComponent } from '@healthComponents/frame-title/frame-title.component';
import { FrameTitleModule } from '@healthComponents/frame-title/frame-title.module';
import { Information3Component } from '@healthComponents/information3/information3.component';
import { Information3Module } from '@healthComponents/information3/information3.module';
import { ProgramsComponent } from '@healthComponents/programs/programs.component';
import { ProgramsModule } from '@healthComponents/programs/programs.module';
import { InputTypeComponent } from 'stories/libs/Base/input-type/input-type.component';
import { InputTypeModule } from 'stories/libs/Base/input-type/input-type.modue';
import { LogoComponent } from 'stories/libs/Base/logo/logo.component';
import { LogoModule } from 'stories/libs/Base/logo/logo.module';
import { SelectResearchComponent } from 'stories/libs/Base/select-research/select-research.component';
import { SelectResearchModule } from 'stories/libs/Base/select-research/select-research.module';
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
  SelectResearchModule,
  FrameTitleModule,
  ProgramsModule,
  Information3Module,
];

const components = [
  FrameNumberComponent,
  IngredientListComponent,
  RecipeDescriptionComponent,
  LogoComponent,
  HorizontalGalleryComponent,
  InputTypeComponent,
  SelectResearchComponent,
  FrameTitleComponent,
  ProgramsComponent,
  Information3Component,
];

@NgModule({
  imports: modules,
  exports: components,
})
export class uiModule {}
