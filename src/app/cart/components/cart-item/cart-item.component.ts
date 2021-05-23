import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartProduct, Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input()
  cartProduct!: CartProduct;

  @Output()
  removeOneItem: EventEmitter<Product> = new EventEmitter<Product>();

  @Output()
  addOneItem: EventEmitter<Product> = new EventEmitter<Product>();

  @Output()
  removeAll: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }

  onRemoveOneItem(): void {
    this.removeOneItem.emit(this.cartProduct.product);
  }

  onRemoveAll(): void {
    this.removeAll.emit(this.cartProduct.product);
  }

  onAddOneItem(): void {
    this.addOneItem.emit(this.cartProduct.product);
  }
}
