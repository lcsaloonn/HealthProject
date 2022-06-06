import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContentfulService } from './services/contentful/contentful.service';

@NgModule({
  exports: [FormsModule, HttpClientModule, CommonModule, FontAwesomeModule],
  providers: [ContentfulService],
})
export class SharedModule {}
