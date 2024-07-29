// src/service/ecomApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const ecomApi = createApi({
  reducerPath: "ecomApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
  endpoints: () => ({}),
});

export default ecomApi;
