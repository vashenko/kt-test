import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';

import {Observable} from 'rxjs';
import {Role} from '../domain/user';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor() {
  }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    const user = JSON.parse(localStorage.getItem('admin'));
      if (user) {
        return true;
      } else {
        return false;
      }
  }
}
