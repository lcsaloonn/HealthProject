import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { ViewModule } from '../view.module';
import { ViewFindExercicesTrainningComponent } from './view-find-exercices-trainning.component';

@NgModule({
  declarations: [ViewFindExercicesTrainningComponent],
  imports: [
    SharedModule,
    ViewModule,
    RouterModule.forChild([
      {
        path: '',
        component: ViewFindExercicesTrainningComponent,
      },
    ]),
  ],
  exports: [ViewFindExercicesTrainningComponent],
})
export class ViewFindExercicesTrainningModule {}
