import { Component, OnInit, Input } from '@angular/core';

import { Store } from '@ngrx/store';
import { Cart } from '../../state-management/state/cart.state';
import { REMOVE_TO_CART } from '../../state-management/actions/cart.actions';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.css']
})
export class BagComponent implements OnInit {

  @Input() cartListItems;

  constructor(
    private store: Store<Cart>,
  ) { }

  ngOnInit() {
  }

  onRemoveCartItem(payload) {
    this.store.dispatch({ type: REMOVE_TO_CART, payload: { products: payload } });
  }

}
