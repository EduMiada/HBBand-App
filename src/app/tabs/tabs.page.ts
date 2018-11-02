import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BandService } from '../services/band.service'; 

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {
  private bandID;

  constructor(private route:ActivatedRoute, private bandService:BandService) { }

  ngOnInit() {
    
    this.bandID = this.bandService.currentBandID;

    console.log('tabs',this.bandID);
  }

  

}