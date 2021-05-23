import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/cart/services/cart.service';
import { Categories } from '../../enums/categories.enum';
import { Product } from '../../../shared/models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  private productsSub!: Subscription;

  constructor(
    private productsService: ProductsService,
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
    this.productsSub = this.productsService.getProducts()
      .subscribe((products: Product[]) => {
        this.products = products;
      });
  }

  addToCard(product: Product): void {
    console.log(product);
    this.cartService.addProduct(product);
  }

}
