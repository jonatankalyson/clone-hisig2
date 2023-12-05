import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Testeback1Page } from './testeback1.page';

const routes: Routes = [
  {
    path: '',
    component: Testeback1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Testeback1PageRoutingModule {}
