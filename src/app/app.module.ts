import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { ListadoComponent } from './listado/listado.component';
import { FotosComponent } from './fotos/fotos.component';
import { ExamenComponent } from './examen/examen.component';
import { DeportesComponent } from './deportes/deportes.component';
import { EspectaculosComponent } from './espectaculos/espectaculos.component';
import { PoliticaComponent } from './politica/politica.component';
import { InternacionalesComponent } from './internacionales/internacionales.component';
import { SaludComponent } from './salud/salud.component';
import { NacionalesComponent } from './nacionales/nacionales.component';
import { SaludoComponent } from './saludo/saludo.component';
import { DespedirseComponent } from './despedirse/despedirse.component';
import { FelicitarComponent } from './felicitar/felicitar.component';


@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PokedexComponent,
    ListadoComponent,
    FotosComponent,
    ExamenComponent,
    DeportesComponent,
    EspectaculosComponent,
    PoliticaComponent,
    InternacionalesComponent,
    SaludComponent,
    NacionalesComponent,
    SaludoComponent,
    DespedirseComponent,
    FelicitarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
