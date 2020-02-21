import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  constructor( private authService: AuthService) { }

  ngOnInit() {
  }

  loginHandler(formData){
    console.log(formData);
    this.authService.login(formData.value);
  }

}
