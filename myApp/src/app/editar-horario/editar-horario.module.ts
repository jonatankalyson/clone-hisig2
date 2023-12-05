import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarHorarioPageRoutingModule } from './editar-horario-routing.module';

import { EditarHorarioPage } from './editar-horario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarHorarioPageRoutingModule
  ],
  declarations: [EditarHorarioPage]
})
export class EditarHorarioPageModule {}
