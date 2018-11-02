import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  template: `
    <ion-list>
      <ion-item button (click)="profile()">
        <ion-label>Profile</ion-label>
      </ion-item>
      <ion-item button (click)="logout()">
        <ion-label>Logout</ion-label>
      </ion-item>
    </ion-list>
  `
})
export class HomePopoverPage {
  constructor(public popoverCtrl: PopoverController, private userService:UserService, private router:Router) {}

  logout() {
    // this.app.getRootNavs()[0].push('/support');
    this.userService.logout();
    this.popoverCtrl.dismiss();
    this.router.navigate(['login']);
  }

  profile() {
    this.router.navigate(['profile'])
    this.popoverCtrl.dismiss();
  }
}
