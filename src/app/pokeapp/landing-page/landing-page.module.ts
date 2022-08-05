import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageComponent } from './landing-page.component';
import { SearcherComponent } from './searcher/searcher.component';
import { ListComponent } from './list/list.component';
import { LandingPageRoutingModule } from './landing-page-routing.module';


@NgModule({
  declarations: [
    LandingPageComponent,
    SearcherComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule
  ]
})
export class LandingPageModule { }
