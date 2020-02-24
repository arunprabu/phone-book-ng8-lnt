import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// firebase setup
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MenuComponent } from './shared/menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ConceptsComponent } from './concepts/components/concepts.component';
import { AboutComponent } from './about/about.component';
import { CpbComponent } from './concepts/components/cpb/cpb.component';
import { CebComponent } from './concepts/components/ceb/ceb.component';
import { ColorizerDirective } from './concepts/directives/colorizer.directive';
import { ContactModule } from './contacts/contact.module';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { ProductsModule } from './products/products.module';
import { LoginComponent } from './auth/components/login/login.component';
import { SignupComponent } from './auth/components/signup/signup.component';
import { AuthInterceptor } from './shared/interceptors/auth.interceptor';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDI7mYVzSBR_xSdoPtkDq_D4E1_4pzmLno", // this key will not work after a few days
  authDomain: "hexa-ng-auth-b2.firebaseapp.com",
  databaseURL: "https://hexa-ng-auth-b2.firebaseio.com",
  projectId: "hexa-ng-auth-b2",
  storageBucket: "",
  messagingSenderId: "333443086726",
  appId: "1:333443086726:web:a30008031375ca88c05407"
};

// Decorator
// Main Switching Box
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    ConceptsComponent,
    AboutComponent,
    CpbComponent,
    CebComponent,
    ColorizerDirective,
    PageNotFoundComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,

    AngularFireModule.initializeApp(firebaseConfig),   // will help us connect to firebase app 
    AngularFireAuthModule, // login 
    AngularFirestoreModule, // signup 

    FormsModule,
    HttpClientModule,
    ContactModule,
    ProductsModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],  // Step 3: AppModule should be bootstrapped with a component -- AppComponent
  bootstrap: [AppComponent]
})
export class AppModule { }
