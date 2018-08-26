import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';


@Injectable()
export class SocialAuthService {
  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  constructor(private firebaseAuth: AngularFireAuth, private router: Router) {
    this.user = firebaseAuth.authState;
    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
        } else {
          this.userDetails = null;
        }
      }
    );
  }

  signInWithFacebook() {
    return this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.FacebookAuthProvider()
    );
  }

  signInWithGoogle() {
    return this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
  }

  isLoggedIn() {
    if (this.user === null ) {
      return false;
    } else {
      return true;
    }
  }

  signInRegular(email, password) {
    const credential = firebase.auth.EmailAuthProvider.credential( email, password );
    return this.firebaseAuth.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    this.firebaseAuth.auth.signOut()
      .then((res) => this.router.navigate(['/login']));
  }

  createNewUser(email, password) {
    const credential = firebase.auth.EmailAuthProvider.credential( email, password );
    return this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password);
  }
}
