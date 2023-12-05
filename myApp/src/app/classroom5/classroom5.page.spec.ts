import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Classroom5Page } from './classroom5.page';

describe('Classroom5Page', () => {
  let component: Classroom5Page;
  let fixture: ComponentFixture<Classroom5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Classroom5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
