import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RutinaPage } from './rutina.page';
import { DetallesEjercicioComponent } from '../../shared/detalles-ejercicio/detalles-ejercicio.component';

const routes: Routes = [
  {
    path: '',
    component: RutinaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), DetallesEjercicioComponent],
  exports: [RouterModule],
})
export class RutinaPageRoutingModule {}
