import { Injectable } from '@angular/core';
import { AuthenticationService } from './authservice.service';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(public auth: AuthenticationService, public router: Router) { }
  canActivate(): boolean {
    if (!this.auth.checkIfUserAuthenticated()) {
      
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
