import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const fakeApiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com/",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<any, void>({
      query: () => "products",
    }),
    getProductsById: builder.query<any, number>({
      query: (id) => `products/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductsByIdQuery } = fakeApiSlice;
