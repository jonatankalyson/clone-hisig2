import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExerciciosPageRoutingModule } from './exercicios-routing.module';

import { ExerciciosPage } from './exercicios.page';

import { NavbarModule } from './../navbar/navbar.module';
import { ReusableMenuModule } from './../components/reusable-menu/reusable-menu.module';

import { ExercicioFrontendComponent } from '../components/exercicios/exercicio-frontend/exercicio-frontend.component';
import { Exercicio1Component } from '../components/exercicios/exercicio1/exercicio1.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExerciciosPageRoutingModule,
    NavbarModule,
    ReusableMenuModule
  ],
  declarations: [
    ExerciciosPage,
    ExercicioFrontendComponent,
    Exercicio1Component
  ]
})
export class ExerciciosPageModule {}
