import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Testefront2Page } from './testefront2.page';

const routes: Routes = [
  {
    path: '',
    component: Testefront2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Testefront2PageRoutingModule {}
