import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.page.html',
  styleUrls: ['contact.page.scss']
})
export class ContactPage implements OnInit {
  private bandID;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    
     // subscribe to the parameters observable
  this.route.paramMap.subscribe(params => {
    alert(params.get('id'));
    this.bandID = params.get('id');
  });

  }

  

}