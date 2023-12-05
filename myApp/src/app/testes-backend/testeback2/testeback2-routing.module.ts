import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Testeback2Page } from './testeback2.page';

const routes: Routes = [
  {
    path: '',
    component: Testeback2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Testeback2PageRoutingModule {}
