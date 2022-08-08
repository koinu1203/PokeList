import { NgbModule, NgbNav } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonPageComponent } from './pokemon-page.component';
import { PokemonPageRoutingModule } from './pokemon-page-routing.module';
import { DataComponent } from './data/data.component';


@NgModule({
  declarations: [
    PokemonPageComponent,
    DataComponent
  ],
  imports: [
    CommonModule,
    PokemonPageRoutingModule, 
    NgbModule
  ]
})
export class PokemonPageModule { }
