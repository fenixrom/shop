import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartProduct, Product } from 'src/app/shared/models/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit, OnDestroy {

  addedProducts: CartProduct[] = [];
  totalProducts = 0;
  totalPrice = 0;

  private cartSubscription!: Subscription;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartSubscription = this.cartService.addedProducts.subscribe((products: CartProduct[]) => {
      this.addedProducts = products;
      this.updateCartDetails();
    });
  }

  ngOnDestroy(): void {
    this.cartSubscription.unsubscribe();
  }

  trackByItems(index: number, item: CartProduct): number { return item.product.id; }

  removeOneItem(product: Product): void {
    this.cartService.removeProduct(product);
  }

  addOneItem(product: Product): void {
    this.cartService.addProductToList(product);
  }

  removeAll(product: Product): void {
    this.cartService.removeProduct(product, true);
  }

  updateCartDetails(): void {
    const details = this.addedProducts.reduce((accumulator, currentValue) => {
      accumulator.productsCount = accumulator.productsCount + currentValue.quantity;
      accumulator.totalPrice = accumulator.totalPrice + currentValue.totalPrice;
      return accumulator;
    }, {
      productsCount: 0,
      totalPrice: 0,
    });

    this.totalProducts = details.productsCount;
    this.totalPrice = details.totalPrice;
  }

}
