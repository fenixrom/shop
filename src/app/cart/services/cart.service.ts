import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartProduct, Product } from '../../shared/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  addedProducts: BehaviorSubject<CartProduct[]> = new BehaviorSubject<CartProduct[]>([]);


  cartProducts: CartProduct[] = [];
  totalQuantity$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  totalSum$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  isEmptyCart$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  // private products: CartProduct[] = [];

  constructor() { }

  getProducts(): Observable<CartProduct[]> {
    return this.addedProducts;
  }

  addProduct(product: Product, count: number = 1): void {
    const isAlreadyAdded = this.cartProducts.find((prod) => prod.product.id === product.id);
    if (isAlreadyAdded) {
      this.increaseQuantity(product, count);
    } else {
      this.cartProducts = [...this.cartProducts, {
        product,
        quantity: count,
        totalPrice: count * product.price
      }];
      this.updateCartData();
    }
  }

  removeProduct(product: Product): void {
    this.cartProducts = this.cartProducts.filter((cartProduct: CartProduct) => {
      return cartProduct.product.id !== product.id;
    });
    this.updateCartData();
  }

  increaseQuantity(product: Product, count: number = 1): void {
    this.changeQuantity(product, count);
  }

  decreaseQuantity(product: Product, count: number = -1): void {
    this.changeQuantity(product, count);
  }

  removeAllProducts(): void {
    this.cartProducts = [];
    this.updateCartData();
  }

  updateCartData(): void {
    const details = this.cartProducts.reduce((accumulator, currentValue) => {
      accumulator.productsCount = accumulator.productsCount + currentValue.quantity;
      accumulator.totalPrice = accumulator.totalPrice + currentValue.totalPrice;
      return accumulator;
    }, {
      productsCount: 0,
      totalPrice: 0,
    });
    this.totalQuantity$.next(details.productsCount);
    this.totalSum$.next(details.totalPrice);
    this.isEmptyCart$.next(this.cartProducts.length === 0);
    this.addedProducts.next(this.cartProducts);
  }

  private changeQuantity(product: Product, quantity: number = 1): void {
    const cartProd = this.cartProducts.find((cartProduct: CartProduct) => cartProduct.product.id === product.id);
    const newQuantity = cartProd ? cartProd?.quantity + quantity : 0;
    if (newQuantity <= 0) {
      this.removeProduct(product);
    } else {
      this.cartProducts = this.cartProducts.map((cartProduct: CartProduct) => {
        return cartProduct.product.id === product.id
          ? {
            product: {...product},
            quantity: newQuantity,
            totalPrice: newQuantity * product.price
          }
          : {...cartProduct};
      });
      this.updateCartData();
    }
  }
}
