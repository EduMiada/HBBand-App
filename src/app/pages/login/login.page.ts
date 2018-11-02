import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})


export class LoginPage implements OnInit {

  private loginForm: FormGroup;
  private submitted:Boolean;
  private returnURL:string;

  constructor(private formBuilder: FormBuilder,
              private authService:AuthenticationService,
              private route: ActivatedRoute,
              private router: Router,) {
  }

  
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'email' : ['', Validators.required],
      'password' : ['', Validators.required]
    });

     // get return url from route parameters or default to '/'
     this.returnURL = 'home'; //this.route.snapshot.queryParams['returnUrl'] || '/';
  }

 // convenience getter for easy access to form fields
 get f() { return this.loginForm.controls; }


  private onSubmit() {
    /*let loading = this.Loading.create({
      content: "Connecting to PPM Server...",
      duration: 2000,
      dismissOnPageChange:true
    });*/

    this.submitted=true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

   // this.loading = true;
    this.authService.login(this.f.email.value, this.f.password.value)
        .subscribe(
            data => {
                console.log(data);
                this.loginForm.reset();
                this.router.navigate([this.returnURL]);
            },
            error => {
              console.log(error);
            });

    }

    onSignup() {
      this.router.navigate(['signup']);
    }
  

}
