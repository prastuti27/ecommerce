import { configureStore } from "@reduxjs/toolkit";
import { fakeApiSlice } from "../../service/Api/FakeApiSlice";

const store = configureStore({
  reducer: {
    [fakeApiSlice.reducerPath]: fakeApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fakeApiSlice.middleware),
});

export default store;
