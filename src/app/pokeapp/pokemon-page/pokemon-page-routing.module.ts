import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonPageComponent } from './pokemon-page.component';

const routes: Routes = [
  {
    path: '',
    component: PokemonPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonPageRoutingModule {}
