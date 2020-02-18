import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cpb',
  templateUrl: './cpb.component.html',
  styles: []
})
export class CpbComponent implements OnInit {
  // Step 1: Create a variable 
  // Step 2: Make the variable as custom property
  @Input() age = 10; // @Input() decorator makes the varible as custom property to <app-cpb></app-cpb>

  constructor() { }

  ngOnInit() {
  }

}
