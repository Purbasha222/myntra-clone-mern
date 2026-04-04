import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../config";

export const fetchProducts = createAsyncThunk(
  "/products/fetchProducts",
  async () => {
    const res = await fetch(`${BASE_URL}/api/products`);
    const data = await res.json();
    console.log(data, "bunny");
    return data;
  },
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        console.log(action.payload, "wow");
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch products";
      });
  },
});

export default productSlice;

export const { setProducts } = productSlice.actions;
