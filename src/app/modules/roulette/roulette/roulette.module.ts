import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouletteRoutingModule } from './roulette-routing.module';
import { RouletteComponent } from './game/roulette.component';


@NgModule({
  declarations: [
    RouletteComponent,
  ],
  imports: [
    CommonModule,
    RouletteRoutingModule
  ]
})
export class RouletteModule { }
