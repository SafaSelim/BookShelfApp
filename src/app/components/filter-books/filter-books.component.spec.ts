import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterBooksComponent } from './filter-books.component';

describe('FilterBooksComponent', () => {
  let component: FilterBooksComponent;
  let fixture: ComponentFixture<FilterBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterBooksComponent]
    });
    fixture = TestBed.createComponent(FilterBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
