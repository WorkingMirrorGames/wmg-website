export type ProductType = 'Game' | 'Asset';

export interface Product {
  id: string;
  type: ProductType;
  name: string;
  description: string;
  tags: string[];
}

export interface Products {
  [key: string]: Product;
}

export interface SearchResult {
  text: string;
  url: string;
}
