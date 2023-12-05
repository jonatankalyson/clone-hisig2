import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Classroom2Page } from './classroom2.page';

const routes: Routes = [
  {
    path: '',
    component: Classroom2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Classroom2PageRoutingModule {}
