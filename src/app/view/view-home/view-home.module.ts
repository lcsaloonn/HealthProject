import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ViewModule } from '../view.module';
import { ViewHomeComponent } from './view-home.component';

@NgModule({
  declarations: [ViewHomeComponent],
  imports: [
    SharedModule,
    ViewModule,
    RouterModule.forChild([{ path: '**', component: ViewHomeComponent }]),
  ],

  exports: [ViewHomeComponent],
})
export class ViewHomeModule {}
