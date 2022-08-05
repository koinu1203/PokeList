import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageComponent } from './landing-page.component';
import { SearcherComponent } from './searcher/searcher.component';
import { ListComponent } from './list/list.component';
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PokeApiService } from 'src/app/common/services/poke-api.service';


@NgModule({
  declarations: [
    LandingPageComponent,
    SearcherComponent,
    ListComponent,
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PokeApiService],
})
export class LandingPageModule { }
