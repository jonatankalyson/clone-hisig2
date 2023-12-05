import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CreateTaskPageRoutingModule } from './create-task-routing.module';
import { CreateTaskPage } from './create-task.page';

import { NavbarModule } from './../navbar/navbar.module';
import { ReusableMenuModule } from './../components/reusable-menu/reusable-menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateTaskPageRoutingModule,
    NavbarModule,
    ReusableMenuModule
  ],
  declarations: [CreateTaskPage]
})
export class CreateTaskPageModule {}
