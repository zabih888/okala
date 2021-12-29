import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAsynicProducts = createAsyncThunk(
  "products/getAsyncProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:5000/api/product");
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState = {
  products: [],
  loading: false,
  error: null,
};
const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: {
    [getAsynicProducts.fulfilled]: (state, action) => {
      return {
        ...state,
        products: action.payload,
        loading: false,
        error: null,
      };
    },
    [getAsynicProducts.pending]: (state, action) => {
      return { ...state, loading: true, products: [], error: null };
    },
    [getAsynicProducts.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        products: [],
        error: action.payload,
      };
    },
  },
});

export default productsSlice.reducer;
