// src/service/Api/FakeApiSlice.ts

import { Cart } from "../../../types/Cart";
import ecomApi from "../ecomApi";

const fakeApi = ecomApi.injectEndpoints({
  endpoints: (builder) => ({
    getCarts: builder.query<Cart[], void>({
      query: () => "carts",
    }),
    getCartById: builder.query<Cart, number>({
      query: (id) => `carts/${id}`,
    }),
    getCartsByDateRange: builder.query<
      Cart[],
      { startDate: string; endDate: string }
    >({
      query: ({ startDate, endDate }) =>
        `carts?startdate=${startDate}&enddate=${endDate}`,
    }),
    getCartsByUserId: builder.query<Cart[], number>({
      query: (userId) => `carts/user/${userId}`,
    }),
    addCart: builder.mutation<Cart, Partial<Cart>>({
      query: (newCart) => ({
        url: "carts",
        method: "POST",
        body: newCart,
      }),
    }),
    editCart: builder.mutation<Cart, { id: number; cart: Partial<Cart> }>({
      query: ({ id, cart }) => ({
        url: `carts/${id}`,
        method: "PUT",
        body: cart,
      }),
    }),
    deleteCart: builder.mutation<Cart, number>({
      query: (id) => ({
        url: `carts/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetCartsQuery,
  useGetCartByIdQuery,
  useGetCartsByDateRangeQuery,
  useGetCartsByUserIdQuery,
  useAddCartMutation,
  useEditCartMutation,
  useDeleteCartMutation,
} = fakeApi;

export default fakeApi;
