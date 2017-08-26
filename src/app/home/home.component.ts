import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/products.service';
import { IProducts } from '../interfaces/products';

import { Store } from '@ngrx/store';
import { Cart } from '../state-management/state/cart.state';
import { ADD_TO_CART } from '../state-management/actions/cart.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listProducts: IProducts[];

  constructor(
    private store: Store<Cart>,
    private productService: ProductService,
  ) {
  }

  ngOnInit() {
    this.productService.getProducts()
      .subscribe(
        (products: any) => this.listProducts = products.products
      );
  }

  addToCart(payload) {
    this.store.dispatch({ type: ADD_TO_CART, payload: { products: payload } });
  }

}