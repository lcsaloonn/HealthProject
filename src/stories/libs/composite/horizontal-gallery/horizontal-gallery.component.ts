import { Component, Input, OnInit } from '@angular/core';
import { IImage } from 'interface/image.interface';

@Component({
  selector: '[horizontal-gallery]',
  templateUrl: './horizontal-gallery.component.html',
  styleUrls: ['./horizontal-gallery.component.scss'],
})
export class HorizontalGalleryComponent implements OnInit {
  @Input() cards!: IImage[];
  constructor() {}

  ngOnInit(): void {}
}
