import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-despedirse',
  templateUrl: './despedirse.component.html',
  styleUrls: ['./despedirse.component.scss']
})
export class DespedirseComponent {
  nombre : any;
  constructor (private route : ActivatedRoute){
    this.nombre = this.route.snapshot.paramMap.get('nombre')
  } 
}
