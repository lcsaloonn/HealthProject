import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { ViewModule } from '../view.module';
import { ViewStartTrainingComponent } from './view-start-training.component';

@NgModule({
  declarations: [ViewStartTrainingComponent],
  imports: [
    SharedModule,
    ViewModule,
    RouterModule.forChild([
      { path: '', component: ViewStartTrainingComponent },
    ]),
  ],
  exports: [ViewStartTrainingComponent],
})
export class ViewStartTrainingModule {}
