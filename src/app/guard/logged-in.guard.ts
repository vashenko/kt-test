import { SocialAuthService } from '../services/social-auth.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class LoggedInGuard implements CanActivate {

  constructor (private router: Router, private socialService: SocialAuthService) { }
  canActivate() {
    if ( this.socialService.isLoggedIn() ) {
      return true;
    }
    return false;
  }
}
