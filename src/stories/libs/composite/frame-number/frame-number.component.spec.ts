import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameNumberComponent } from './frame-number.component';

describe('FrameNumberComponent', () => {
  let component: FrameNumberComponent;
  let fixture: ComponentFixture<FrameNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrameNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
