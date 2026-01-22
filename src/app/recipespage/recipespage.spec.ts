import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Recipespage } from './recipespage';

describe('Recipespage', () => {
  let component: Recipespage;
  let fixture: ComponentFixture<Recipespage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Recipespage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Recipespage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
