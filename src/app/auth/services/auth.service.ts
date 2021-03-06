import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private ngFireAuth: AngularFireAuth, private ngFireStore: AngularFirestore, private router: Router) { }

  signup(signupFormData: any) {
    console.log(signupFormData);

    // 1. send the data to b/e
    this.ngFireAuth.auth.createUserWithEmailAndPassword(signupFormData.email, signupFormData.password)
      .then((status) => {   // 2. get the resp from b/e
        console.log(status);
        // upon successful registration
        setTimeout(() => {
          this.router.navigate(['login']);
        }, 3000);

      },
        (err) => {
          console.log(err);
        })

    // 3. send it back to comp

  }

  login(loginFormData: any) {
    console.log(loginFormData);
    this.ngFireAuth.auth.signInWithEmailAndPassword(loginFormData.email, loginFormData.password)
      .then((status) => {
        console.log(status);
        localStorage.setItem('authToken', status.user.refreshToken);

        // redirect to concepts page
        this.router.navigate(['concepts']);
      },
        (err) => {
          console.log(err);
        })
  }

  isAuthenticated() {
    if (localStorage.getItem('authToken')) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    this.ngFireAuth.auth.signOut();
    localStorage.removeItem('authToken');
  }
}
