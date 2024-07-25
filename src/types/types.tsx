// src/types/types.ts
// src/types/types.ts
export interface Product {
  id: number; // Ensure id is always a number
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export interface ProductFormState {
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}
