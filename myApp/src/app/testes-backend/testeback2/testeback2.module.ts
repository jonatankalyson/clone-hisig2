import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Testeback2PageRoutingModule } from './testeback2-routing.module';
import { Testeback2Page } from './testeback2.page';

import { NavbarModule } from './../../navbar/navbar.module';
import { ReusableMenuModule } from './../../components/reusable-menu/reusable-menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Testeback2PageRoutingModule,
    NavbarModule,
    ReusableMenuModule
  ],
  declarations: [Testeback2Page]
})
export class Testeback2PageModule {}
