import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectResearchComponent } from './select-research.component';

describe('InputSelectResearchComponent', () => {
  let component: SelectResearchComponent;
  let fixture: ComponentFixture<SelectResearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectResearchComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectResearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
