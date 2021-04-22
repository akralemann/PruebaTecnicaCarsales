import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './characters/characters.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { LocationsComponent } from './locations/locations.component';



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
