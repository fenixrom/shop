import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../../products/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  addedProducts: Subject<Product[]> = new Subject<Product[]>();

  private products: Product[] = [];

  constructor() { }

  addProductToList(product: Product): void {
    const productInCart = this.products.find((item) => {
      return item.id === product.id;
    });
    if (productInCart?.quantity) {
      productInCart.quantity = productInCart.quantity + 1;
      this.products = this.products.map((item) => {
        return productInCart.id === item.id ? productInCart : item;
      });
    } else {
      this.products = [...this.products, {
        ...product,
        quantity: 1,
      }];
    }
    this.addedProducts.next(this.products);
  }

  removeProduct(product: Product, removeAll: boolean = false): void {
    const productInCart = this.products.find((item) => {
      return item.id === product.id;
    });
    if (productInCart?.quantity && productInCart.quantity > 1 && !removeAll) {
      this.products = this.products.map((item) => {
        return productInCart.id === item.id
        ? {
          ...productInCart,
          quantity: productInCart.quantity ? productInCart.quantity - 1 : 1,
        }
        : item;
      });
    } else {
      this.products = this.products.filter((item) => {
        return item.id !== product.id;
      });
    }
    this.addedProducts.next(this.products);
  }
}
