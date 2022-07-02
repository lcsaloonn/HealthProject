import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-type-select',
  templateUrl: './input-type-select.component.html',
  styleUrls: ['./input-type-select.component.scss'],
})
export class InputTypeSelectComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input()
  title!: string;

  @Input()
  isDisable = false;

  @Input()
  selectInfos!: string[];

  @Input()
  informationText!: string | null;
}
