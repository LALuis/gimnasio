import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-dia-selector',
  templateUrl: './dia-selector.component.html',
  styleUrls: ['./dia-selector.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class DiaSelectorComponent implements OnInit {
  @Output() diaSeleccionado = new EventEmitter<string>();

  public actionSheetButtons = [
    {
      text: 'Lunes',
      data: {
        action: 'share',
      },
    },
    {
      text: 'Martes',
      data: {
        action: 'share',
      },
    },
    {
      text: 'Miercoles',
      data: {
        action: 'share',
      },
    },
    {
      text: 'Jueves',
      data: {
        action: 'share',
      },
    },
    {
      text: 'Viernes',
      data: {
        action: 'share',
      },
    },
    {
      text: 'Sabado',
      data: {
        action: 'share',
      },
    },
    {
      text: 'Domingo',
      data: {
        action: 'share',
      },
    },
  ];

  constructor() {}

  ngOnInit() {}

  onDiaSeleccionado(dia: any): void {
    this.diaSeleccionado.emit(dia);
  }
}
