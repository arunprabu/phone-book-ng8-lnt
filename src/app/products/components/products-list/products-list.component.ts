import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CartDataService } from 'src/app/shared/services/cart-data.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styles: []
})
export class ProductsListComponent implements OnInit {

  productList: any[];

  constructor( private productService: ProductService, private cartDataService: CartDataService) { }

  ngOnInit() {
    this.productList = this.productService.getProductList();
    console.log(this.productList);
  }

  addToCartHandler( pdt ) {
    console.log(pdt);

    // connect to cartDataService
    // push the above pdt to cartDataService -- updateCartItems
    this.cartDataService.updateCart(pdt)
  }

}
