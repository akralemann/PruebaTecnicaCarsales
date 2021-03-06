import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CharactersResponce, Info, Result } from '../models/character';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  public result: Result[] = [];
  public info: Info;
  constructor( private http: HttpClient ) { }

  getCharacters(page = 1){
    this.http.get<CharactersResponce>(`${environment.urlCharacter}/?page=${page}`)
      .subscribe((resp) => {
        this.info = resp.info;
        this.result = resp.results;
      })
  }


}
