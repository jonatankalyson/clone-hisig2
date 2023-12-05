import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavbarModule } from './../navbar/navbar.module';
import { ReusableMenuModule } from './../components/reusable-menu/reusable-menu.module';

import { QuadroDeHorarioPageRoutingModule } from './quadro-de-horario-routing.module';
import { QuadroDeHorarioPage } from './quadro-de-horario.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuadroDeHorarioPageRoutingModule,
    NavbarModule,
    ReusableMenuModule
  ],
  declarations: [QuadroDeHorarioPage]
})
export class QuadroDeHorarioPageModule {}
