import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Classroom1PageRoutingModule } from './classroom1-routing.module';
import { Classroom1Page } from './classroom1.page';

import { NavbarModule } from './../../navbar/navbar.module';
import { ReusableMenuModule } from './../../components/reusable-menu/reusable-menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Classroom1PageRoutingModule,
    NavbarModule,
    ReusableMenuModule
  ],
  declarations: [Classroom1Page]
})
export class Classroom1PageModule {}
