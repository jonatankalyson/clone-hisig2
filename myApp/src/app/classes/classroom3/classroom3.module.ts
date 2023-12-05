import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Classroom3PageRoutingModule } from './classroom3-routing.module';
import { Classroom3Page } from './classroom3.page';


import { NavbarModule } from './../../navbar/navbar.module';
import { ReusableMenuModule } from './../../components/reusable-menu/reusable-menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Classroom3PageRoutingModule,
    NavbarModule,
    ReusableMenuModule
  ],
  declarations: [Classroom3Page]
})
export class Classroom3PageModule {}
