import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TestsBackEndPageRoutingModule } from './tests-back-end-routing.module';
import { TestsBackEndPage } from './tests-back-end.page';

import { NavbarModule } from './../navbar/navbar.module';
import { ReusableMenuModule } from './../components/reusable-menu/reusable-menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestsBackEndPageRoutingModule,
    NavbarModule,
    ReusableMenuModule
  ],
  declarations: [TestsBackEndPage]
})
export class TestsBackEndPageModule {}
