import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Testefront3Page } from './testefront3.page';

describe('Testefront3Page', () => {
  let component: Testefront3Page;
  let fixture: ComponentFixture<Testefront3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Testefront3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
