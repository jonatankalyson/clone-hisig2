import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuadroDeHorarioPage } from './quadro-de-horario.page';

describe('QuadroDeHorarioPage', () => {
  let component: QuadroDeHorarioPage;
  let fixture: ComponentFixture<QuadroDeHorarioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(QuadroDeHorarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
