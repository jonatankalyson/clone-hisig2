import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Testeback2Page } from './testeback2.page';

describe('Testeback2Page', () => {
  let component: Testeback2Page;
  let fixture: ComponentFixture<Testeback2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Testeback2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
