import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Classroom5PageRoutingModule } from './classroom5-routing.module';
import { Classroom5Page } from './classroom5.page';

import { NavbarModule } from './../navbar/navbar.module';
import { ReusableMenuModule } from './../components/reusable-menu/reusable-menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Classroom5PageRoutingModule,
    NavbarModule,
    ReusableMenuModule
  ],
  declarations: [Classroom5Page]
})
export class Classroom5PageModule {}
