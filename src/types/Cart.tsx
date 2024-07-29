// src/types/Cart.ts
export interface Cart {
  id: number;
  userId: number;
  date: string;
  products: ProductInCart[];
}

export interface ProductInCart {
  productId: number;
  quantity: number;
}
