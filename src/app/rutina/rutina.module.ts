import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RutinaPageRoutingModule } from './rutina-routing.module';

import { RutinaPage } from './rutina.page';
import { DiaSelectorComponent } from 'src/shared/dia-selector/dia-selector.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RutinaPageRoutingModule,
    DiaSelectorComponent
  ],
  declarations: [RutinaPage]
})
export class RutinaPageModule {}
