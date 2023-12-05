import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestsFrontBackPage } from './tests-front-back.page';

describe('TestsFrontBackPage', () => {
  let component: TestsFrontBackPage;
  let fixture: ComponentFixture<TestsFrontBackPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TestsFrontBackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
