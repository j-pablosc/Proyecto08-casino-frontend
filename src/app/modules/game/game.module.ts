import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { CardsGamesComponent } from './cards-games/cards-games.component';


@NgModule({
  declarations: [
    CardsGamesComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule
  ]
})
export class GameModule { }
