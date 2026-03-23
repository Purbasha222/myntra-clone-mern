import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "/products/fetchProducts",
  async () => {
    const res = await fetch("http://localhost:8000/api/products");
    const data = await res.json();
    return data;
  },
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    wishlist: [],
    cart: [],
    loading: false,
    error: null,
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },

    setWishlist: (state, action) => {
      const id = action.payload.id;
      if (state.wishlist.find((item) => item.id === id)) {
        return;
      }
      state.wishlist = [action.payload, ...state.wishlist];
    },

    removeWishlist: (state, action) => {
      const id = action.payload.id;
      state.wishlist = state.wishlist.filter((item) => item.id !== id);
    },

    setCart: (state, action) => {
      const id = action.payload.id;
      if (state.cart.find((item) => item.id === id)) {
        return;
      }
      state.cart = [action.payload, ...state.cart];
    },

    removeCart: (state, action) => {
      const id = action.payload.id;
      state.cart = state.cart.filter((item) => item.id !== id);
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
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch products";
      });
  },
});

export default productSlice;

export const { setProducts, setWishlist, removeWishlist, setCart, removeCart } =
  productSlice.actions;
