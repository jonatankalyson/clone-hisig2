import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TesteListPage } from './teste-list.page';

const routes: Routes = [
  {
    path: '',
    component: TesteListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TesteListPageRoutingModule {}
