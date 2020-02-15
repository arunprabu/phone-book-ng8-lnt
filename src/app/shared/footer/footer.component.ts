import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-footer',  // mandatory --as el selector
  template: `
    <div class='text-center'>
      <hr>
      <app-menu>
        <li class="nav-item">
          <a class="nav-link" href="#">Back to Top</a>
        </li>
      </app-menu>
      <p class='redText bolderText'>Copyright &copy; 2020 - L&T</p>
    </div>
  `,
  styles: [
    `
      .bolderText{
        font-weight: bold;
      }

      .redText{
        color: darkred;
      }
    `
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
