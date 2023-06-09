import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent {
  gatos : any = [
    { nombre : "Gato Uno", descripcion: "es un gato gordo"},
    { nombre : "Gato Dos", descripcion: "es un gato desnutrido"},
    { nombre : "Gato Tres", descripcion: "es un gato gordo"},
  ]
}
