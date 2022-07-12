import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProgramsComponent } from './programs.component';

@NgModule({
  declarations: [ProgramsComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [ProgramsComponent],
})
export class ProgramsModule {}
