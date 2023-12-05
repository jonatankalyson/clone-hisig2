import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuadroDeHorarioPage } from './quadro-de-horario.page';

const routes: Routes = [
  {
    path: '',
    component: QuadroDeHorarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuadroDeHorarioPageRoutingModule {}
