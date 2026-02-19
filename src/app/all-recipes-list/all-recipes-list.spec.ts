import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRecipesList } from './all-recipes-list';

describe('AllRecipesList', () => {
  let component: AllRecipesList;
  let fixture: ComponentFixture<AllRecipesList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllRecipesList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllRecipesList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
