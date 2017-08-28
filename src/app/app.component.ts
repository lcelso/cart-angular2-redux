import { Component, OnInit, DoCheck } from '@angular/core';
import { CartService } from './services/cart.service';

import { Store } from '@ngrx/store';
import { Cart} from './state-management/state/cart.state';
import { REMOVE_TO_CART } from './state-management/actions/cart.actions';
import { IProducts } from './interfaces/products';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, DoCheck {
  cartListItems: any;

  amountTotal: number;

  title = 'app';

  constructor(
    private store: Store<Cart>,
    private cartService: CartService,
  ) {}

  ngOnInit() {
    this.store.select('cartReducer').subscribe((state: any) => {
      this.cartListItems = state.products;
    });
  }

  ngDoCheck() {
    this.amountTotal = this.cartService.getTotalAmount(this.cartListItems);
  }
}
