import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Classroom1Page } from './classroom1.page';


const routes: Routes = [
  {
    path: '',
    component: Classroom1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Classroom1PageRoutingModule {}
