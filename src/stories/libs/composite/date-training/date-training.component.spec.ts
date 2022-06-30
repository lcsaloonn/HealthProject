import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DateTrainingComponent } from './date-training.component';

fdescribe('DateTrainingComponent', () => {
  let component: DateTrainingComponent;
  let fixture: ComponentFixture<DateTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DateTrainingComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should put the correct date in the input', () => {
    const date = fixture.debugElement.query(
      By.css('[data-testId=inputDate]')
    ).nativeElement;
    const todayDate = new Date();
    expect(date.valueAsDate.toString().slice(0, 15)).toEqual(
      todayDate.toString().slice(0, 15)
    );
  });

  it('should called todatDate when init', () => {
    expect(component.todayDate).toHaveBeenCalled;
  });

  it('should not disable the input date when checkbox is false', () => {
    const checkbox = fixture.debugElement.query(
      By.css('[data-testId=checkboxToday]')
    ).nativeElement;
    const input = fixture.debugElement.query(
      By.css('[data-testId=inputDate]')
    ).nativeElement;
    checkbox.checked = false;
    component.setDate();
    expect(input.disabled).toBe(false);
  });

  it('should disable the input date when checkbox is true', () => {
    const checkbox = fixture.debugElement.query(
      By.css('[data-testId=checkboxToday]')
    ).nativeElement;
    const input = fixture.debugElement.query(
      By.css('[data-testId=inputDate]')
    ).nativeElement;
    checkbox.checked = true;
    component.setDate();
    expect(input.disabled).toBe(true);
    expect(component.todayDate).toHaveBeenCalled;
  });
});
