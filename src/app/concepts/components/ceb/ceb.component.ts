import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ceb',
  templateUrl: './ceb.component.html',
  styles: []
})
export class CebComponent implements OnInit {

  // Step1: create event using EventEmitter;
  // Step2: make the event as custom event by using @Output()
  @Output() profileLoaded = new EventEmitter();

  // For @ViewChild()
  featureName = 'Parent accessing data from Child comp using @ViewChild';

  constructor() {
    console.log('Inside Constructor');
  }

  ngOnInit() { // lifecycle hook
    console.log('Inside ngOnInit');
  }

  sendDataHandler() { // refer the ceb.comp.html
    // Step3: emit the event with the data
    this.profileLoaded.emit('Arun');
  }

}
