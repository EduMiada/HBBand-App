import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-band',
  templateUrl: './band.page.html',
  styleUrls: ['./band.page.scss'],
})
export class BandPage implements OnInit {

  private sub:any;
  private bandID:any;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    
     // subscribe to the parameters observable
  this.route.paramMap.subscribe(params => {
    //alert(params.get('id'));
    this.bandID = params.get('id');
  });

  }

  

}
