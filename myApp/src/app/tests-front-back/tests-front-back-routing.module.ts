import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestsFrontBackPage } from './tests-front-back.page';

const routes: Routes = [
  {
    path: '',
    component: TestsFrontBackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestsFrontBackPageRoutingModule {}
