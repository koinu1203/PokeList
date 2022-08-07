import { NgbModule, NgbNav } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonPageComponent } from './pokemon-page.component';
import { PokemonPageRoutingModule } from './pokemon-page-routing.module';


@NgModule({
  declarations: [
    PokemonPageComponent
  ],
  imports: [
    CommonModule,
    PokemonPageRoutingModule, 
    NgbModule
  ]
})
export class PokemonPageModule { }
