import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PokeappComponent } from './pokeapp.component';

const routes: Routes = [
  {
    path: '',
    component: PokeappComponent,
    children: [
      {
        path: 'pokemon-page',
        loadChildren: () =>
          import('./landing-page/landing-page.module').then(
            (m) => m.LandingPageModule
          ),
      },
      {
        path: '',
        loadChildren: () =>
          import('./pokemon-page/pokemon-page.module').then(
            (m) => m.PokemonPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokeappRoutingModule {}
