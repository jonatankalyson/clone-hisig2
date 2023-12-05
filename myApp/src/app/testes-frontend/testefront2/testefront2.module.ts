import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Testefront2PageRoutingModule } from './testefront2-routing.module';
import { Testefront2Page } from './testefront2.page';

import { NavbarModule } from './../../navbar/navbar.module';
import { ReusableMenuModule } from './../../components/reusable-menu/reusable-menu.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Testefront2PageRoutingModule,
    NavbarModule,
    ReusableMenuModule
  ],
  declarations: [Testefront2Page]
})
export class Testefront2PageModule {}
