import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CartProduct, Product } from '../../shared/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  addedProducts: Subject<CartProduct[]> = new Subject<CartProduct[]>();

  private products: CartProduct[] = [];

  constructor() { }

  addProductToList(product: Product): void {
    const productInCart = this.products.find((item) => {
      return item.product.id === product.id;
    });
    if (productInCart) {
      productInCart.quantity = productInCart.quantity + 1;
      productInCart.totalPrice = productInCart.product.price * productInCart.quantity;
      this.products = this.products.map((item) => {
        return productInCart.product.id === item.product.id ? productInCart : item;
      });
    } else {
      this.products = [...this.products, {
        product,
        quantity: 1,
        totalPrice: product.price
      }];
    }
    this.addedProducts.next(this.products);
  }

  removeProduct(product: Product, removeAll: boolean = false): void {
    const productInCart = this.products.find((item) => {
      return item.product.id === product.id;
    });
    if (productInCart?.quantity && productInCart.quantity > 1 && !removeAll) {
      const newQuantity = productInCart.quantity - 1;
      const newRecord = {
        ...productInCart,
        quantity: newQuantity,
        totalPrice: productInCart.product.price * newQuantity
      };
      this.products = this.products.map((item) => {
        return productInCart.product.id === item.product.id
        ? newRecord
        : item;
      });
    } else {
      this.products = this.products.filter((item) => {
        return item.product.id !== product.id;
      });
    }
    this.addedProducts.next(this.products);
  }
}
