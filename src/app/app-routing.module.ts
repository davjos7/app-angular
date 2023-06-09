import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeportesComponent } from './deportes/deportes.component';
import { EspectaculosComponent } from './espectaculos/espectaculos.component';
import { PoliticaComponent } from './politica/politica.component';
import { SaludComponent } from './salud/salud.component';
import { NacionalesComponent } from './nacionales/nacionales.component';
import { InternacionalesComponent } from './internacionales/internacionales.component';
import { SaludoComponent } from './saludo/saludo.component';
import { FelicitarComponent } from './felicitar/felicitar.component';
import { DespedirseComponent } from './despedirse/despedirse.component';

const routes: Routes = [        // aca de crea los url
  { path : 'deportes', component : DeportesComponent },
  { path : 'espectaculos', component : EspectaculosComponent },
  { path : 'politica', component : PoliticaComponent },
  { path : 'salud', component : SaludComponent},
  { path : 'nacionales', component : NacionalesComponent },
  { path : 'internacionales', component : InternacionalesComponent },
  { path : 'saludo/:nombre', component : SaludoComponent },
  { path : 'felicitar/:nombre/:apellido', component : FelicitarComponent },
  { path : 'despedirse/:nombre', component : DespedirseComponent }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
