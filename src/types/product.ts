export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  liked?: boolean;
}

export interface Cart extends Product {
  quantity: number;
}
