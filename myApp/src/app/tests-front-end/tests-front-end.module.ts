import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TestsFrontEndPageRoutingModule } from './tests-front-end-routing.module';
import { TestsFrontEndPage } from './tests-front-end.page';

import { NavbarModule } from './../navbar/navbar.module';
import { ReusableMenuModule } from './../components/reusable-menu/reusable-menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestsFrontEndPageRoutingModule,
    NavbarModule,
    ReusableMenuModule
  ],
  declarations: [TestsFrontEndPage]
})
export class TestsFrontEndPageModule {}
