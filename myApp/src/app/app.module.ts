import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HorarioService } from './api/horario.service';
import { TesteService  } from './api/teste.service';
import { ListService } from './api/list.service';
import { ReusableMenuModule } from './components/reusable-menu/reusable-menu.module';
import { CheckPointModule } from './components/check-point/check-point.module';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule, MatInputModule,  MatFormFieldModule, ReusableMenuModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    HorarioService, ListService, TesteService
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
