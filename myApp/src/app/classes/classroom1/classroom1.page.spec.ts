import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Classroom1Page } from './classroom1.page';

describe('Classroom1Page', () => {
  let component: Classroom1Page;
  let fixture: ComponentFixture<Classroom1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Classroom1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
