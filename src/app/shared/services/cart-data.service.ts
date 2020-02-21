import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartDataService {

  // should load this one from db via services
  // -- now mocking it with static data
  private currentCartItem: any[] = [
    {
      id: 2,
      name: 'Cheese',
      category: 'Dairy',
      price: '$6.38'
    }
  ];

  // Step 1: Create BehaviourSubject with default value for subscribing first
  private cartItemsList = new BehaviorSubject<any[]>(this.currentCartItem);

  // Step 2: Create Observable for the BehaviourSubject..
  // so any component can subscribe to it.
  latestCartItems: Observable<any[]> = this.cartItemsList.asObservable(); // latestCartItems is subscribabale

  constructor() { }

  // update the cartItems
  updateCart( pdt ) {
    console.log(pdt);
    this.latestCartItems.pipe(take(1)).subscribe(val => {
      console.log(val);
      console.log(...val); // spread operator -- es2015
      const newArr = [...val, pdt];
      console.log(newArr);
      this.cartItemsList.next(newArr);
    });

  }

}
