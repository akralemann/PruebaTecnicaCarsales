import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../services/characters.service'

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  constructor( private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.charactersService.getCharacters()
  }

  get result(){
    return this.charactersService.result
  }

}
