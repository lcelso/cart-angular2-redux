import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductItemComponent } from './product-item/product-item.component';
import { BagComponent } from './bag/bag.component';
import { TotalComponent } from './total/total.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ProductItemComponent,
    BagComponent,
    TotalComponent,
  ],
  exports: [
    ProductItemComponent,
    BagComponent,
    TotalComponent,
  ]
})
export class SharedModule { }
