import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Testeback3PageRoutingModule } from './testeback3-routing.module';
import { Testeback3Page } from './testeback3.page';

import { NavbarModule } from './../../navbar/navbar.module';
import { ReusableMenuModule } from './../../components/reusable-menu/reusable-menu.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Testeback3PageRoutingModule,
    NavbarModule,
    ReusableMenuModule
  ],
  declarations: [Testeback3Page]
})
export class Testeback3PageModule {}
