import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Info, LocationsResponce, Result } from '../models/locations';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  public result: Result[] = [];
  public info: Info;

  constructor( private http: HttpClient ) { }

  getLocations(page = 1){
    this.http.get<LocationsResponce>(`${environment.urlLocations}/?page=${page}`)
    .subscribe((resp) => {
      this.info = resp.info;
      this.result = resp.results;
    })
  }


}
