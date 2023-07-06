import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewsCategoriesPage } from './news-categories.page';

describe('NewsCategoriesPage', () => {
  let component: NewsCategoriesPage;
  let fixture: ComponentFixture<NewsCategoriesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NewsCategoriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
