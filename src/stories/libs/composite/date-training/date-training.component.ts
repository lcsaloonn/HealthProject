import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-training',
  templateUrl: './date-training.component.html',
  styleUrls: ['./date-training.component.scss'],
})
export class DateTrainingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.todayDate();
  }

  setDate() {
    const checkbox = <HTMLInputElement>document.getElementById('inputSetDate');
    const inputDate = <HTMLInputElement>document.getElementById('date');
    if (checkbox.checked === false) {
      inputDate.disabled = false;
    } else {
      this.todayDate();
      inputDate.disabled = true;
    }
  }

  todayDate() {
    const inputDate = <HTMLInputElement>document.getElementById('date');
    const date = new Date();
    inputDate.valueAsDate = date;
  }
}
