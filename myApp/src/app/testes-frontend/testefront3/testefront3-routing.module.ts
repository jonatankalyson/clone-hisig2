import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Testefront3Page } from './testefront3.page';

const routes: Routes = [
  {
    path: '',
    component: Testefront3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Testefront3PageRoutingModule {}
