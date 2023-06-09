import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-felicitar',
  templateUrl: './felicitar.component.html',
  styleUrls: ['./felicitar.component.scss']
})
export class FelicitarComponent {
  nombre : any;
  apellido : any;
  constructor (private route : ActivatedRoute){
    this.nombre = this.route.snapshot.paramMap.get('nombre'),
    this.apellido = this.route.snapshot.paramMap.get('apellido')


  } 
}
