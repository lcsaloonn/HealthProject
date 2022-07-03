import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStartTrainingComponent } from './view-start-training.component';

describe('ViewStartTrainingComponent', () => {
  let component: ViewStartTrainingComponent;
  let fixture: ComponentFixture<ViewStartTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewStartTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewStartTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
