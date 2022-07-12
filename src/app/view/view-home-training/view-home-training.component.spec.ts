import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHomeTrainingComponent } from './view-home-training.component';

describe('ViewHomeTrainingComponent', () => {
  let component: ViewHomeTrainingComponent;
  let fixture: ComponentFixture<ViewHomeTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewHomeTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHomeTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
