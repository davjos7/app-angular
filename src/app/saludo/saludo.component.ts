import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.scss']
})
export class SaludoComponent {

  nombre : any;
  constructor (private route : ActivatedRoute){
    this.nombre = this.route.snapshot.paramMap.get('nombre')
  } 
}
