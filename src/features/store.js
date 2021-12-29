import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./carts/cartSlice";
import productsRducer from "./products/productsSlice";
import registerReducer from "./users/registerSlice";
import loginReducer from "./users/loginSlice";
export const store = configureStore({
  reducer: {
    products: productsRducer,
    cart: cartReducer,
    register: registerReducer,
    login: loginReducer,
  },
});
