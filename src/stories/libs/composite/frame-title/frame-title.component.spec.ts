import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameTitleComponent } from './frame-title.component';

describe('FrameTitleComponent', () => {
  let component: FrameTitleComponent;
  let fixture: ComponentFixture<FrameTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrameTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
