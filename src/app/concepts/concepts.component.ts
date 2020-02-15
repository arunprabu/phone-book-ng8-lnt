import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CebComponent } from './ceb/ceb.component';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: [
    `
    .greenText{
      color: green;
    }
    `
  ]
})
export class ConceptsComponent implements OnInit, AfterViewInit {

  // ts
  // String interpolation related
  appName = 'Phone Book App!'; // implicit typing
  teamSize = 20;
  isInDevelopment = false;
  devProfile = {
    avgExp: 4,
    place: 'Chennai'
  };

  devSkillSetList: Array<string> = [
    'html', 'css', 'js', 'ts', 'ng', 'dotnet'
  ];

  // Property Binding related
  company = 'L & T';

  // two way binding related
  courseName = 'Angular';

  // custom event binding related
  dataReceivedFromCEB: string;

  // static tru will make cebData available in ngOnInit()
  @ViewChild(CebComponent, { static: false }) cebData;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log(this.cebData);
  }

  // right place to write custom methods
  btnClickHandler(e): void {
    alert('clicked! open console to see the event object');
    console.log(e);
  }

  getAge(): number {
    return 60;
  }

  // Step 5: of custom event binding related handler -- refer this comp's html
  profileLoadedHandler(e) {
    this.dataReceivedFromCEB = e; // sTep 6: storing the data in local variable
    // step7: display it in concepts.comp.html
  }

}
