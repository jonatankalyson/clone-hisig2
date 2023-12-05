import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Testefront1Page } from './testefront1.page';

describe('Testefront1Page', () => {
  let component: Testefront1Page;
  let fixture: ComponentFixture<Testefront1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Testefront1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
