import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ReusableMenuComponent } from './reusable-menu.component';
import { NavbarModule } from '../../navbar/navbar.module';

@NgModule({
  declarations: [ReusableMenuComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    NavbarModule
  ],
  exports: [ReusableMenuComponent]
})
export class ReusableMenuModule { }
