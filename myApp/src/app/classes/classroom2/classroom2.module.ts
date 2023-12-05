import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Classroom2PageRoutingModule } from './classroom2-routing.module';
import { Classroom2Page } from './classroom2.page';


import { NavbarModule } from './../../navbar/navbar.module';
import { ReusableMenuModule } from './../../components/reusable-menu/reusable-menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Classroom2PageRoutingModule,
    NavbarModule,
    ReusableMenuModule
  ],
  declarations: [Classroom2Page]
})
export class Classroom2PageModule {}
