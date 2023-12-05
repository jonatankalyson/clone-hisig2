import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Testefront1PageRoutingModule } from './testefront1-routing.module';
import { Testefront1Page } from './testefront1.page';

import { NavbarModule } from './../../navbar/navbar.module';
import { ReusableMenuModule } from './../../components/reusable-menu/reusable-menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Testefront1PageRoutingModule,
    NavbarModule,
    ReusableMenuModule
  ],
  declarations: [Testefront1Page]
})
export class Testefront1PageModule {}
