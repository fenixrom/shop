import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartItemComponent, CartListComponent } from './components';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CartListComponent, CartItemComponent],
  imports: [
    SharedModule
  ],
  exports: [CartListComponent]
})
export class CartModule { }
