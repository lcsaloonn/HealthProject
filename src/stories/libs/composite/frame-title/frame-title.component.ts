import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[health-frame-title]',
  templateUrl: './frame-title.component.html',
  styleUrls: ['./frame-title.component.scss'],
})
export class FrameTitleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input()
  title!: string;
}
