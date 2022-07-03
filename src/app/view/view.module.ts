import { NgModule } from '@angular/core';
import { uiModule } from '../shared/ui.module';
import { ViewStartTrainingComponent } from './view-start-training/view-start-training.component';

//module de base à export
const modules = [uiModule];
@NgModule({
  imports: modules,
  exports: [...modules],
})
export class ViewModule {}
