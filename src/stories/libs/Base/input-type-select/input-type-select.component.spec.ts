import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTypeSelectComponent } from './input-type-select.component';

describe('InputTypeSelectComponent', () => {
  let component: InputTypeSelectComponent;
  let fixture: ComponentFixture<InputTypeSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputTypeSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTypeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
