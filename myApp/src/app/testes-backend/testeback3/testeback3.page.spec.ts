import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Testeback3Page } from './testeback3.page';

describe('Testeback3Page', () => {
  let component: Testeback3Page;
  let fixture: ComponentFixture<Testeback3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Testeback3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
