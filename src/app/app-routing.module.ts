import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerSelectionComponent } from './player-selection/player-selection.component';
import { TeamSelectionComponent } from './team-selection/team-selection.component';
import { UserLandingComponent } from './user-landing/user-landing.component';

const routes: Routes = [
  {
    path: 'teams',
    component: TeamSelectionComponent
  },
  {
    path: 'players',
    component: PlayerSelectionComponent
  },
  {
    path: 'customer',
    component: UserLandingComponent
  },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
