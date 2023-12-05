import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Testefront2Page } from './testefront2.page';

describe('Testefront2Page', () => {
  let component: Testefront2Page;
  let fixture: ComponentFixture<Testefront2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Testefront2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
