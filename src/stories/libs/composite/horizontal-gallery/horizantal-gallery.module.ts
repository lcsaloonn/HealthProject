import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HorizontalGalleryComponent } from './horizontal-gallery.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [HorizontalGalleryComponent],
  exports: [HorizontalGalleryComponent],
})
export class HorizontalGalleryModule {}
