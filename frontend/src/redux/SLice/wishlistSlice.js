import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../config";

export const fetchWishlist = createAsyncThunk(
  "/cart/fetchWishlist",
  async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    const res = await fetch(`${BASE_URL}/api/wishlist`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    return data;
  },
);

export const addToWishlist = createAsyncThunk(
  "/wishlist/addToWishlist",
  async ({ productId }, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    const res = await fetch(`${BASE_URL}/api/wishlist/addToWishlist`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productId }),
    });
    return await res.json();
  },
);

export const moveToCart = createAsyncThunk(
  "/wishlist/moveToCart",
  async ({ productId }, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    const res = await fetch(`${BASE_URL}/api/wishlist/moveToCart`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productId }),
    });
    return await res.json();
  },
);

export const removeFromWishlist = createAsyncThunk(
  "/wishlist/removeFromWishlist",
  async ({ productId }, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    const res = await fetch(`${BASE_URL}/api/wishlist/removeFromWishlist`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productId }),
    });
    return await res.json();
  },
);

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlistItems: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWishlist.fulfilled, (state, action) => {
        state.wishlistItems = action.payload;
      })
      .addCase(addToWishlist.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(moveToCart.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(removeFromWishlist.fulfilled, (state) => {
        state.loading = false;
      });
  },
});

export default wishlistSlice;
