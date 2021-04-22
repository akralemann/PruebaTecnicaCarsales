import { Component, OnInit } from '@angular/core';
import { Info } from '../../models/character';
import { CharactersService } from '../../services/characters.service'

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  pages: number[] = [];
  infoPage: Info;

  constructor( private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.charactersService.getCharacters();
    this.totalpages();
  }

  getPage( paramPage ){
    this.charactersService.getCharacters( paramPage );
    
  }

  get result(){
    // this.infoPage = this.info
    return this.charactersService.result
  }

  get info(){
    return this.charactersService.info
  }


  totalpages(){
     for(let i = 1; i <= 34; i++){
       this.pages.push(i)
     }
  }

}
