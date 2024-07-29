// src/types/Cart.ts
// export interface Cart {
//   id: number;
//   userId: number;
//   date: string;
//   products: ProductInCart[];
// }

export interface ProductInCart {
  productId: number;
  quantity: number;
}
export interface Cart {
  id: number;
  userId: number;
  date: string;
  products: {
    productId: number;
    quantity: number;
  }[];
  // Add any other properties as needed
}
