import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TcePage } from './tce.page';

describe('TcePage', () => {
  let component: TcePage;
  let fixture: ComponentFixture<TcePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TcePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
