import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './rick-morty/characters/characters.component';
import { EpisodesComponent } from './rick-morty/episodes/episodes.component';
import { LocationsComponent } from './rick-morty/locations/locations.component';

const routes: Routes = [
  {
     path: '',
     component: CharactersComponent,
     pathMatch: 'full'
  },
  {
    path: 'episodes',
    component: EpisodesComponent,
  },
  {
    path: 'locations',
    component: LocationsComponent,
  },
  {
     path: '**',
     redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
