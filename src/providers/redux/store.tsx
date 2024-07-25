// src/app/store.ts
import { configureStore } from "@reduxjs/toolkit";
import { productApiSlice } from "../../service/Api/Product/ProductApiSlice";
import { userApiSlice } from "../../service/Api/Users/UsersApiSlice";

const store = configureStore({
  reducer: {
    [productApiSlice.reducerPath]: productApiSlice.reducer,
    [userApiSlice.reducerPath]: userApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productApiSlice.middleware)
      .concat(userApiSlice.middleware),
});

export default store;
