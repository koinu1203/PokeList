import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokeappRoutingModule } from './pokeapp-routing.module';
import { PokeappComponent } from './pokeapp.component';
import { LandingPageModule } from './landing-page/landing-page.module';
import { PokemonPageModule } from './pokemon-page/pokemon-page.module';


@NgModule({
  declarations: [
    PokeappComponent
  ],
  imports: [
    CommonModule,
    PokeappRoutingModule,
    LandingPageModule,
    PokemonPageModule
  ]
})
export class PokeappModule { }
