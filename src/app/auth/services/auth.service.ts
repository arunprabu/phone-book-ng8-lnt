import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  signup(accountInfo) {
    console.log(accountInfo);
  }

  login(creds) {
    console.log(creds);
  }
}
