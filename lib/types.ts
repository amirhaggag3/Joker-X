export interface Product {
  id: number;
  slug: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  image: string;
  description: string;
  sizes: string[];
  colors: string[];
  stock: number;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}
