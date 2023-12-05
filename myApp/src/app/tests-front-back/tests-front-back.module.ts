import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TestsFrontBackPageRoutingModule } from './tests-front-back-routing.module';
import { TestsFrontBackPage } from './tests-front-back.page';

import { NavbarModule } from './../navbar/navbar.module';
import { ReusableMenuModule } from './../components/reusable-menu/reusable-menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestsFrontBackPageRoutingModule,
    NavbarModule,
    ReusableMenuModule
  ],
  declarations: [TestsFrontBackPage]
})
export class TestsFrontBackPageModule {}
