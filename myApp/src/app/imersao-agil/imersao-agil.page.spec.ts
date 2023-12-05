import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImersaoAgilPage } from './imersao-agil.page';

describe('ImersaoAgilPage', () => {
  let component: ImersaoAgilPage;
  let fixture: ComponentFixture<ImersaoAgilPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ImersaoAgilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
