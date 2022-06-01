import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  exports: [FormsModule, HttpClientModule, CommonModule],
  providers: [],
})
export class SharedModule {}
