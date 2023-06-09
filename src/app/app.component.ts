import { Component } from '@angular/core';
// Importamos el Módulo que permitira hacer consultas
import {HttpClient} from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
//
  
}


  // clientes : any = [];
  // trabajadores : any = [];

  // constructor(private http: HttpClient){

  //   let clientes_url = 'http://localhost:8000/api/clientes'


  //   this.http.get(clientes_url).subscribe((data) => {
  //     console.log('clientes', data);
  //     this.clientes = data;


  //   })

  //   let trabajadores_url = 'http://localhost:8000/api/trabajadores'
      
  //   this.http.get(trabajadores_url).subscribe((data) => {
  //     console.log('trabajadores', data);
  //     this.trabajadores = data;
  //   })
    
  // }

  // registrar_cliente() {
  //   let nombre = prompt("Ingrese nombre")
  //   let apellido = prompt("Ingrese apellido");
  //   this.clientes.push({
  //     nombres : nombre,
  //     apellidos : apellido
  //   });

  // }

  

  // registrar_trabajador() {
  //   let nombre = prompt("Ingrese nombre")
  //   let dni = prompt("Ingrese dni");
  //   this.trabajadores.push({
  //     nombre_completo : nombre,
  //     dni : dni
  //   });

  // }

// -------------------------------------------------------------------------------------------

/*export class AppComponent {
  temperatura = 0;
  latitud = -12.213081;
  longitud = -76.936916
  

  constructor (private http: HttpClient, private form: FormsModule){
   
    
  }

  calcular(){
    let clima_url ='https://api.open-meteo.com/v1/forecast?latitude='+this.latitud+'&longitude='+this.longitud+'&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m';

    this.http.get(clima_url).subscribe(
      (data: any) =>{
        console.log(data);
        this.temperatura = data.current_weather.temperature;
      }
    )
  }
}*/

