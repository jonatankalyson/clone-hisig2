import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CheckPointComponent } from './check-point.component';
import { NavbarModule } from '../../navbar/navbar.module';

@NgModule({
  declarations: [CheckPointComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    NavbarModule
  ],
  exports: [CheckPointComponent]
})
export class CheckPointModule { }
