import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestsFrontEndPage } from './tests-front-end.page';

describe('TestsFrontEndPage', () => {
  let component: TestsFrontEndPage;
  let fixture: ComponentFixture<TestsFrontEndPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TestsFrontEndPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
