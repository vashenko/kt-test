import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { SocialAuthService } from '../../services/social-auth.service';

@Component({
  selector: 'app-registr',
  templateUrl: './registr.component.html',
  styleUrls: ['./registr.component.css']
})
export class RegistrComponent implements OnInit {

  private registrationForm: FormGroup;
  private firstName: FormControl;
  private lastName: FormControl;
  private email: FormControl;
  private login: FormControl;
  private password: FormControl;
  private message: string;

  constructor(
    private router: Router,
    private socialAuthService: SocialAuthService) {
    this.initControls();
    this.initForm();
  }

  initForm() {
    this.registrationForm = new FormGroup({
      'firstName': this.firstName,
      'lastName': this.lastName,
      'email': this.email,
      'login': this.login,
      'password': this.password});
  }

  initControls() {
    this.firstName = new FormControl('');
    this.lastName = new FormControl('');
    this.email = new FormControl('', [Validators.required,
                                                              Validators.pattern("^[a-z0-9](\\.?[a-z0-9]){5,}@g(oogle)?mail\\.com$")]);
    this.login = new FormControl('', Validators.required);
    this.password = new FormControl('', [Validators.required,
                                                                 Validators.minLength(8),
                                                                 Validators.maxLength(20)]);
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      this.socialAuthService.createNewUser(this.email.value, this.password.value)
        .then((res) => {
          console.log(res);
          this.router.navigate(['/login']);
        })
        .catch((err) => {
          console.log('error' + err);
        });
    }
  }

  ngOnInit() {
  }

}
