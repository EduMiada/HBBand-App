import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  private loginForm: FormGroup;
  private submitted = false;
  private returnURL = 'home'; 
  
  constructor(public router: Router,private formBuilder: FormBuilder, private userSrvc : UserService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'username' : [null, Validators.required],
      'email' :    [null, Validators.required],
      'password' : [null, Validators.required]
    });

     // get return url from route parameters or default to '/'
     this.returnURL = 'home'; //this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields  
  get f() { return this.loginForm.controls; }

  onSignup() {
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.submitted = true;
    let user:User={
        "username":this.f.username.value,
        "email": this.f.email.value,
        "password": this.f.password.value}

    this.userSrvc.createUser(user)
    .subscribe(
      data => {
          if(data.id){
            console.log('Usuário criado com Sucesso');
          }
            
        },
        error => {
          alert(error);
        });


    this.router.navigate([this.returnURL]);
  }
}
