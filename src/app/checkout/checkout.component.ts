import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/products.service';

import { Store } from '@ngrx/store';
import { Cart} from '../state-management/state/cart.state';
import { ADD_TO_CART, REMOVE_TO_CART } from '../state-management/actions/cart.actions';
import { IProducts } from '../interfaces/products';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cartListItems: Array<IProducts>;

  constructor(
    private store: Store<Cart>,
    private productService: ProductService,
  ) {}

  ngOnInit() {
    this.store.select('cartReducer')
      .subscribe((state: any) => {
        this.cartListItems = state.products;
      });
  }

  onRemoveCartItem(payload) {
    this.store.dispatch({ type: REMOVE_TO_CART, payload: { products: payload } });
  }

}
