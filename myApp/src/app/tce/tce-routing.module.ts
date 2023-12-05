import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TCEPage } from './tce.page';

const routes: Routes = [
  {
    path: '',
    component: TCEPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TcePageRoutingModule {}
