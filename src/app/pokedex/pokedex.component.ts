import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'; // sirve para que tu angular se conecte via api

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent {
  imagen : string = '';
  nombre : string = '';
  altura : string = '';
  peso : string = '';
  habilidade : string = '';
  movimiento : string = '';
  nombre_input : string = '';
  pokemones : any = [];


  constructor (private http : HttpClient){
    let listado = 'https://pokeapi.co/api/v2/pokemon?limit=200';
    this.http.get(listado).subscribe(
      (data: any) =>{
        console.log(data);
        this.pokemones = data.results;
      }
    )
  }


  buscar() {
    let pokeapi = 'https://pokeapi.co/api/v2/pokemon/'+this.nombre_input;

    this.http.get(pokeapi).subscribe(
      (data: any) =>{
        console.log(data);
        this.imagen =data.sprites.front_default;
        this.nombre =data.species.name;
        this.altura =data.height;
        this.peso =data.weight;
        this.habilidade =data.abilities[0].ability.name;
        this.movimiento =data.moves[0].move.name;
      }
    )
  }

  abrir(nombre: string){
    this.nombre_input = nombre;
    this.buscar();
  }
  
}
