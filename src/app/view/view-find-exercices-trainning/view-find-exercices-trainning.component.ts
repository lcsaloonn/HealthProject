import { Component, OnInit } from '@angular/core';
import { mockExercices } from 'app/shared/mocks/exercices.mock';

@Component({
  selector: 'app-view-find-exercices-trainning',
  templateUrl: './view-find-exercices-trainning.component.html',
  styleUrls: ['./view-find-exercices-trainning.component.scss'],
})
export class ViewFindExercicesTrainningComponent implements OnInit {
  constructor() {}
  exercicesRealize!: [];
  exercicesList = mockExercices;

  ngOnInit(): void {}
}
