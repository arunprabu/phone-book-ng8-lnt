import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';

// config the routes
const routes: Routes = [
  {
    path: 'products', children: [
      { path: '', component: ProductsListComponent },
      { path: 'cart', component: CartComponent },
      { path: ':id', component: ProductDetailsComponent }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // reg the routes
    RouterModule.forChild(routes)
  ],
  // export
  exports: [
    RouterModule
  ]
})
export class ProductsRoutingModule { }
