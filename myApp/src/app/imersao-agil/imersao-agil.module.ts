import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ImersaoAgilPageRoutingModule } from './imersao-agil-routing.module';
import { ImersaoAgilPage } from './imersao-agil.page';

import { NavbarModule } from './../navbar/navbar.module';
import { ReusableMenuModule } from './../components/reusable-menu/reusable-menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImersaoAgilPageRoutingModule,
    NavbarModule,
    ReusableMenuModule
  ],
  declarations: [ImersaoAgilPage]
})
export class ImersaoAgilPageModule {}
