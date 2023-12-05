import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarHorarioPage } from './editar-horario.page';

const routes: Routes = [
  {
    path: '',
    component: EditarHorarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarHorarioPageRoutingModule {}
