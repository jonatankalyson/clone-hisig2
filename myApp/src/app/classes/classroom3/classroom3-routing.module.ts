import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Classroom3Page } from './classroom3.page';

const routes: Routes = [
  {
    path: '',
    component: Classroom3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Classroom3PageRoutingModule {}
