import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CoreService } from '../core/core.service';

import { Band } from '../models/band';

@Injectable({
  providedIn: 'root'
})
export class BandService {

  public currentBandID;
  constructor(private http:HttpClient) { }


  getBands(){
    let user = CoreService.getLoggedUser().user;
    let filterOwer = '?owner=' + user.id;
    return this.http.get<Band[]>(CoreService.SERVER_URL + CoreService.API_ENDPOINT.API_BAND + filterOwer);
  }

  createBand( name, description, image){
    let band = {"owner": CoreService.getLoggedUser().user.id, "name":name, "description":description};
    return this.http.post<Band>(CoreService.SERVER_URL + CoreService.API_ENDPOINT.API_BAND,band);
  }

  getBand(id){
    this.getSelectedBandID = id;
  }
  
  getSelectedBandID(){
    return this.currentBandID;
  }

  selectedBand(id){
    this.currentBandID = id;
  }

}



