import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TcePageRoutingModule } from './tce-routing.module';

import { TCEPage } from './tce.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TcePageRoutingModule
  ],
  declarations: [TCEPage]
})
export class TcePageModule {}
