import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokeappRoutingModule } from './pokeapp-routing.module';
import { PokeappComponent } from './pokeapp.component';
import { LandingPageModule } from './landing-page/landing-page.module';
import { PokemonPageModule } from './pokemon-page/pokemon-page.module';
import { PokeApiService } from '../common/services/poke-api.service';


@NgModule({
  declarations: [
    PokeappComponent
  ],
  imports: [
    CommonModule,
    PokeappRoutingModule,
    LandingPageModule,
    PokemonPageModule,
  ],
  providers: [PokeApiService],

})
export class PokeappModule { }
