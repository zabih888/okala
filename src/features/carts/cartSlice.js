import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    total: 0,
    post: 0,
  },
  reducers: {
    increment: (state, action) => {
      const findItem = state.cart.findIndex(
        (item) => item._id === action.payload._id
      );
      state.total = state.total + action.payload.offPrice
      if (findItem < 0) {
        state.cart.push(action.payload);
      } else {
        state.cart[findItem].quantity++;
      }
    },
    decrement: (state, action) => {
      const findItem = state.cart.findIndex(
        (item) => item._id === action.payload._id
      );
      state.cart[findItem].quantity--;
    },
    remove: (state, action) => {
      const removeItem = state.cart.filter(
        (item) => item._id !== action.payload._id
      );
      state.cart = removeItem
    },
  },
});

export const { decrement, increment, remove } = cartSlice.actions;
export default cartSlice.reducer;
