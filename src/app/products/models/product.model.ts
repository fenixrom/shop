import { Categories } from '../enums/categories.enum';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: Categories;
  isAvailable: boolean;
  quantity?: number;
}
