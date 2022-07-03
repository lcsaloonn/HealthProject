import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { InputTypeComponent } from './input-type.component';

describe('InputTypeComponent', () => {
  let component: InputTypeComponent;
  let fixture: ComponentFixture<InputTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputTypeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display required field if requiredField is true', () => {
    component.requiredField = true;
    fixture.detectChanges();
    const custom = fixture.debugElement.query(By.css('[data-testId=custom]'));
    expect(custom).toBeTruthy();
  });

  it('should not display required field when requiredField is false', () => {
    component.requiredField = false;
    fixture.detectChanges();
    const custom = fixture.debugElement.query(By.css('[data-testId=custom]'));
    expect(custom).not.toBeTruthy();
  });

  it('should display default indication when customText is null or empty', () => {
    component.requiredField = true;
    fixture.detectChanges();
    const custom = fixture.debugElement.query(
      By.css('[data-testId=custom]')
    ).nativeElement;
    expect(custom.textContent).toEqual('* champ obligatoire');
  });
  it('should display custom text if theire is one ', () => {
    component.requiredField = true;
    component.customText = 'test de custom';
    fixture.detectChanges();
    const custom = fixture.debugElement.query(
      By.css('[data-testId=custom]')
    ).nativeElement;
    expect(custom.textContent).toEqual(component.customText);
  });
});
