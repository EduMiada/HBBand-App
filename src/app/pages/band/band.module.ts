import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
 

import { IonicModule } from '@ionic/angular';

import { BandPage } from './band.page';

const routes: Routes = [
  {
    path: '',
    component: BandPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BandPage]
})
export class BandPageModule {}
