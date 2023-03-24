import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { PrincipalLayoutComponent } from './layouts/principal-layout/principal-layout.component';
import { FormComponent } from './modules/contact/form/form.component';
import { CardsGamesComponent } from './modules/game/cards-games/cards-games.component';
import { CardsComponent } from './modules/home/cards/cards.component';

const routes: Routes = [
  {
    path: '',
    component: PrincipalLayoutComponent,
    children: [
      {
        path: 'contact',
        loadChildren: () =>
          import('./modules/contact/contact.module').then((m) => m.ContactModule),
      },
      {
        path: 'game',
        loadChildren: () =>
          import('./modules/game/game.module').then((m) => m.GameModule),
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./modules/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'roulette',
        loadChildren: ()=>
          import('./modules/roulette/roulette/roulette.module').then((m)=> m.RouletteModule),
      },
      {
        path: 'online',
        loadChildren: ()=>
          import('./modules/online/online/online.module').then((m)=> m.OnlineModule),
      },
    ],
  },

  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/auth/auth.module').then((m) => m.AuthModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
