import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './components/characters/characters.component';
import { EpisodesComponent } from './components/episodes/episodes.component';
import { LocationsComponent } from './components/locations/locations.component';



@NgModule({
  declarations: [
    CharactersComponent,
    EpisodesComponent,
    LocationsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CharactersComponent,
    EpisodesComponent,
    LocationsComponent
  ]
})
export class RickMortyModule { }
