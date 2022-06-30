import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { ViewModule } from '../view.module';
import { ViewRecipeHomeComponent } from './view-recipe-home.component';

@NgModule({
  declarations: [ViewRecipeHomeComponent],
  imports: [
    SharedModule,
    ViewModule,
    RouterModule.forChild([{ path: '', component: ViewRecipeHomeComponent }]),
  ],
  exports: [ViewRecipeHomeComponent],
})
export class ViewRecipeHomeModule {}
