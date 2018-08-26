import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService } from '../../services/social-auth.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { AdminService} from '../../services/admin.service';

@Component({
  selector: 'app-login-in',
  templateUrl: './login-in.component.html',
  styleUrls: ['./login-in.component.css']
})
export class LoginInComponent implements OnInit {

  private logIn: FormGroup;
  private logInEmail: FormControl;
  private logInPassword: FormControl;

  constructor(private socailAuthService: SocialAuthService,
              private router: Router,
              private adminService: AdminService) {
    this.initControls();
    this.initForm();
  }

  signInWithFacebook() {
    this.socailAuthService.signInWithFacebook()
      .then((res) => {
        this.router.navigate(['/main']);
      })
      .catch((err) => console.log(err));
  }

  signInWithGoogle() {
    this.socailAuthService.signInWithGoogle()
      .then((res) => {
        this.router.navigate(['/main']);
      })
      .catch((err) => console.log(err));
  }

  signInWithEmail() {
    if (this.adminService.logAsAdmin(this.logInEmail.value, this.logInPassword.value )) {
      this.router.navigate( ['/admin']);
      return true;
    }

    this.socailAuthService.signInRegular(this.logInEmail.value, this.logInPassword.value)
      .then((res) => {
        this.router.navigate(['/main']);
      })
      .catch((err) => console.log('error: ' + err));
  }

  initForm() {
    this.logIn = new FormGroup({
      'email': this.logInEmail,
      'password': this.logInPassword
    });
  }

  initControls() {
    this.logInEmail = new FormControl('', [Validators.required,
                                                                   Validators.pattern("^[a-z0-9](\\.?[a-z0-9]){5,}@g(oogle)?mail\\.com$")]);
    this.logInPassword = new FormControl('', [Validators.required,
                                                                      Validators.minLength(8),
                                                                      Validators.maxLength(20)]);
  }

  ngOnInit() {
  }

}




