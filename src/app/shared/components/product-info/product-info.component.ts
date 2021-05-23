import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Categories } from 'src/app/products/enums/categories.enum';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductInfoComponent {

  @Input()
  product!: Product;

  constructor() { }

  getCategory(categoryId: number): string {
    return Categories[categoryId];
  }

}
