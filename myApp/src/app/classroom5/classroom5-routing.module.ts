import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Classroom5Page } from './classroom5.page';

const routes: Routes = [
  {
    path: '',
    component: Classroom5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Classroom5PageRoutingModule {}
