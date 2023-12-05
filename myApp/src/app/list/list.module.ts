import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ListPageRoutingModule } from './list-routing.module';
import { FormsModule } from '@angular/forms';
import { ListPage } from './list.page';

import { NavbarModule } from './../navbar/navbar.module';
import { ReusableMenuModule } from './../components/reusable-menu/reusable-menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListPageRoutingModule,
    NavbarModule,
    ReusableMenuModule
  ],
  declarations: [ListPage]
})
export class ListPageModule {}
