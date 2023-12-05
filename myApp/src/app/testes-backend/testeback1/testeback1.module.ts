import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Testeback1PageRoutingModule } from './testeback1-routing.module';
import { Testeback1Page } from './testeback1.page';

import { NavbarModule } from './../../navbar/navbar.module';
import { ReusableMenuModule } from './../../components/reusable-menu/reusable-menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Testeback1PageRoutingModule,
    NavbarModule,
    ReusableMenuModule
  ],
  declarations: [Testeback1Page]
})
export class Testeback1PageModule {}
