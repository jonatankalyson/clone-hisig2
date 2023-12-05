import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestsFrontEndPage } from './tests-front-end.page';

const routes: Routes = [
  {
    path: '',
    component: TestsFrontEndPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestsFrontEndPageRoutingModule {}
