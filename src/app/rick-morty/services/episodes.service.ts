import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EpisodesResponce, Info, Result } from '../models/episodes';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {

  public result: Result[] = [];
  public info: Info;

  constructor( private http: HttpClient ) { }

  getEpisodes(page = 1){
    this.http.get<EpisodesResponce>(`${environment.urlEpisodes}/?page=${page}`)
      .subscribe((resp) => {
        this.info = resp.info;
        this.result = resp.results;
      })
  }


}
