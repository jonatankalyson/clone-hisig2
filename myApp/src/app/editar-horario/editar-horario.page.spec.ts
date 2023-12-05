import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarHorarioPage } from './editar-horario.page';

describe('EditarHorarioPage', () => {
  let component: EditarHorarioPage;
  let fixture: ComponentFixture<EditarHorarioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditarHorarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
