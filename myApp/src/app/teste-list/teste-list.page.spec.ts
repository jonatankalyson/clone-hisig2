import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TesteListPage } from './teste-list.page';

describe('TesteListPage', () => {
  let component: TesteListPage;
  let fixture: ComponentFixture<TesteListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TesteListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
