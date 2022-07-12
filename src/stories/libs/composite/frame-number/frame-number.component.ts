import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[frame-number]',
  templateUrl: './frame-number.component.html',
  styleUrls: ['./frame-number.component.scss'],
})
export class FrameNumberComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input()
  title!: string;

  @Input()
  color!: string;
}
