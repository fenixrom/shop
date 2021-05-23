import { Component, OnInit } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
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
  products$: Observable<Product[]> = of([]);

  sortOptions = [{
    name: 'name',
    value: 'name'
  }, {
    name: 'price',
    value: 'price'
  }];

  selectedOption = this.sortOptions[0].name;

  order = false;

  private productsSub!: Subscription;

  constructor(
    private productsService: ProductsService,
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
    this.products$ = this.productsService.getProducts();
  }

  addToCard(product: Product): void {
    console.log(product);
    this.cartService.addProduct(product);
  }

}
