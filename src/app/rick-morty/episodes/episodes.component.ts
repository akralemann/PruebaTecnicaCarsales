import { Component, OnInit } from '@angular/core';
import { Info } from '../models/episodes';
import { EpisodesService } from '../services/episodes.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {

  pages: number[] = [];
  infoPage: Info;

  constructor( private episodesService: EpisodesService ) { }

  ngOnInit(): void {
    this.episodesService.getEpisodes();
    this.totalpages();
  }

  getPage( paramPage ){
    this.episodesService.getEpisodes( paramPage );
    
  }

  get result(){
    return this.episodesService.result
  }

  totalpages(){
    for(let i = 1; i <= 3; i++){
      this.pages.push(i)
    }
 }

}
