// src/service/Api/FakeApiSlice.ts
import { Product } from "../../../types/Product";
import ecomApi from "../ecomApi";

export const productApiSlice = ecomApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => "products",
    }),
    getProductsById: builder.query<Product, number>({
      query: (id) => `products/${id}`,
    }),
    addProduct: builder.mutation<Product, Partial<Product>>({
      query: (newProduct) => ({
        url: "products",
        method: "POST",
        body: newProduct,
      }),
    }),
    editProduct: builder.mutation<
      Product,
      { id: number; product: Partial<Product> }
    >({
      query: ({ id, product }) => ({
        url: `products/${id}`,
        method: "PUT",
        body: product,
      }),
    }),
    deleteProduct: builder.mutation<Product, number>({
      query: (id) => ({
        url: `products/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductsByIdQuery,
  useAddProductMutation,
  useEditProductMutation,
  useDeleteProductMutation,
} = productApiSlice;
