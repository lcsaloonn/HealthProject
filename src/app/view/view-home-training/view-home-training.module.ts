import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { ViewModule } from '../view.module';
import { ViewHomeTrainingComponent } from './view-home-training.component';

@NgModule({
  declarations: [ViewHomeTrainingComponent],
  imports: [
    SharedModule,
    ViewModule,
    RouterModule.forChild([
      { path: '**', component: ViewHomeTrainingComponent },
    ]),
  ],
  exports: [ViewHomeTrainingComponent],
})
export class ViewHomeTrainingModule {}
