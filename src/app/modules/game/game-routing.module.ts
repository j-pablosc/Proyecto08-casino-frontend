import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsGamesComponent } from './cards-games/cards-games.component';

const routes: Routes = [
  {
    path: '',
    component: CardsGamesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
