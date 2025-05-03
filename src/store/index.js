import { configureStore } from "@reduxjs/toolkit";
import { reducerShop } from "./shopSlice";
import { authReducer } from "./authSlice";
import { cartReducer } from "./cartSlice";

export const store = configureStore({
  reducer: {
    shop: reducerShop,
    auth: authReducer,
    cart: cartReducer,
  },
});
