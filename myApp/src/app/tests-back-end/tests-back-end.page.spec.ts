import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestsBackEndPage } from './tests-back-end.page';

describe('TestsBackEndPage', () => {
  let component: TestsBackEndPage;
  let fixture: ComponentFixture<TestsBackEndPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TestsBackEndPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
