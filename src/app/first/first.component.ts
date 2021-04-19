import { Component, OnInit } from '@angular/core';

enum Categories {
  Computers,
  Electronics,
  Books,
  Sport,
}

interface Product {
  name: string;
  description: string;
  price: number;
  category: Categories;
  isAvailable: boolean;
}

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  title = 'First Component';

  description = 'Show basic list';

  productsList: Product[];

  constructor() {
    this.productsList = [
      {
        name: 'HP laptop',
        description: 'Some cool laptop',
        price: 1111,
        category: Categories.Computers,
        isAvailable: true,
      },
      {
        name: 'HP manual',
        description: 'Some book',
        price: 22,
        category: Categories.Books,
        isAvailable: true,
      },
      {
        name: 'Ball',
        description: 'Some ball',
        price: 33,
        category: Categories.Sport,
        isAvailable: false,
      }
    ];
  }

  ngOnInit(): void {
  }

}
