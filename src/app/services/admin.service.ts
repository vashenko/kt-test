import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  logAsAdmin(email: string, password: string) {
    const admin = {
      email: email,
      password: password
    }
    if (email === 'admin' && password === 'admin1234') {
      localStorage.setItem('admin', JSON.stringify(admin));
      return true;
    }
  }

  checkOnAdmin() {
    if (localStorage.getItem('admin')) {
      return true;
    } else {
      return false;
    }
  }
}
