import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Testeback3Page } from './testeback3.page';

const routes: Routes = [
  {
    path: '',
    component: Testeback3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Testeback3PageRoutingModule {}
