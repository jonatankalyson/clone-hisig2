import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImersaoAgilPage } from './imersao-agil.page';

const routes: Routes = [
  {
    path: '',
    component: ImersaoAgilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImersaoAgilPageRoutingModule {}
