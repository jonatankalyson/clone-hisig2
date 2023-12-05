import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Classroom4Page } from './classroom4.page';

describe('Classroom4Page', () => {
  let component: Classroom4Page;
  let fixture: ComponentFixture<Classroom4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Classroom4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
