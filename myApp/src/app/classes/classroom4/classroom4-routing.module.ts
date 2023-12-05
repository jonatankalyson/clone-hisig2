import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Classroom4Page } from './classroom4.page';

const routes: Routes = [
  {
    path: '',
    component: Classroom4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Classroom4PageRoutingModule {}
