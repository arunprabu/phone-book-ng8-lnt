import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: []
})
export class SignupComponent implements OnInit {

  constructor( private authService: AuthService) { }

  ngOnInit() {
  }

  signUpHandler(formData) {
    console.log(formData);

    // ng g s auth/services/auth
    this.authService.signup(formData.value);
  }
}

