import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductItemComponent } from './product-item/product-item.component';
import { BagComponent } from './bag/bag.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ProductItemComponent,
    BagComponent,
  ],
  exports: [
    ProductItemComponent,
    BagComponent,
  ]
})
export class SharedModule { }
