import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms'; 

import { TrilhasPageRoutingModule } from './trilhas-routing.module';
import { TrilhasPage } from './trilhas.page';

import { NavbarModule } from './../navbar/navbar.module';
import { ReusableMenuModule } from './../components/reusable-menu/reusable-menu.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule, 
    TrilhasPageRoutingModule,
    NavbarModule,
    ReusableMenuModule
  ],
  declarations: [TrilhasPage]
})
export class TrilhasPageModule {}
