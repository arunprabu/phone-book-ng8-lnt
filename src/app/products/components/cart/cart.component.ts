import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartDataService } from 'src/app/shared/services/cart-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styles: []
})
export class CartComponent implements OnInit, OnDestroy {

  cartItemsList: any[];
  cartItemsSubscription: Subscription;

  constructor(private cartDataService: CartDataService) { }

  ngOnInit() {
    // Step 4: Access the latest cart items from cartdata service
    this.cartItemsSubscription = this.cartDataService.latestCartItems.subscribe( ( value: any[]) => {
      console.log(value);
      this.cartItemsList = value;
    });
  }

  ngOnDestroy() {
    this.cartItemsSubscription.unsubscribe();
  }

}
