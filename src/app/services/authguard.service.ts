import { Injectable } from '@angular/core';
import { Router, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class AuthguardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // if (true)
      return true; 
    // else {
    //   console.log('You must be logged in');
    //   this.router.navigate(['login']);
    //   return false;
    // }
  }
}
