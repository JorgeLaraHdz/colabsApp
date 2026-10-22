import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddColabPage } from './add-colab.page';

describe('AddColabPage', () => {
  let component: AddColabPage;
  let fixture: ComponentFixture<AddColabPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddColabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
