import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Testefront3PageRoutingModule } from './testefront3-routing.module';
import { Testefront3Page } from './testefront3.page';

import { NavbarModule } from './../../navbar/navbar.module';
import { ReusableMenuModule } from './../../components/reusable-menu/reusable-menu.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Testefront3PageRoutingModule,
    NavbarModule,
    ReusableMenuModule
  ],
  declarations: [Testefront3Page]
})
export class Testefront3PageModule {}
