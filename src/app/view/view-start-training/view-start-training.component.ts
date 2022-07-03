import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-start-training',
  templateUrl: './view-start-training.component.html',
  styleUrls: ['./view-start-training.component.scss'],
})
export class ViewStartTrainingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  inputTypeData = {
    title: 'Nom de votre Séance',
    requiredField: true,
  };
}
