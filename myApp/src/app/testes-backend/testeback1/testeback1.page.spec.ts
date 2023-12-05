import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Testeback1Page } from './testeback1.page';

describe('Testeback1Page', () => {
  let component: Testeback1Page;
  let fixture: ComponentFixture<Testeback1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Testeback1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
