import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { CartDataService } from '../services/cart-data.service';

@Component({
  selector: 'app-header', // element selector
  templateUrl: './header.component.html',  // template / html
  styleUrls: ['./header.component.css'] // css
})
export class HeaderComponent implements OnInit {
  // ts
  cartItemsList: any[];

  constructor(private router: Router, private cartDataService: CartDataService) { }

  ngOnInit() {
    // Step 3: Access the latest cart items from cartdata service
    this.cartDataService.latestCartItems.subscribe( ( value: any[]) => {
      console.log(value);
      this.cartItemsList = value;
    });
  }

  gotoCartPage() {
    this.router.navigate(['products', 'cart']);
  }

}
