import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TesteListPageRoutingModule } from './teste-list-routing.module';
import { TesteListPage } from './teste-list.page';

import { NavbarModule } from './../navbar/navbar.module';
import { ReusableMenuModule } from './../components/reusable-menu/reusable-menu.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TesteListPageRoutingModule,
    NavbarModule,
    ReusableMenuModule
  ],
  declarations: [TesteListPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class TesteListPageModule {}
