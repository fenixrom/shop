import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { CartProduct, Product } from 'src/app/shared/models/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit, OnDestroy {

  addedProducts: CartProduct[] = [];
  totalProducts$!: BehaviorSubject<number>;
  totalPrice$!: BehaviorSubject<number>;
  isProductInCart!: boolean;

  private cartSubscription!: Subscription;
  private productInCartSubscription!: Subscription;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartSubscription = this.cartService.addedProducts.subscribe((products: CartProduct[]) => {
      this.addedProducts = products;
    });
    this.totalProducts$ = this.cartService.totalQuantity$;
    this.totalPrice$ = this.cartService.totalSum$;
    this.productInCartSubscription = this.cartService.isEmptyCart$.subscribe((isEmpty: boolean) => {
      this.isProductInCart = !isEmpty;
    });
  }

  ngOnDestroy(): void {
    this.cartSubscription.unsubscribe();
    this.productInCartSubscription.unsubscribe();
  }

  trackByItems(index: number, item: CartProduct): number { return item.product.id; }

  removeOneItem(product: Product): void {
    this.cartService.decreaseQuantity(product);
  }

  clearCart(): void {
    this.cartService.removeAllProducts();
  }

  addOneItem(product: Product): void {
    this.cartService.increaseQuantity(product);
  }

  removeAll(product: Product): void {
    this.cartService.removeProduct(product);
  }

  // updateCartDetails(): void {
  //   const details = this.addedProducts.reduce((accumulator, currentValue) => {
  //     accumulator.productsCount = accumulator.productsCount + currentValue.quantity;
  //     accumulator.totalPrice = accumulator.totalPrice + currentValue.totalPrice;
  //     return accumulator;
  //   }, {
  //     productsCount: 0,
  //     totalPrice: 0,
  //   });

  //   this.totalProducts = details.productsCount;
  //   this.totalPrice = details.totalPrice;
  // }

}
