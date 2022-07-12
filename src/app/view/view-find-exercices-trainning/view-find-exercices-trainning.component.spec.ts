import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFindExercicesTrainningComponent } from './view-find-exercices-trainning.component';

describe('ViewFindExercicesTrainningComponent', () => {
  let component: ViewFindExercicesTrainningComponent;
  let fixture: ComponentFixture<ViewFindExercicesTrainningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFindExercicesTrainningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFindExercicesTrainningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
