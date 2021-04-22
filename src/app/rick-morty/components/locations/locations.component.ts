import { Component, OnInit } from '@angular/core';
import { Info } from '../../models/locations';
import { LocationsService } from '../../services/locations.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  pages: number[] = [];
  infoPage: Info;

  constructor( private locationsService: LocationsService) { }

  ngOnInit(): void {
    this.locationsService.getLocations();
    this.totalpages();
  }

  getPage( paramPage ){
    this.locationsService.getLocations( paramPage );
  }

  get result(){
    return this.locationsService.result;
  }

  totalpages(){
    for(let i = 1; i <= 6; i++){
      this.pages.push(i)
    }
  }

}
