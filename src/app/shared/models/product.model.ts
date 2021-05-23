import { Categories } from '../../products/enums/categories.enum';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: Categories;
  isAvailable: boolean;
}

export interface CartProduct {
  product: Product;
  quantity: number;
  totalPrice: number;
}
