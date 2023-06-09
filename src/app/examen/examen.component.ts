import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.scss']
})
export class ExamenComponent {
  imagen : string = '';





  constructor (private http : HttpClient){
    let listado = 'https://pokeapi.co/api/v2/pokemon/ditto';
    this.http.get(listado).subscribe(
      (data: any) =>{
        console.log(data);
      }
    )
  }

  buscar() {
    let pokeapi = 'https://pokeapi.co/api/v2/pokemon/ditto';

    this.http.get(pokeapi).subscribe(
      (data: any) =>{
        console.log(data);
        this.imagen =data.sprites.front_default;
      }
    )
  }

  saludar(){
    alert("holaaaaaaaaaaaa")
  }

 
}
