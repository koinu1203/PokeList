import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageComponent } from './landing-page.component';
import { SearcherComponent } from './searcher/searcher.component';
import { ListComponent } from './list/list.component';
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


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
  ]
})
export class LandingPageModule { }
