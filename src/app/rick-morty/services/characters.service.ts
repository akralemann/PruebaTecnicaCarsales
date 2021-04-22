import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CharactersResponce, Result } from '../models/character';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  public result: Result[] = [];

  constructor( private http: HttpClient ) { }

  getCharacters(){
    this.http.get<CharactersResponce>(`${environment.urlCharacter}`)
      .subscribe((resp) => {
        this.result = resp.results;
      })
  }

}
