import { Component, OnInit } from '@angular/core';
import { NavController,ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BandService } from '../../../services/band.service';


@Component({
  selector: 'app-band-create',
  templateUrl: './band-create.page.html',
  styleUrls: ['./band-create.page.scss'],
})
export class BandCreatePage implements OnInit {

  private bandForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private bandService:BandService, private modalCtrl:ModalController) { }

  ngOnInit() {
    this.bandForm = this.formBuilder.group({
      'name' : [null, Validators.required],
      'description' :[null, Validators.required] 
    });

  }

  // convenience getter for easy access to form fields
  get f() { return this.bandForm.controls; }

  private onSubmit() {
  
    // stop here if form is invalid
   // if (this.bandForm.invalid) {
   //     return;
    //}

   // this.loading = true;
  
    this.bandService.createBand(this.f.name.value, this.f.description.value, '')
        .subscribe(
          data => {
              if(data.id){
                console.log('Banda Criada com Sucesso');
              }
                
            },
            error => {
              alert(error);
            });
    }

    
    closeModal(){
      this.modalCtrl.dismiss();
    }
  
  

}
