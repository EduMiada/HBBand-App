import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CoreService } from './core.service';

@Injectable({  providedIn: 'root' })

export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  //Create a method to validate the JWT on the user object
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (CoreService.getLoggedUserJWT()) {
        return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    return false;
  }

 
}
