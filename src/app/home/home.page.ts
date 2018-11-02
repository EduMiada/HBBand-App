import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BandService } from '../services/band.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  private bandID:number;

  constructor(private route:ActivatedRoute, private bandService:BandService) { }

  ngOnInit() {
    
     // subscribe to the parameters observable
  this.route.paramMap.subscribe(params => {
    this.bandService.getBand( params.get('id'));
    //this.bandID =this.bandService.getSelectedBandID() 
    //console.log(this.bandID);
  });

  }

  

}