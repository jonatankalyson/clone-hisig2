import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Classroom3Page } from './classroom3.page';

describe('Classroom3Page', () => {
  let component: Classroom3Page;
  let fixture: ComponentFixture<Classroom3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Classroom3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
