import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Classroom2Page } from './classroom2.page';

describe('Classroom2Page', () => {
  let component: Classroom2Page;
  let fixture: ComponentFixture<Classroom2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Classroom2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
