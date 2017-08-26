import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() title: string;

  @Input() image: string;

  @Input() price: number;

  @Input() installments: number;

  @Input() amount?: number;

  @Input() removeCartItem: false;

  @Output() onClickChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  removeToCart($event) {
    console.log($event);
  }

  onClick($event) {
    this.onClickChange.emit({
      $event: $event
    });
  }

}
