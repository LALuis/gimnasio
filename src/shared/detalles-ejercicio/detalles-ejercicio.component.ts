import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-detalles-ejercicio',
  templateUrl: './detalles-ejercicio.component.html',
  styleUrls: ['./detalles-ejercicio.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class DetallesEjercicioComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
