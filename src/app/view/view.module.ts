import { NgModule } from '@angular/core';
import { uiModule } from '../shared/ui.module';

//module de base à export
const modules = [uiModule];
@NgModule({
  declarations: [],
  imports: modules,
  exports: [...modules],
})
export class ViewModule {}
