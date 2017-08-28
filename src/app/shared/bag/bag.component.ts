import { Component, Input } from '@angular/core';

import { Store } from '@ngrx/store';
import { Cart } from '../../state-management/state/cart.state';
import { REMOVE_TO_CART } from '../../state-management/actions/cart.actions';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.scss']
})
export class BagComponent {

  @Input() cartListItems;

  constructor(
    private store: Store<Cart>,
  ) { }
  onRemoveCartItem(payload) {
    this.store.dispatch({ type: REMOVE_TO_CART, payload: { products: payload } });
  }

}
