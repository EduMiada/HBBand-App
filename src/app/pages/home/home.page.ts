import { Component } from '@angular/core';
import { ModalController, PopoverController  } from '@ionic/angular';
import { BandCreatePage } from '../band/band-create/band-create.page';
import { HomePopoverPage } from './popover-options/home-popover';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from '../../services/user.service';
import { BandService } from '../../services/band.service';
import { Band } from '../../models/band';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})

export class HomePage {

  private instrumentList:any[] =
  [
      {'code':'GUITAR','name':'Guitar'}
  ];

  private bands:Band[]=[];
  constructor(private bandService:BandService,
              private modalController:ModalController,
              private popOverController:PopoverController,
              private router: Router){}

  ngOnInit() {
    this.bandService.getBands()
    .subscribe(
      data => {
          console.log(data);
          this.bands = data;
      },
      error => {
        console.log(error);
      });
  }

  doRefresh(event) {
    this.ngOnInit();
    event.target.complete();
  }

  openBand(bandID){
    console.log(bandID);
    //this.router.navigate(['band',bandID]);
    this.bandService.selectedBand(bandID);
    this.router.navigateByUrl ('app/tabs/(band:band/' + bandID + ')');
//    href="tabs/(home:band/band.id)" 
   //this.router.navigateByUrl(`./tabs/tab/(home:home/${bandID})`);

  }

  async createBand() {
    const modal = await this.modalController.create({
      component: BandCreatePage,
      componentProps: { value: 123 }
    });

   // modal.onDidDismiss(() => {
      // Call the method to do whatever in your home.ts
    //     console.log('Modal closed');
    //});

    return await modal.present();
  }

  async openPopover(ev: Event) {
    const popover = await this.popOverController.create({
      component: HomePopoverPage,
      event: ev,
      componentProps: {
        custom_id: "1"
      }
    });
    await popover.present();
  }

}

