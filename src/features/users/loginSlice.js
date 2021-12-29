import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const postAsyncLogin = createAsyncThunk(
  "users/postAsyncLogin",
  async (payload, { rejectWithValue }) => {
    try {
      await axios.post("http://localhost:5000/api/user/login", payload);
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

const initialState = {
  success: false,
  loading: false,
  error: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  extraReducers: {
    [postAsyncLogin.fulfilled]: (state, action) => {
      return { ...state, success: true, loading: false, error: null };
    },
    [postAsyncLogin.pending]: (state, action) => {
      return { ...state, success: false, loading: true, error: null };
    },
    [postAsyncLogin.rejected]: (state, action) => {
      return {
        ...state,
        success: false,
        loading: false,
        error: action.payload,
      };
    },
  },
});

export default loginSlice.reducer;
