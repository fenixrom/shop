import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Categories } from '../enums/categories.enum';
import { Product } from '../../shared/models/product.model';

const products: Product[] = [
  {
    id: 1,
    name: 'HP laptop',
    description: 'Some cool laptop',
    price: 1749,
    category: 0,
    isAvailable: true,
  },
  {
    id: 2,
    name: 'HP manual',
    description: 'Some book',
    price: 19,
    category: 2,
    isAvailable: true,
  },
  {
    id: 3,
    name: 'Ball',
    description: 'Some ball',
    price: 31,
    category: 3,
    isAvailable: false,
  }
];

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(products);
  }
}
