import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Testefront1Page } from './testefront1.page';

const routes: Routes = [
  {
    path: '',
    component: Testefront1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Testefront1PageRoutingModule {}
