import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRecipeHomeComponent } from './view-recipe-home.component';

describe('ViewRecipeHomeComponent', () => {
  let component: ViewRecipeHomeComponent;
  let fixture: ComponentFixture<ViewRecipeHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRecipeHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRecipeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
