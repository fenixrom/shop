import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/products/models/product.model';
import { ProductsService } from 'src/app/products/services/products.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {

  addedProducts: Product[] = [];

  private cartSubscription!: Subscription;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartSubscription = this.cartService.addedProducts.subscribe((products: Product[]) => {
      this.addedProducts = products;
    });
  }

  trackByItems(index: number, item: Product): number { return item.id; }

  removeOneItem(product: Product): void {
    this.cartService.removeProduct(product);
  }

  removeAll(product: Product): void {
    this.cartService.removeProduct(product, true);
  }

}
