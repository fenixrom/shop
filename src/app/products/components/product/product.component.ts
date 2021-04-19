import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Categories } from '../../enums/categories.enum';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input()
  isProductInCard = false;

  @Input()
  product!: Product;

  @Output()
  buy: EventEmitter<Product> = new EventEmitter<Product>();

  @Output()
  removeOneItem: EventEmitter<Product> = new EventEmitter<Product>();

  @Output()
  removeAll: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }

  onBuy(): void {
    console.log(`You added ${this.product.name} to the card`);
    this.buy.emit(this.product);
  }

  onRemoveOneItem(): void {
    this.removeOneItem.emit(this.product);
  }

  onRemoveAll(): void {
    this.removeAll.emit(this.product);
  }

  getCategory(categoryId: number): string {
    return Categories[categoryId];
  }

}
