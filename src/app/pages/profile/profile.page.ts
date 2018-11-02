import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, ControlContainer, AbstractControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

import { StaticLookups } from '../../models/static.lookups';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { CompileTemplateMetadata } from '@angular/compiler';
import { exists } from 'fs';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  private user: User;
  private instrumentList:Array<object> = StaticLookups.INSTRUMENT_LIST;
  private expLevelList:Array<object> = StaticLookups.EXPERIENCE_LEVEL_LIST;
  private profileSegment:string='basic';
  private stylesChanged:boolean;
  private InfluencesChanged:boolean;
  private hasChanges:boolean;


  private newStyle:string='';
  private newInfluence:string='';

  private profileForm = this.fb.group({  
      id:[''],
      username: ['', Validators.required],
      fullName: ['', Validators.required],
      displayName: [''],
      avatar: [''],
      isPublic: [false],
      profile: this.fb.group({
        about: [''],
        instrument: [''],
        experience: [''],
        styles: this.fb.array([
          this.fb.control('')
        ]),
        influencies: this.fb.array([
          this.fb.control('')
        ])
      }),
      contact: this.fb.group({
        city: [''],
        area: [''],
        zip: ['']
      }),
      channels: this.fb.array([{
        channel:[''],
        name:[''],
        url:['']
      }])
  });


  constructor(private router:Router, private userService:UserService, private fb:FormBuilder) { }

  ngOnInit() {

    this.loadLocalProfile()
    this.onChanges()
  }

  onChanges(): void {

    this.styles.valueChanges.subscribe(val => {
      this.stylesChanged = true;
      this.styles.markAsDirty();
    });
    this.influencies.valueChanges.subscribe(val => {
      this.InfluencesChanged = true;
      this.profileForm.markAsDirty();
    });
  //  this.profileForm.markAsDirty();

    //console.log('on changes');
  }
  //get basic data saved on local storage
  //call the server api to detailed/updated information
  loadLocalProfile(){
    this.user = this.userService.getLocalProfile();
    this.loadProfile(this.user.id);
    this.profileForm.markAsPristine();
  }

  loadProfile(id:number){
    this.userService.getProfile(id)
    .subscribe(
      data => {

          console.log(this.profileForm.pristine);
          this.user = data;
          this.profileForm.patchValue( this.user);        
      },
      error => {
        console.log('Error:', error);   
      },
      () => {
        this.profileForm.markAsPristine();
      }
     );

     this.profileForm.markAsPristine();
  }
  
  editProfile(){
    this.router.navigate(['profile-edit']);
  }



  //get form field array 
  get styles() {
    return this.profileForm.get('profile.styles') as FormArray;
  }
  get influencies() {
    return this.profileForm.get('profile.influencies') as FormArray;
  }

  addStyle() {
    let style = this.newStyle;
    this.styles.push(this.fb.control(style));
    this.newStyle = '';
  }

  deleteStyle(index) {
    this.styles.removeAt(index)        
  }

  addInfluence() {
    let influence = this.newInfluence;
    this.influencies.push(this.fb.control(influence));
    this.newInfluence = '';
  }

  
  deleteInfluence(index) {
    this.influencies.removeAt(index)        
  }


onSubmit() {
  // TODO: Use EventEmitter with form value

  if (this.profileForm.dirty){
    this.user = <User>this.profileForm.value;
  //   let updatedFields= JSON.parse(JSON.stringify(this.user));

  //   for (let ctrl in this.profileForm.controls)
  //    {
  //       if (!this.profileForm.controls[ctrl].dirty){
  //         delete updatedFields[ctrl]
  //       }
       
  //    }
    this.userService.updateProfile(this.user.id, this.user)
      .subscribe(
        data => console.log(data),
        error => console.log(error)
      )
  }
  
}

}
