import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: '[health-input-type]',
  templateUrl: './input-type.component.html',
  styleUrls: ['./input-type.component.scss'],
})
export class InputTypeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input()
  title!: string;
  @Input()
  requiredField!: boolean;
  @Input()
  customText: string | null = '* champ obligatoire';
  @Output()
  sessionName!: string;

  sendName(event: Event) {
    const input = <HTMLInputElement>document.getElementById('sessionTitle');
    this.sessionName = input.value;
  }
}
