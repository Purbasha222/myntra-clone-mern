import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../config";

export const fetchCart = createAsyncThunk(
  "/cart/fetchCart",
  async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    const res = await fetch(`${BASE_URL}/api/cart`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    return data;
  },
);

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async ({ productId, quantity }, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    const res = await fetch(`${BASE_URL}/api/cart/addToCart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ productId, quantity }),
    });
    return await res.json();
  },
);

export const updateCart = createAsyncThunk(
  "cart/updateCart",
  async ({ productId, quantity }, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    const res = await fetch(`${BASE_URL}/api/cart/updateCart`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ productId, quantity }),
    });
    return await res.json();
  },
);

export const removeFromCart = createAsyncThunk(
  "/cart/removeFromCart",
  async ({ productId }, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    const res = await fetch(`${BASE_URL}/api/cart/removeFromCart`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ productId }),
    });
    return await res.json();
  },
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.cartItems = action.payload;
      })
      .addCase(addToCart.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(updateCart.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(removeFromCart.fulfilled, (state) => {
        state.loading = false;
      });
  },
});

export default cartSlice;
