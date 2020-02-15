import { Component } from '@angular/core';

// Decorator -- this unifies the comp's html, css, ts and...
// exposes the whole thing in a selector
@Component({
  selector: 'app-root', // should be element selector -- mandatory
  templateUrl: './app.component.html', // html -- mandatory and only one
  styleUrls: ['./app.component.css'] // css -- optional and can be many
})
export class AppComponent {
  // ts
  title = 'phone-book-ng8';



}
