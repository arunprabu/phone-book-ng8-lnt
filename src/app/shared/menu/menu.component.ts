import { Component, OnInit } from '@angular/core';

// Decorator -- is a function that takes in metadata as param(s)
// Enriches the class
// The class will become dependency injectable
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
